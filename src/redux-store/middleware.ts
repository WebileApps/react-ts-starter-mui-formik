import { Middleware } from 'redux';
import { AppActions } from './types';
import { LOGOUT_SUCCESS } from './types/auth';
import en from '../lang/en-us';

export const CALL_API = 'CALL_API';
export const BASE_URL = process.env.REACT_APP_BASE_URL;

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Expires: 0,
};

class AuthError extends Error {}

interface CustomError {
    error: boolean;
    message: string;
    code: number;
}

export interface ResponseBody<T> {
    type: AppActions;
    body: T;
    error?: any;
}

// interface ApiResBody {
//     data: any;
//     count: number;
//     error: string[];
//     success: boolean;
// }

export interface ResponseType {
    data: any;
    error: null | CustomError;
}

export interface ActionReqType {
    types: string[];
    body?: any;
    enableFixture?: boolean;
    json?: string;
    url: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    contentType?: any;
}

async function invokeAPI({
    endpoint,
    token,
    config,
    headerContent,
    enableFixture,
    json,
    contentType,
}: {
    endpoint: string;
    token: string;
    config: any;
    headerContent?: object;
    enableFixture?: boolean;
    json?: string;
    contentType?: any; 
}): Promise<ResponseType> {
    let headers = token
        ? { ...DEFAULT_HEADERS, Authorization: `Bearer ${token}` }
        : { ...DEFAULT_HEADERS };
    const updatedConfig = {
        ...config,
        headers: { ...headers, ...headerContent },
    };
    const url = enableFixture ? `/fixtures/${json}` : `${BASE_URL}${endpoint}`;
    const response = enableFixture ? await fetch(url) : await fetch(url, updatedConfig);

    if (response.status === 401) {
        throw new AuthError(en.networkText.timeOut);
    }
    
    let body: any;
    try {
        if(typeof contentType === 'undefined') {
            body = await response.json();
        } else if(contentType === 'application/pdf'){
            body = await response.blob();
        }
    } catch (err) {}
    
    if (response.status >= 400) {
        const { errors = [] } = body || {};
        const [firstError] = errors;
        throw new Error(
            firstError?.message ||
                en.networkText.unableToProcess
        );
    }

    return { data: body, error: null };
}

export const middleWareDispatch: Middleware = (store) => (next) => async (action) => {
    if (typeof action[CALL_API] === 'undefined') {
        return next(action);
    }
    try {
        const {
            url,
            types,
            body,
            method,
            json,
            enableFixture = false,
            contentType,
        }: ActionReqType = action[CALL_API];
        const [successType, errorType] = types;
        const {
            authReducer: { token = '' },
        } = store.getState();
        const payload = {
            endpoint: url,
            token,
            config: {
                method,
                body: JSON.stringify(body),
            },
            enableFixture,
            json,
            contentType,
        };
        const { data, error }: ResponseType = await invokeAPI(payload);
        if (data || !error) {
            next({ type: successType, body: data });
        } else {
            next({ type: errorType, error: error });
        }
        return { body: data, error };
    } catch (error) {
        if (error instanceof AuthError) {
            next({ type: LOGOUT_SUCCESS });
        }
        throw error;
    }
};
