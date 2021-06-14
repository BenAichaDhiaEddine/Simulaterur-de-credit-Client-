import { takeEvery, fork, put, all, call, take } from "redux-saga/effects";
import { get, post, patch, update , remove  } from "../../helpers/apiMethods";
import { addNewCategorySuccess, getCategoriesSuccess, getCategories,EditType,EditTypeSuccess, deleteType , deleteTypeSucess } from "./actions";
import { ADD_CATEGORY, GET_GATEGORIES, TOGGLE_STATUS ,EDIT_TYPE,DELETE_TYPE} from "./actionTypes";

const baseUrl = "superAdmin/credittypes";

function* deleteTypeApi({ payload }) {
  let { id } = payload;
  try {
    console.log("id in the saga : " , id);
    yield call(remove, `${baseUrl}/${id}`);
    yield put(deleteTypeSucess());
    yield put(getCategories());
  } catch (error) {
    console.error(error);
  }
}

function* editTypeApi({ payload }) {

  let body = { "name": payload.dataToSubmit.name, 
  "description": payload.dataToSubmit.description, 
  "enabled": payload.dataToSubmit.enabled }
  console.log(body)
  try {
    const response = yield call(
      patch,
      `${baseUrl}/${payload.id}`,
      body
    );
    yield put(EditTypeSuccess());
    yield put(getCategories());
  } catch (error) {
    console.error(error);
  }
}

function* addNewCategoryApi({ payload }) {
  try {
    let result = yield call(post, baseUrl, payload);
    yield put(addNewCategorySuccess(result));
  } catch (error) {
    console.error(error);
  }
}

function* getAllCategoriesApi() {
  try {
    let result = yield call(get, baseUrl);
    yield put(getCategoriesSuccess(result.data));
  } catch (error) {
  }
}

//SAGA Apis for Status
function* toggleStatusApi({ payload }) {
  let { id } = payload;
  let body = { "name": payload.name, "description": payload.description, "enabled": !payload.enabled }
  try {
    yield call(patch, `${baseUrl}/${id}`, body);
    yield put(getCategories());
  } catch (error) {
    console.error(error);
  }
}

export function* deleteTypeSaga() {
  yield takeEvery(DELETE_TYPE, deleteTypeApi);
}
export function* editType() {
  yield takeEvery(EDIT_TYPE, editTypeApi);
}
// Saga Watcher For Status
export function* watchToggleStatus() {
  yield takeEvery(TOGGLE_STATUS, toggleStatusApi);
}
export function* watchAddNewCategory() {
  yield takeEvery(ADD_CATEGORY, addNewCategoryApi);
}
export function* watchGetCategories() {
  yield takeEvery(GET_GATEGORIES, getAllCategoriesApi);
}

function* categorySaga() {
  yield all([
    fork(watchAddNewCategory), 
    fork(watchGetCategories),
     fork(watchToggleStatus),
     fork(editType),
     fork(deleteTypeSaga)
  ]);
}

export default categorySaga;
