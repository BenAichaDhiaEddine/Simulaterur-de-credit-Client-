const LOCAL_STORAGE_REGISTRATION = "localStorageBasket";
const MANAGER = "manager"
export  const setLocalStorageRegistration = (data,manager) => {
    
    try {
      
        localStorage.setItem(
        LOCAL_STORAGE_REGISTRATION,
        JSON.stringify(data)
      );
      if(manager)
    {  localStorage.setItem(
       MANAGER,
        JSON.stringify(manager)
      );}
    } catch (error) {
      console.log("setLocalStorageRegistration", Error(error));
    }
  };
  