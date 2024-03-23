
const accessToken = localStorage.getItem("accessToken");

let token = null;
if (accessToken !== "undefined" && accessToken !== null) {
  token = accessToken;
}



const initialData={
    managementreducer:{
        loading: false,
    error_msg: null,
    success_msg: null,
    userDetail: [],
    
    token: token,
    }
}

export default initialData;