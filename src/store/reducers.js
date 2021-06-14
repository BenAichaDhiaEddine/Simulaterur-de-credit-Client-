import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Corporates from "./corporates/reducer";
import Admins from "./admins/reducer";
import CategoriesReducer from "./categories/reducer";
const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Corporates,
  Admins, 
  Categories:CategoriesReducer
});

export default rootReducer;
