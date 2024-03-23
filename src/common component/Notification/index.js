


import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (props) => {
  const managementreducer = useSelector((state) => ({
    success_msg: state.managementreducer.success_msg,
    error_msg: state.managementreducer.error_msg,
  }));

  const notificationSetting = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  React.useEffect(() => {
    if (managementreducer.error_msg) {
      toast.error(managementreducer.error_msg, notificationSetting);
    }
  }, [managementreducer.error_msg]);

  React.useEffect(() => {
    if (managementreducer.success_msg) {
      toast.error(managementreducer.success_msg, notificationSetting);
    }
  }, [managementreducer.success_msg]);

  React.useEffect(() => {
    if (props.internalMsg && props.internalMsg.message) {
      toast.error(props.internalMsg.message, notificationSetting);
    }
  }, [props.internalMsg]);

  return <ToastContainer />;
};

export default Notification;
