export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const VERIFY_OTP = 'VERIFY_OTP';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';

export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_PASSWORD_SUCCESS = 'SET_PASSWORD_SUCCESS';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const RESEND_LOGIN_OTP = 'RESEND_LOGIN_OTP'
export const RESEND_LOGIN_OTP_SUCCESS = 'RESEND_LOGIN_OTP_SUCCESS'

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';

export const VERIFY_FORGOT_PASSWORD = 'VERIFY_FORGOT_PASSWORD';
export const VERIFY_FORGOT_PASSWORD_SUCCESS = 'VERIFY_FORGOT_PASSWORD_SUCCESS';

export const REDIRECT_ACTION = 'REDIRECT_ACTION';

export const RESET_PASSWORD = 'RESET_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'

export interface SignupPayload {
    pan: string;
    mobile: string;
    pekrn: string;
    action?:string;
}

export interface SignupResponse {
    reqId: string;
    otpRef: string;
    otp: string;
}

export interface VerifyOtpPayload {
    otpRef: string;
    reqId: string;
    enteredOtp: string;
    pan?:string,
    pekrn?:string,
    mobile?:string,
    action:string;
}

export interface SetPasswordPayload {
    otpRef: string;
    reqId: string;
    password: string;
    displayName: string;
    action:string
}
export interface LoginPayload {
    pan?: string;
    pekrn?: string;
    password: string;
    userId?: string;
    captcha?:string | null;
}

export type PasswordChange = {
    pan?: string;
    pekrn?: string;
    newPassword: string;
    action?:string
}
export interface ChangePasswordPayload extends PasswordChange {
    currentPassword: string;
    mobile: string;
}
export interface ForgotPasswordPayload extends PasswordChange { 
    action:string
    userId:string
}

export interface QUESTION_PROPS{
    questionTypeId: string;
    secretAnswer: string;
}

export interface AuthState {
    token: string | null;
    notificationCount : number;
    redirectPath: string| null;
    isLoggedOut: boolean;
    isLoggedIn: boolean;
    firstTimeLoggedIn:boolean
}

export type LOGIN_OTP_VERIFY_PAYLOAD = { 
    userId:string,
    reqId:string,
    otpRef:string,
    enteredOtp:string,
    action?:'OTP_LOGIN'
}

export type LOGIN_OTP_GENERATE_PAYLOAD = { 
    userId:string
    action?:'OTP_LOGIN'
}

export type LOGIN_RESEND_OTP = {
    action?:'OTP_LOGIN'
    reqId:string,
    otpRef:string,
}

export type ReadNotificationInfo = { 
    notificationId:string,
    readStatus: 'Y' | 'N'
}

interface onSignUp {
    type: typeof SIGNUP_SUCCESS;
    body: SignupPayload;
}

export interface OTP_RESPONSE extends SignupResponse{}

export type AuthTypes = onSignUp;
