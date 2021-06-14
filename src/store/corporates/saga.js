import { takeEvery, fork, put, all, call, take } from "redux-saga/effects";
import {setLocalStorageRegistration} from "./util"

// Helpers
import { get, post, update, remove } from "../../helpers/apiMethods";

// Types
import {
  ADD_BANK_GEOGRAPHY,
  ADD_BANK_INFORMATION,
  ADD_NEW_CORPORATE_ADMIN,
  EDIT_BANK_GEOGRAPHY,
  EDIT_BANK_INFORMATION,
  BANKS_LIST_LOADING,
  RETRIEVE_BANK,
  SFTP_CONNECTION,
  TOGGLE_BANK,
  DELETE_CORPORATE
} from "./types";

// Action
import {
  listSuccess,
  retrieveSuccess,
  apiError,
  addCorporateInformationSuccess,
  goToNextStep,
  addCorporateAdminSuccess,
  EditCorporateInformationSuccess,
  editCorporateGeographySuccess,
  addSFTPConnectionSuccess,
  toggleCorporateSuccess,
  deleteCorporateSuccess,
  deleteCorporate,
  getList
} from "./actions";


const baseUrl = "superAdmin/corporate/config";

// Swagger
const corporate_config = "superAdmin/corporate/config";
const corporate = "superAdmin/corporate/createCorporate"; 
const add_corporate = "superAdmin/corporate/config/addCorporateConfig/";

function* deleteCorporateApi(payload ) {
  let  {id} = payload.payload;
  try {
    console.log("id in the saga : " , id);
    yield call(remove, `${baseUrl}/${id}`);
    yield put(deleteCorporateSuccess());
    yield put(getList());

   
  } catch (error) {
    console.error(error);
  }
}

function* corporatesList() {
  try {
    const response = yield call(get, corporate_config);
    yield put(listSuccess(response.data));
    
  } catch (error) {
    yield put(apiError(error));
  }
}
function* corporatesRetrieve({ payload }) {
  try {
    const response = yield call(get, `${corporate_config}/${payload}`);
    yield put(retrieveSuccess(response));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* addCorporateInformationApi({ payload }) {
  try {
    const response = yield call(post, add_corporate, payload);

    yield put(addCorporateInformationSuccess(response));
   setLocalStorageRegistration(response);
    yield put(goToNextStep());
  } catch (error) {
    console.error(error);
  }
}

function* addCorporateGeographyApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(update, `${corporate_config}/${id}`, {
      geography: submitData,
    });
    yield put(addCorporateInformationSuccess(response));
    setLocalStorageRegistration(response);
    yield put(goToNextStep());
  } catch (error) {
    console.error(error);
  }
}
function* editCorporateGeographyApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(update, `${corporate_config}/${id}`, {
      geography: submitData,
    });
    yield put(editCorporateGeographySuccess(response));
    yield put(goToNextStep());
  } catch (error) {
    console.error(error);
  }
}
function* addCorporateSftpApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(update, `${corporate_config}/${id}`, {
      sftpServerConfig: submitData,
    });
    yield put(addSFTPConnectionSuccess(response));
    yield put(goToNextStep());
  } catch (error) {
    console.error(error);
  }
}
function* editCorporateInformationApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(
      update,
      `${corporate_config}/${id}`,
      submitData
    );
    yield put(EditCorporateInformationSuccess(response));
    yield put(goToNextStep());
  } catch (error) {
    console.error(error);
  }
}
function* addCorporateAdminApi({ payload }) {

  try {
    const response = yield call(post, `${corporate}`, payload);
    yield put(addCorporateAdminSuccess(response));
    setLocalStorageRegistration(response,payload);
    yield put(goToNextStep());
  } catch (error) {
    console.error(error);
  }
}
function* toggleCorporateStatus({ payload }) {
  try {
    const response = yield call(update, `${corporate_config}/${payload.id}`, {
      activated: payload.activated,
    });
    yield put(toggleCorporateSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

export function* addNewCorporateAdmin() {
  yield takeEvery(ADD_NEW_CORPORATE_ADMIN, addCorporateAdminApi);
}
export function* addGeography() {
  yield takeEvery(ADD_BANK_GEOGRAPHY, addCorporateGeographyApi);
}

export function* addCorporateinfo() {
  yield takeEvery(ADD_BANK_INFORMATION, addCorporateInformationApi);
}

export function* watchCorporatesListLoading() {
  yield takeEvery(BANKS_LIST_LOADING, corporatesList);
}

export function* watchRetrieveCorporate() {
  yield takeEvery(RETRIEVE_BANK, corporatesRetrieve);
}

export function* toggleCorporate() {

  yield takeEvery(TOGGLE_BANK, toggleCorporateStatus);
}
export function* editCorporateInfo() {
  yield takeEvery(
    EDIT_BANK_INFORMATION,
    editCorporateInformationApi
  );
}
export function* editCorporateGeography() {
  yield takeEvery(EDIT_BANK_GEOGRAPHY, editCorporateGeographyApi);
}

export function* connectToSftp() {
  yield takeEvery(SFTP_CONNECTION, addCorporateSftpApi);
}

export function* deleteCorporateSaga() {
  yield takeEvery(DELETE_CORPORATE, deleteCorporateApi);
}
function* corporatesSaga() {
  yield all([
    fork(watchCorporatesListLoading),
    fork(watchRetrieveCorporate),
    fork(addCorporateinfo),
    fork(addGeography),
    fork(editCorporateGeography),
    fork(addNewCorporateAdmin),
    fork(editCorporateInfo),
    fork(connectToSftp),
    fork(toggleCorporate),
    fork(deleteCorporateSaga)
  ]);
}

export default corporatesSaga;
