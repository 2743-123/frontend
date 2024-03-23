import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserAction from "../../component/action/index";
import Loader from "../Loader";



const Logout = (props) =>{
    const navigate = useNavigate();
    const managementreducer = useSelector((state) => ({
        token: state.managementreducer.token,
        loading: state.managementreducer.loading,
        // userDetail: state.gameReducer.userDetail,
        // balance: state.gameReducer.balance,
        // messages: state.gameReducer.messages
      }));
    
      useEffect(() => {
        if (managementreducer.token === null) {
          navigate("/Login");
        };
      }, [managementreducer.token]);
      
    
     
     
    
      
    
      const logout = () => {
        props.actions.userAction.logout();
      };
    

    return(
    <div><i onClick={()=>logout("/")}>Logout</i>
    </div>)


}

const mapDispatchToProps = (dispatch) => ({
    actions: {
      userAction: bindActionCreators(UserAction, dispatch),
    },
  });
  
  export default connect(null, mapDispatchToProps)(Logout);