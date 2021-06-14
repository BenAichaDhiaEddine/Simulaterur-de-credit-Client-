import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import Cookies from 'js-cookie';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { loginSuccess, logoutUserSuccess, apiError } from "./actions";

//Include Both Helper File with needed methods

import { post } from "../../../helpers/apiMethods";

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(post, "/superAdmin/auth/login", {
      email: user.email,
      password: user.password,
    });
    let token = response.data.token.accessToken;
    Cookies.set('S_A_TOKEN', token, { expires: 7 });
    yield put(loginSuccess(response));

    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    Cookies.remove('S_A_TOKEN');

    //if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
     // const response = yield call(fireBaseBackend.logout);
      //yield put(logoutUserSuccess(response));
    //}
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* authSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default authSaga;
