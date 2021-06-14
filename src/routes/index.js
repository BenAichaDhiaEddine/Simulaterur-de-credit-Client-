import React from "react";
import { Redirect } from "react-router-dom";
// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Corporates from "../pages/Corporates/index";
import EditCorporate from "../pages/Corporates/edit";
import PermitSystem from "../pages/Permit";
import Status from "../pages/Permit/status";
import Features from "../pages/Permit/features";
import Process from "../pages/Permit/process";
import BasicTable from "../pages/Tables/BasicTables";
import adminlist from "../pages/Admins/adminlist";
import Profile from "../pages/User/Profile";
import catgories from "../pages/catgories";
const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/corporates/:id", component: EditCorporate },
  { path: "/corporates", component: Corporates },
  { path: "/permit", component: PermitSystem },
  { path: "/status", component: Status },
  { path: "/features", component: Features },
  { path: "/process", component: Process },
  { path: "/admins", component: adminlist },
  { path: "/profile", component: Profile },
  { path: "/categories", component: catgories },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];
const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
];
export { authProtectedRoutes, publicRoutes };
