import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import {
  GET_FUNCTIONAL_ADMIN_LIST,
  ADD_FUNCTIONAL_ADMIN,
  TOGGLE_ADMIN,
  EDIT_FUNCTIONAL_AMDIN,
  GET_FUNCTIONAL_FULL_ADMIN_LIST,
  DELETE_ADMIN
} from "./types";

import { get, post, update, remove } from "../../helpers/apiMethods";
import {
  getAdmins,
  getFullAdminsSuccess,
  addAdminSuccess,
  EditAdminSuccess,
  getAdminsSuccess,
  toggleAdminSuccess,
  deleteAdminSuccess
} from "./actions";
const adminsApi = "superAdmin/admin";

function* deleteAdminApi({ payload }) {
  let id = payload
  try {
    yield call(remove, `${adminsApi}/${id}`);
    yield put(deleteAdminSuccess(id));
    yield put(getAdmins());
  } catch (error) {
    console.error(error);
  }
}
function* getAdminsListApi() {
  try {
    const response = yield call(get, `${adminsApi}/available-admins`);
    const response1 = response.data.filter((one) => one.deleted===false);
    yield put(getAdminsSuccess(response1));
  } catch (error) {
    console.error(error);
  }
}

function* getFullAdminsListApi() {
  try {
    const response = yield call(get, `${adminsApi}/get-admins`);
    yield put(getFullAdminsSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
}
function* switchAdminApi({ payload }) {
  try {
    yield call(update, `${adminsApi}/${payload.id}`, {
      activated: payload.activated,
    });
    yield put(getAdmins());
  } catch (error) {
    console.error(error);
  }
}
function* editAdminApi({ payload }) {
  console.log("payload :" , payload.dataToSubmit ) 
  try {
    const response = yield call(
      update,
      `${adminsApi}/${payload.id}`,
      payload.dataToSubmit
    );
    yield put(EditAdminSuccess(response));
    yield put(getAdmins());
  } catch (error) {
    console.error(error);
  }
}

function* addAdminApi({ payload }) {
  try {
    let response = yield call(post, `${adminsApi}/register`, payload);
    yield put(addAdminSuccess(response));
    yield put(getAdmins());
  } catch (err) {
    console.log(err)
  }
}
export function* EditAdmin() {
  yield takeEvery(EDIT_FUNCTIONAL_AMDIN, editAdminApi);
}
export function* switchAdminStatus() {
  yield takeEvery(TOGGLE_ADMIN, switchAdminApi);
}
export function* getFullAdminsList() {
  yield takeEvery(GET_FUNCTIONAL_FULL_ADMIN_LIST, getFullAdminsListApi);
}
export function* getAdminsList() {
  yield takeEvery(GET_FUNCTIONAL_ADMIN_LIST, getAdminsListApi);
}

export function* AddNewAdmin() {
  yield takeEvery(ADD_FUNCTIONAL_ADMIN, addAdminApi);
}

export function* deleteAdmin() {
  yield takeEvery(DELETE_ADMIN, deleteAdminApi);
}

function* AdminSaga() {
  yield all([
    fork(getAdminsList),
    fork(getFullAdminsList),
    fork(AddNewAdmin),
    fork(switchAdminStatus),
    fork(EditAdmin),
    fork(deleteAdmin),
  ]);
}

export default AdminSaga;
