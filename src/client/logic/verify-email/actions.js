import {
    VERIFICATION_DATA_SEND, VERIFICATION_DATA_VERIFIED
} from "./actionTypes";


export function sendVerificationData() {
    return {
        type: VERIFICATION_DATA_SEND
    }
}

export function verificationDataVerified() {
    return {
        type: VERIFICATION_DATA_VERIFIED
    }
}