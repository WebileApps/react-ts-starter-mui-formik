import { combineReducers } from 'redux';
import auth from './auth';
export interface RootStateType {
    auth: any;
    router: any;
}

export const rootReducer = (history: any) =>
    combineReducers({
        router: history,
        auth,
    });

export type RootState = ReturnType<typeof rootReducer>;
