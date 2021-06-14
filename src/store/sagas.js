import { all } from "redux-saga/effects";

//public
import LayoutSaga from "./layout/saga";
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import CorporatesSaga from "./corporates/saga";
import AdminSaga from "./admins/sagas";
import categorySaga from "./categories/sagas";

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    AuthSaga(),
    ForgetSaga(),
    LayoutSaga(),
    CorporatesSaga(),
    AdminSaga(),
    categorySaga()
  ]);
}
