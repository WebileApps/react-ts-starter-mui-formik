import { ResponseBody } from '../middleware';
import {
    AuthState,
    AuthTypes,
    LOGOUT_SUCCESS,
    SET_PASSWORD,
    REDIRECT_ACTION,
    LOGIN_SUCCESS,
    FORGOT_PASSWORD_SUCCESS,
    SIGNUP_SUCCESS,
} from '../types/auth';

const initState: Partial<AuthState> = {
    token: null,
};
function authReducer(state = initState, action: AuthTypes & ResponseBody<any>) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case FORGOT_PASSWORD_SUCCESS:
        case LOGIN_SUCCESS: {
            const { userSubjectReference } = action.body;
            return {
                ...state,
                token: state.isLoggedIn ? state.token : userSubjectReference || state.token,
            };
        }
        case SET_PASSWORD: {
            return state;
        }
        case LOGOUT_SUCCESS: {
            return { ...initState, isLoggedOut: true, firstTimeLoggedIn: false };
        }
        case REDIRECT_ACTION: {
            const { redirectPath = '/', isLoggedOut = false } = action.body;
            return {
                ...state,
                redirectPath,
                isLoggedOut,
            };
        }
        default:
            return state;
    }
}

export default authReducer;
