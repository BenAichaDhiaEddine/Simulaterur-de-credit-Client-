import { ADD_FUNCTIONAL_ADMIN_SUCCESS } from "../admins/types";
import {
  BANKS_LIST_LOADING,
  BANKS_LIST_SUCCESS,
  BANKS_API_ERROR,
  RETRIEVE_BANK,
  RETRIEVE_BANK_SUCCESS,
  BANKS_RESET,
  ADD_NEW_CORPORATE_ADMIN,
  ADD_BANK_INFORMATION,
  ADD_NEW_CORPORATE_ADMIN_SUCCESS,
  ADD_BANK_INFORMATION_SUCCESS,
  ADD_BANK_GEOGRAPHY,
  ADD_BANK_GEOGRAPHY_SUCCESS,
  EDIT_BANK_GEOGRAPHY,
  EDIT_BANK_GEOGRAPHY_SUCCESS,
  SFTP_CONNECTION,
  SFTP_CONNECTION_SUCCESS,
  ENABLE_EDIT_MODE,
  DISABLE_EDIT_MODE,
  NEXT_STEP,
  TOGGLE_BANK,
  TOGGLE_BANK_SUCCESS,
  DELETE_CORPORATE,
  DELETE_CORPORATE_SUCCESS

} from "./types";
const initialState = {
  stepNumber: 0,
  error: {},
  list: [],
  retrieve: null,
  loading: false,
  editMode: false,
  editId: null,
  
  corporate: {
    information: null,
    geography: null,
    admin: null,
    sftpConnection: false,
  },
};
const corporates = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case BANKS_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case BANKS_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      };

    case BANKS_API_ERROR:
      return { ...state, error: payload, loading: false };

    case RETRIEVE_BANK:
      return {
        ...state,
        loading: true,
      };
    case NEXT_STEP:
      return { ...state, stepNumber: state.stepNumber + 1 };

    case RETRIEVE_BANK_SUCCESS:
      return {
        ...state,
        corporate: payload,
        loading: false,
      };

    case BANKS_RESET:
      return {
        ...initialState,
      };

    case ADD_NEW_CORPORATE_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_CORPORATE_ADMIN_SUCCESS:
      return {
        ...state,
        corporate: payload,
        loading: false,
      };
    case ADD_BANK_INFORMATION:
      return {
        ...state,
        loading: true,
         
      };
    case ADD_BANK_INFORMATION_SUCCESS:

      return {
        ...state,
        loading: false,
        corporate: payload,
       
      };
    case ADD_BANK_GEOGRAPHY:
      return {
        ...state,
        loading: true,
      };
    case ADD_BANK_GEOGRAPHY_SUCCESS:
      return {
        ...state,
        corporate: payload,
        loading: false,
      };
    case EDIT_BANK_GEOGRAPHY:
      return {
        ...state,
        loading: true,
      };

    case EDIT_BANK_GEOGRAPHY_SUCCESS:
      return {
        ...state,
        corporate: payload,
        loading: false,
      };
    case SFTP_CONNECTION:
      return {
        ...state,
        loading: true,
        corporate: payload,
      };
    case SFTP_CONNECTION_SUCCESS:
      return {
        ...state,
        corporate: payload,
      };
    case ENABLE_EDIT_MODE:
      return {
        ...state,
        editMode: true,
        editId: payload,
        stepNumber: 0,
      };
    case DISABLE_EDIT_MODE:
      return {
        ...state,
        editMode: false,
        editId: null,
        stepNumber: 0,
      };
    case TOGGLE_BANK:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_BANK_SUCCESS:
      let { list } = state;

      let newList = list.map((elm) => {
        if (elm.id === payload.id) {
          elm.activated = payload.activated;
        }
        return elm;
      });
      return {
        ...state,
        loading: false,
        editList: newList,
        baseList: newList,
      };
      case DELETE_CORPORATE:
        return{
          ...state,
          loading:true,
        };
        case DELETE_CORPORATE_SUCCESS:
          return{
            ...state,
            loading:false,
          };
      

    default:
      return state;
  }
};
//changes
export default corporates;
