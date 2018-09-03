import * as actionTypes from "./actionTypes";
import {all, call, takeLatest, put} from "redux-saga/effects";
import userService from "client/services/userService";

function* sendSettings(action) {
    try {
        const user = yield call(userService.updateUser, action);
        yield put({
            type: actionTypes.USER_SETTINGS_SEND_SUCCES,
            payload: user
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: actionTypes.USER_SETTINGS_SEND_FAILURE
        });
    }
}

function* resetUserPassword(action) {
    try {
        const user = yield call(userService.resetUserPassword, action);
        yield put({
            type: actionTypes.USER_PASSWORD_RESET_SUCCESS,
            payload: user
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: actionTypes.USER_PASSWORD_RESET_FAILURE
        });
    }
}

function* uploadAvatar(action) {
    try {
        const avatar = yield call(userService.uploadAvatar(action));
        yield put({
            type: actionTypes.UPLOAD_USER_AVATAR_SUCCESS,
            payload: {
                avatar: avatar.body.secure_url
            }
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: actionTypes.UPLOAD_USER_AVATAR_FAILURE
        });
    }
}

export default function* personalSettingsSaga() {
    yield all([
        takeLatest(actionTypes.USER_SETTINGS_SEND, sendSettings),
        takeLatest(actionTypes.UPLOAD_USER_AVATAR, uploadAvatar),
        takeLatest(actionTypes.USER_PASSWORD_RESET, resetUserPassword)
    ]);
}
