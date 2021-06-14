import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  GET_GATEGORIES,
  GET_GATEGORIES_SUCCESS,
  TOGGLE_STATUS,
  EDIT_TYPE,
  EDIT_TYPE_SUCCESS,
  DELETE_TYPE,
  DELETE_TYPE_SUCCESS
} from "./actionTypes";

export const addNewCategory = (payload) => {
  return {
    type: ADD_CATEGORY,
    payload: payload,
  };
};

export const addNewCategorySuccess = (payload) => {
  return {
    type: ADD_CATEGORY_SUCCESS,
    payload: payload,
  };
};

export const getCategories = () => {
  return {
    type: GET_GATEGORIES,
  };
};

export const getCategoriesSuccess = (payload) => {
  return {
    type: GET_GATEGORIES_SUCCESS,
    payload: payload,
  };
};

export const toggleStatus = (payload) => {
  return {
    type: TOGGLE_STATUS,
    payload: payload,
  };
};

export const EditType = (data) => {
  return {
    type: EDIT_TYPE,
    payload: data,
  };
};

export const EditTypeSuccess = (data) => {
  return {
    type: EDIT_TYPE_SUCCESS,
  };
};

export const deleteType = (payload) => {
  return {
    type: DELETE_TYPE,
    payload: payload,
  };
};
export const deleteTypeSucess = () => {
  return {
    type: DELETE_TYPE_SUCCESS,
  };
};
