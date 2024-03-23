import { ERROR, INPROGRESS, IS_AUTHENTICATED,GET_USER, LOGOUT } from "../constant";
import initialData from "./initialState"



export default function managementreducer(state=initialData.managementreducer,action){
    switch(action.type){
        case INPROGRESS:
            return{
                ...state,
                error_msg:null,
                success_msg:null,
                loading:true,
            };
            case ERROR:
                return {
                  ...state,
                  error_msg: action.data.error_msg,
                  success_msg: null,
                  loading: false,
                };
          
              case IS_AUTHENTICATED:
                return {
                  ...state,
                  error_msg: null,
                  success_msg: null,
                  loading: false,
                  token: action.data.accessToken,
                 
                };
                case GET_USER:
                  return {
                    ...state,
                    error_msg: null,
                    success_msg: null,
                    loading: false,
                    userDetail: action.data.userDetail,
                  };
                  case LOGOUT:
                    return {
                      ...state,
                      loading: false,
                      error_msg: null,
                      success_msg: null,
                      token: null,
                      userDetail: [],
                      messages: null
                    };

                default:
                  return state;
          
    }
}