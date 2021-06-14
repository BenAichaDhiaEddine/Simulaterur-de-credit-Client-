import {
  GET_FUNCTIONAL_ADMIN_LIST,
  GET_FUNCTIONAL_ADMIN_LIST_SUCCESS,
  ADD_FUNCTIONAL_ADMIN,
  ADD_FUNCTIONAL_ADMIN_SUCCESS,
  EDIT_FUNCTIONAL_ADMIN_SUCCESS,
  EDIT_FUNCTIONAL_AMDIN,
  TOGGLE_ADMIN,
  CHANGE_LOADING_STATE,
  ADD_ADMIN_STATUS,
  DELETE_ADMIN,
  GET_FUNCTIONAL_FULL_ADMIN_LIST,
  GET_FUNCTIONAL_FULL_ADMIN_LIST_SUCCESS,
  DELETE_ADMIN_SUCCESS,
} from "./types";

export const getAdmins = () => {
  return {
    type: GET_FUNCTIONAL_ADMIN_LIST,
  };
};
export const getFullAdmins = () => {
  return {
    type: GET_FUNCTIONAL_FULL_ADMIN_LIST,
  };
};
export const toggleAdmin = (data) => {
  return {
    type: TOGGLE_ADMIN,
    payload: data,
  };
};
export const getAdminsSuccess = (data) => {
  return {
    type: GET_FUNCTIONAL_ADMIN_LIST_SUCCESS,
    payload: data,
  };
};
export const getFullAdminsSuccess = (data) => {
  return {
    type: GET_FUNCTIONAL_FULL_ADMIN_LIST_SUCCESS,
    payload: data,
  };
};

export const addAdmin = (adminData) => {
  return {
    type: ADD_FUNCTIONAL_ADMIN,
    payload: adminData,
  };
};

export const addAdminSuccess = (data) => {
  return {
    type: ADD_FUNCTIONAL_ADMIN_SUCCESS,
    payload: data,
  };
};

export const EditAdmin = (adminData) => {
  return {
    type: EDIT_FUNCTIONAL_AMDIN,
    payload: adminData,
  };
};

export const EditAdminSuccess = (data) => {
  return {
    type: EDIT_FUNCTIONAL_ADMIN_SUCCESS,
    payload: data,
  };
};

export const addAdminStatus = (payload) => { 
  return { 
    type : ADD_ADMIN_STATUS ,
    payload : payload
  }
};


export const loading = (payload) => { 
  return { 
    type : CHANGE_LOADING_STATE,
    payload : payload
  }
};

  export const deleteAdmin = (payload) => { 
    return { 
      type : DELETE_ADMIN,
      payload : payload

    }
  }

    export const deleteAdminSuccess = (payload) => { 
      return { 
        type : DELETE_ADMIN_SUCCESS,
        payload : payload
      }

};
