import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import {  useNavigate } from "react-router-dom";



const Listbar =()=>{
    const [open, setOpen] = React.useState(false);
    // const location = useLocation();
    const navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }

  const handleClick = () => {
    setOpen(!open);
  };


    return (
    <div>
        
        <ListItemButton onClick={() => redirect("/")}>
        <ListItemIcon>
          <DashboardSharpIcon />
        </ListItemIcon>
        <ListItemText primary="DASHBOARD" />
      </ListItemButton>
      <ListItemButton onClick={()=>redirect("AdminUser")}>
        <ListItemIcon>
          <AdminPanelSettingsSharpIcon />
        </ListItemIcon>
        <ListItemText primary="ADMIN USER" />
      </ListItemButton>
      <ListItemButton onClick={()=>redirect("Users")}>
        <ListItemIcon>
          <SupervisorAccountSharpIcon />
        </ListItemIcon>
        <ListItemText primary="USERS" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      </div>)

          

}
export default Listbar;