import {
  BANKS_LIST_LOADING,
  BANKS_LIST_SUCCESS,
  BANKS_API_ERROR,
  RETRIEVE_BANK,
  RETRIEVE_BANK_SUCCESS,
  BANKS_RESET,
  ADD_NEW_CORPORATE_ADMIN,
  ADD_BANK_INFORMATION,
  ADD_BANK_INFORMATION_SUCCESS,
  ADD_BANK_GEOGRAPHY,
  ADD_BANK_GEOGRAPHY_SUCCESS,
  SFTP_CONNECTION,
  SFTP_CONNECTION_SUCCESS,
  ADD_NEW_CORPORATE_ADMIN_SUCCESS,
  ENABLE_EDIT_MODE,
  DISABLE_EDIT_MODE,
  NEXT_STEP,
  EDIT_BANK_INFORMATION_SUCCESS,
  EDIT_BANK_INFORMATION,
  EDIT_BANK_GEOGRAPHY,
  EDIT_BANK_GEOGRAPHY_SUCCESS,
  TOGGLE_BANK,
  TOGGLE_BANK_SUCCESS,
  DELETE_CORPORATE,
  DELETE_CORPORATE_SUCCESS,

} from "./types";

export const getList = () => {
  return {
    type: BANKS_LIST_LOADING,
  };
};

export const listSuccess = (data) => {
  return {
    type: BANKS_LIST_SUCCESS,
    payload: data,
  };
};

export const retrieveSuccess = (data) => {
  return {
    type: RETRIEVE_BANK_SUCCESS,
    payload: data,
  };
};

export const apiError = (error) => {
  return {
    type: BANKS_API_ERROR,
    payload: error,
  };
};

export const retrieve = (id) => {
  return {
    type: RETRIEVE_BANK,
    payload: id,
  };
};
export const enableEdit = (id) => {

  return {
    type: ENABLE_EDIT_MODE,
    payload: id,
  };
};
export const disableEdit = () => {
  return {
    type: DISABLE_EDIT_MODE,
  };
};
export const resetCorporates = () => {
  return {
    type: BANKS_RESET,
  };
};
export const addCorporateInformation = (info) => {
  return {
    type: ADD_BANK_INFORMATION,
    payload: info,
    
  };
};
export const addCorporateAdmin = (adminInfo) => {
  return {
    type: ADD_NEW_CORPORATE_ADMIN,
    payload: adminInfo,
  };
};
export const addCorporateAdminSuccess = (adminInfo) => {
  return {
    type: ADD_NEW_CORPORATE_ADMIN_SUCCESS,
    payload: adminInfo,
  };
};
export const addCorporateInformationSuccess = (info) => {
  return {
    type: ADD_BANK_INFORMATION_SUCCESS,
    payload: info,
  };
};
export const addCorporateGeography = (geography) => {
  return {
    type: ADD_BANK_GEOGRAPHY,
    payload: geography,
  };
};
export const addCorporateGeographySuccess = (geography) => {
  return {
    type: ADD_BANK_GEOGRAPHY_SUCCESS,
    payload: geography,
  };
};
export const editCorporateGeography = (geography) => {
  return {
    type: EDIT_BANK_GEOGRAPHY,
    payload: geography,
  };
};
export const editCorporateGeographySuccess = (geography) => {
  return {
    type: EDIT_BANK_GEOGRAPHY_SUCCESS,
    payload: geography,
  };
};
export const toggleCorporate = (payload) => {
  return {
    type: TOGGLE_BANK,
    payload: payload,
  };
};
export const toggleCorporateSuccess = (payload) => {
  return {
    type: TOGGLE_BANK_SUCCESS,
    payload: payload,
  };
};
export const EditCorporateInformation = (information, id) => {
  return {
    type: EDIT_BANK_INFORMATION,
    payload: {
      id: id,
      submitData: information,
    },
  };
};
export const EditCorporateInformationSuccess = (payload) => {
  return {
    type: EDIT_BANK_INFORMATION_SUCCESS,
    payload: payload,
  };
};

export const addSFTPConnection = (connection) => {
  return {
    type: SFTP_CONNECTION,
    payload: connection,
  };
};
export const addSFTPConnectionSuccess = (connection) => {
  return {
    type: SFTP_CONNECTION_SUCCESS,
    payload: connection,
  };
};



export const deleteCorporate = (payload) => { 
  return { 
    type : DELETE_CORPORATE,
    payload: payload,

  }
};

  export const deleteCorporateSuccess = (payload) => { 
    return { 
      type : DELETE_CORPORATE_SUCCESS,
    
    }

};



export const goToNextStep = () => {
  return {
    type: NEXT_STEP,
  };
};



  









