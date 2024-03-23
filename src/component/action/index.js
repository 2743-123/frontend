import axios from "axios";

import { INPROGRESS,IS_AUTHENTICATED,ERROR,GET_USER,LOGOUT } from "../constant"
import ENVIRONMENT_VARIABLES from "../../environment.config"
import { setAccessToken, clearAccessToken } from "../Utils/index";




export const login = (loginDetails) => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      axios
        .post(ENVIRONMENT_VARIABLES.Base_API_URL + "/users/login", loginDetails)
        .then((response) => {
          if (response.status === 200) {
            setAccessToken(response.data.accessToken);
            dispatch({
              type: IS_AUTHENTICATED,
              data: { accessToken: response.data.accessToken },
              // data:{success_msg:esponse.data.message.toString()}
            });
          }
        })
        .catch((error) => {
          if (error && error.response) {
            dispatch({
              type: ERROR,
              data: { error_msg: error.response.data.message },
            });
          } else {
            dispatch({
              type: ERROR,
              data: { error_msg: error.message.toString() },
            });
          }
        });
    };
  } catch (error) {
    alert(error.message.toString());
  }
};



export const logout = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      const token = localStorage.getItem('accessToken');
      const api = {
        method: 'POST',
        headers: { 'Authorization': token },
        url: ENVIRONMENT_VARIABLES.Base_API_URL + "/users/logout"
      };
      axios(api)
        .then((response) => {
          if (response.status === 200) {
            clearAccessToken();
            dispatch({
              type: LOGOUT,
            });
          }
        })
        .catch((error) => {
          clearAccessToken();
          dispatch({
            type: LOGOUT,
          });
        });
    };
  }catch (error) {
    alert(error.message.toString());
  }
};


  export const getUserDetails = () => {
    try {
      return (dispatch) => {
        dispatch({ type: INPROGRESS });
        const token = localStorage.getItem('accessToken');
        const api = {
          method: 'GET',
          headers: { 'Authorization': token },
          url: ENVIRONMENT_VARIABLES.Base_API_URL + "/users"
        };
        axios(api)
          .then((response) => {
            if (response.status === 200) {
              dispatch({
                type: GET_USER,
                data: { userDetail: response.data.users },
              });
            }
          })
          .catch((error) => {
            if (error && error.response) {
              if (error.response.status === 403) {
              
                dispatch({
                
                });
              } else
                dispatch({
                  type: ERROR,
                  data: { error_msg: error.response.data.message },
                });
            } else {
              dispatch({
                type: ERROR,
                data: { error_msg: error.message.toString() },
              });
            }
          });
      };
    } catch (error) {
      alert(error.message.toString());
    }
  };
  
// export const login = (loginDetails) => {
//     try {
//       return (dispatch) => {
//         dispatch({ type: INPROGRESS })
//         const api = {
//           method: 'POST',
//           headers: { "Authorization":"application/json"},
          
//           url: ENVIRONMENT_VARIABLES.Base_API_URL + "users/login",loginDetails
//         };
//         axios(api)
//         .then((response) => response.json())
//         .then((data) => {
//            console.log(data);
//            // Handle data
//         })
//           .then((response) => {
//             if (response.status === 200) {
              
//               dispatch({
//                 type: IS_AUTHENTICATED,
//               });
//             }
//           })
//           .catch((error) => {
            
//             dispatch({
//               type: ERROR,
//             });
//           });
//       };
//     } catch (error) {
//       alert(error.message.toString());
//     }
//   };

// export const login = data => dispatch => {
//   dispatch({ 
//     type: INPROGRESS
//     }) 
//   fetch(ENVIRONMENT_VARIABLES.Base_API_URL+'users/login', { 
//    method: 'POST',
//    headers: {
//       'content-type': 'application/json'
//       },
//    body: JSON.stringify(data),
//     })
//     .then( (response )=> {
      
//     if (!response.ok) { throw response }
//     return response.json()  //we only get here if there is no error
//   }) 
  
//   .then( (json) => {
//     dispatch({
//       type: IS_AUTHENTICATED, payload: json
//     });
//     // localStorage.setItem("token", 'Bearer '+json.token)
//     localStorage.setItem("user", JSON.stringify(json.user))
//   })
//   .catch( err => {
//     dispatch({
//       type: ERROR, payload: err
//     })
//   })

// }

// export const login = (loginDetails) => dispatch => {
//   dispatch({ 
//     type: INPROGRESS
//     }) 
//   fetch(ENVIRONMENT_VARIABLES.Base_API_URL+'users/login' , { 
//    method: 'POST',
//    headers: {
//       'Content-Type': 'application/json' ,
    
//       },
//    body: JSON.stringify(loginDetails
    
  
//    ),
//     })
//     .then( response => response.json())
//   .then( json => {
//     dispatch({
//       type: IS_AUTHENTICATED, payload: json
//     });
//     // localStorage.setItem("token", 'Bearer '+json.token)
//     localStorage.setItem("user", JSON.stringify(json.user))
//   })
//   .catch( err => {
//     dispatch({
//       type: ERROR, payload: err
//     })
//   })
    
// }