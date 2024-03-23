import React, { useState,useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector,connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as UserAction from "../action/index";
import { Box } from '@mui/material';




const Dropdown=(props)=>{
const [userDetail, setuserDetail] = useState('');
const managementreducer = useSelector((state)=>({
      token:state.managementreducer.token,
      loading: state.managementreducer.loading,
      userDetail: state.managementreducer.userDetail,
    }))

useEffect(() => {
if(managementreducer.token) {
props.actions.userAction.getUserDetails(); 
 }
}, [managementreducer.token]);



    const handleChange = (event) => {
      setuserDetail(event.userDetail);
    };
    return(
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel ></InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          value={userDetail}
          onChange={handleChange}
        >{managementreducer.userDetail .map((user,id)=>{
         return <MenuItem key={id}  >{user.name}</MenuItem>
        

        })
          }
          
        </Select>
      </FormControl>
      {managementreducer.isFetching}
    </Box>
    
    )
}
const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(Dropdown);