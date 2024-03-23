import React,{ useEffect, useState }  from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserAction from "../action/index";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import Notification from "../../common component/Notification";
import Loader from "../../common component/Loader/index"


const Login = (props) => {
  const navigate = useNavigate();
  const [internalMsg, setInternalMsg] = useState(null);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const managementreducer = useSelector((state) => ({
    token: state.managementreducer.token,
    loading: state.managementreducer.loading,
  }));

  useEffect(() => {
    if (managementreducer.token && managementreducer.token != null) {
     return navigate("/")
  }
    
  }, [managementreducer.token]);


  const handleChange = (event) => {
    const field = event.target.name;
    let commonData = { ...loginDetails };
    commonData[field] = event.target.value;
    return setLoginDetails(commonData);
  };

  const login = () => {
    setInternalMsg(null);
    if (loginDetails.email && loginDetails.password) {
      props.actions.userAction.login(loginDetails);
    } else {
      setInternalMsg({
        message: "Invalid UserName and Password",
      });
    }
  };

  return (
    <div>
      <Notification internalMsg={internalMsg} />
      <div className="login">
        <div className="luckyminute">
          <span className="dashboard">DASHBOARD</span>
          <span className="hotelmanagement">HOTEL MANAGEMENT</span>
        </div>
        <i className="fa-solid fa-circle-user user_icon"></i>
        <div className="login_div">
          <input
            id="email"
            type="text"
            name="email"
            className="input_box"
            placeholder="User ID"
            value={loginDetails.email}
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            className="input_box"
            placeholder="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
          <button className="login_btn" onClick={login}>
            Login
          </button>
        </div>
        {managementreducer.loading && <Loader />}
      </div>
      {/* <PageNotSpotted /> */}

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(Login);
