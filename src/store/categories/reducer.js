import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  GET_GATEGORIES,
  GET_GATEGORIES_SUCCESS,
  TOGGLE_STATUS,
  TOGGLE_STATUS_SUCCESS,
  EDIT_TYPE,
  EDIT_TYPE_SUCCESS,
  DELETE_TYPE,
  DELETE_TYPE_SUCCESS
} from "./actionTypes";
const initCategoriesState = {
  loading: false,
  categoriesList: [],
};

const CategoriesReducer = (state = initCategoriesState, action) => {
  let { payload, type } = action;
  switch (type) {
    case ADD_CATEGORY:
      return { ...state, loading: true };
    case ADD_CATEGORY_SUCCESS:
      return { ...state, loading: false , categoriesList:[...state.categoriesList,payload]};
    case GET_GATEGORIES:
      return { ...state, loading: true };
    case GET_GATEGORIES_SUCCESS:
      return { ...state, loading: false, categoriesList:payload};
    case TOGGLE_STATUS:
      return { ...state, loading: true };
      case EDIT_TYPE:
      return { ...state, loading: true };
      case EDIT_TYPE_SUCCESS:
      return { ...state, loading: false };
      case DELETE_TYPE:
        return { ...state, loading: true };
        case DELETE_TYPE_SUCCESS:
        return { ...state, loading: false };
    default:
      return state;
  }
};

export default CategoriesReducer;
