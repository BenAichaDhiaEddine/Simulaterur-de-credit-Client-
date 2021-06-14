import {
  GET_FUNCTIONAL_ADMIN_LIST,
  GET_FUNCTIONAL_ADMIN_LIST_SUCCESS,
  GET_FUNCTIONAL_FULL_ADMIN_LIST,
  GET_FUNCTIONAL_FULL_ADMIN_LIST_SUCCESS,
  ADD_FUNCTIONAL_ADMIN,
  ADD_FUNCTIONAL_ADMIN_SUCCESS,
  TOGGLE_ADMIN,
  EDIT_FUNCTIONAL_AMDIN,
  EDIT_FUNCTIONAL_ADMIN_SUCCESS,
  ADD_ADMIN_STATUS,
  CHANGE_LOADING_STATE,
  DELETE_ADMIN,
  DELETE_ADMIN_SUCCESS
} from "./types";

const initAdminState = {
  loading: false,
  baseList: [],
  editList: [],
  addAdminStatusState : false,
};

const Admins = (state = initAdminState, action) => {
  let { payload, type } = action;

  switch (type) {
    case GET_FUNCTIONAL_FULL_ADMIN_LIST:
      return {
        ...state,
        loading: true,
      };

    case GET_FUNCTIONAL_FULL_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        baseList: payload,
        editList: payload,
      };
      case GET_FUNCTIONAL_ADMIN_LIST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_FUNCTIONAL_ADMIN_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          baseList: payload,
          editList: payload,
        };
    case ADD_FUNCTIONAL_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case ADD_FUNCTIONAL_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        baseList: [...state.baseList, payload],
        editList: [...state.baseList, payload],
        addAdminStatusState:true,
      };
    case TOGGLE_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case EDIT_FUNCTIONAL_AMDIN:
      return { ...state, loading: true };

    case EDIT_FUNCTIONAL_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        baseList: [...state.baseList, payload],
        editList: [...state.baseList, payload],
        addAdminStatusState:true,
      };
    case ADD_ADMIN_STATUS:
      return {
        ...state,
        addAdminStatusState: payload,
      };
      case CHANGE_LOADING_STATE:
        return {
          ...state,
          loading: payload,
        };
        case DELETE_ADMIN:
          return{
            ...state,
            loading:true,
          };
          case DELETE_ADMIN_SUCCESS:
            return{
              ...state,
              loading:false,
            };
        


    default:
      return state;
  }
};

export default Admins;
