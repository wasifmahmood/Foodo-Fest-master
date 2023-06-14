import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { LoginOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function MainListItems() {
    const navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={() => {
          //localStorage.removeItem("user");
          // let history = useHistory();
          // history.goBack();
         
          navigate('/dashboard');
        }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => {
          //localStorage.removeItem("user");
          // let history = useHistory();
          // history.goBack();
         
          navigate('/orders');
        }}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton onClick={() => {
          //localStorage.removeItem("user");
          // let history = useHistory();
          // history.goBack();
         
          navigate('/menuList');
        }}>
        <ListItemIcon>
          <MenuOpenOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="MenuList" />
      </ListItemButton>
      <ListItemButton onClick={() => {
          //localStorage.removeItem("user");
          // let history = useHistory();
          // history.goBack();
         
          navigate('/customers')
        }}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>

      <ListItemButton  onClick={() => {
          //localStorage.removeItem("user");
          // let history = useHistory();
          // history.goBack();
         
          navigate('/categories')
        }}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItemButton>
      {/* <Link to="login"> */}
      <ListItemButton >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      
      {/* <Link to="login"> */}
      <ListItemButton
        onClick={() => {
          localStorage.removeItem("user");
          // let history = useHistory();
          // history.goBack();
         
          navigate('/login')
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
      {/* </Link> */}
    </>
  );
}
