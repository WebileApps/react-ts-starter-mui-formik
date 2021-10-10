// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: {
        headerLinks: {
            link1: 'Quick Links',
            link2: 'Sign In',
            link3: 'Sign Up',
        },
        switchActions: {
            loginWithPassword: 'Sign In Via Password',
            loginWithOTP: 'Sign In Via OTP',
        },
        form: {
            title1: 'Dear ',
            secondaryTitle: 'Investor',
            titleCaption: 'Sign in to experience a wide range of services',
            termstext: 'By using this site you agree to our ',
            termsLink: 'Terms & Conditions',
            panOrPekrn: {
                label: 'Enter PAN / PEKRN',
                validation: {
                    emptyError: 'User id Required',
                    minLengthError: 'User id should be 10 digit unique alphanumeric ',
                },
            },
            password: {
                label: 'Enter Password',
                validation: {
                    emptyError: 'Password Required',
                },
            },
            rememberMe: {
                label: 'Remember me',
            },
            action: {
                button: {
                    label: 'Sign In',
                    verifyOtp: 'Verify OTP',
                },
                href: {
                    forgotPassword: {
                        label: 'Forgot Password?',
                    },
                },
            },
            answer: 'please enter your answer',
        },
        quickLinks: {
            title: 'Quick ',
            secondaryTitle: 'Links',
            easyAccess: 'Easy access for seamless experience',
            transmission: {
                title: 'Transmission Request ',
                subtitle: 'Demise of secondary holder',
            },
            pan: {
                title: 'Update PAN Details ',
            },
            applyPan: {
                title: 'Apply for PAN',
            },
        },
        applyPan: {
            heading: 'Apply for PAN',
            info: 'Please select any one gateway from the below options',
            infoBottom: '(Note: You will be re-directed to a new page outside MFCentral)',
            clickHere: ' Click Here',
            websiteInfo:
                'For more information on PAN – Online application, please visit the Income Tax Website :',
        },
    },
    footer: {
        copyRightText: '© 2021 MFCentral. All rights reserved.',
        actions: {
            termsOfUse: {
                title: 'Terms of Use',
            },
            privacy: {
                title: 'Privacy Policy',
            },
            termsOfBusiness: {
                title: 'Disclosures',
            },
        },
        siteDeveloper: {
            title: 'Site designed by KFintech & CAMS',
        },
    },
    signUp: {
        switchActions: {
            sigUpWithPAN: 'PAN',
            sigUpWithPEKRN: 'PEKRN',
        },
        signupText: 'Sign Up',
        form: {
            title1: 'Welcome, ',
            secondaryTitle: 'Investor!',
            titleCaption: 'Let’s get started! ',
            Disclamer: {
                disclamerText: 'Disclaimer - ',
                disclamerInfo: 'I have read and accept the Terms of use.',
            },
            Policies: {
                title: ' I agree and accept the ',
                TandC: 'Terms & Conditions',
            },
            pan: {
                label: 'Enter your PAN',
                validations: {
                    emptyError: 'PAN Required',
                    regexError: 'PAN Should be ten-digit unique alphanumeric number',
                    individualPan: 'Please enter individual pan number',
                },
            },
            mobile: {
                label: 'Enter your registered mobile number',
                validations: {
                    emptyError: 'Mobile Number Required',
                    regexError: 'Enter a valid 10 digit mobile number',
                },
            },
            pekrn: {
                label: 'Enter your PEKRN',
                validations: {
                    emptyError: 'PEKRN Required',
                    regexError: 'PEKRN length should be 9-12 characters',
                },
            },
            action: {
                button: 'Create Account',
            },
            TermsAndCond: {
                title1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            },
        },
    },
    updateSecurityQuestion: {
        heading: 'Change/Update Security Questions',
        success: {
            back: 'back',
        },
        successMessage: 'Your request has been successfully accepted',
    },
    changePassword: {
        heading: 'Change ',
        headingBold: 'Password',
        oldPassword: 'Old Password',
        setNewPassword: 'Set New Password',
        confirmPassword: 'Confirm Password',
        save: 'Save',
        cancel: 'Cancel',
    },
    forgotPassword: {
        heading: 'Forgot Password?',
        info: 'Please enter PAN/PEKRN to receive one-time password on your registered mobile number',
        otpinfo: 'Please enter the 6-digit OTP sent to ',
        label: 'Enter PAN / PEKRN',
        otpAuthentication: 'OTP Authentication',
        subHeading: 'Please enter the 6-digit OTP sent to your registered email id ',
        action: {
            otpRequest: {
                label: 'Request OTP',
            },
        },
    },
    signupOtp: {
        heading: 'OTP Authentication',
        headingBold: 'OTP',
        action: {
            verifyOtp: 'Verify OTP',
        },
    },
    verifyOtp: {
        heading: 'Enter 6 Digit OTP',
        otpinfo: 'Please enter the 6-digit OTP sent to ',
        registered: 'Enter registered PAN / PEKRN',
    },
    resetPassword: {
        heading: 'Reset Password',
        reset: 'Reset',
    },
    setPassword: {
        heading: 'Secure your Account',
        user: 'User ID',
        disclimer: {
            t1: 'Please use',
            t2: ' while login',
        },
        setPassword: 'Set Password',
        setinput: 'Set New Password',
        confirmPassword: 'Confirm New Password',
        displayName: 'Display Name',
        twoFactor: 'Two factor authentication',
        selectQuestion: 'Security Question ',
        signIn: 'Sign In ',
        twoFAHeading: 'Security Question',
        answer: 'Answer',
        modal: {
            heading: 'Congratulations!',
            info: 'Success! You are now registered with MFCentral.',
        },
        action: {
            continue: 'Submit',
            signIn: 'Sign In',
        },
    },
    passwordGuidelines: {
        one: 'Minimum 8 characters without any space.',
        two: 'One Uppercase, One Lowercase and One Numeric value',
        three: 'One special character',
    },
    networkText: {
        timeOut: 'Your active session has timeout. Request you re-login.',
        unableToProcess:
            'Sorry! We are unable to process your request. Please re-try after sometime.',
    },
};
