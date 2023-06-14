// import * as React from 'react';
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
//import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../components/Title";
import { Button } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Link from '@mui/material/Link';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems from "./listItems";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import MuiAlert from "@mui/material/Alert";
//import { Snackbar } from "@mui/material";
//import Orders from './orders';
import React, { useState, useEffect } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function preventDefault(event) {
  event.preventDefault();
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

export default function Customers() {
  const [state, setState] = React.useState({
    Open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, Open } = state;
  const handleClick = () => {
    console.log("Call in");
    setState({ Open: true, vertical: "top", horizontal: "center" });
  };
  const handleClose = () => {
    setState({ Open: false, vertical: "top", horizontal: "center" });
  };
  const [open, setopen] = React.useState(true);
  const toggleDrawer = () => {
    setopen(!open);
  };
  const [selected, setSelected] = React.useState(null);
  const [customers, setcustomers] = useState([]);
  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    fetch("http://localhost:3000/customer")
    .then((data) => data.json())
    .then((actualData) => {
      console.log(actualData);
      setcustomers(actualData);
    });
  }
  return (
    <React.Fragment>
      {/* <Title>Customer List</Title> */}
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Customers
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Customer List
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <MainListItems />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 0, display: "flex", flexDirection: "column" }}
                  >
                    <Table size="large">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>ID</StyledTableCell>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell>Email</StyledTableCell>
                          <StyledTableCell>Phone Number</StyledTableCell>
                          <StyledTableCell>Status</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customers.map((customers) => (
                          <TableRow>
                            <TableCell>{customers.id}</TableCell>
                            <TableCell>{customers.name}</TableCell>
                            <TableCell>{customers.email}</TableCell>
                            <TableCell>{customers.phoneNumber}</TableCell>
                            <TableCell>
                              {/* <Button
                            variant="contained"
                            color={customers.isBlocked ? "success" : "error"}
                            onClick={() => {}}
                          >
                            {customers.isBlocked ? "unBlocked" : "Blocked"}
                          </Button> */}
                              {customers.isBlock === undefined ||
                              customers.isBlock === false ? (
                                <Button
                                  onClick={() => {
                                    console.log("Call");
                                    setSelected(customers);
                                    handleClick();
                                  }}
                                  variant="contained"
                                  size="small"
                                  className="reject_button"
                                >
                                  Block
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => {
                                    console.log("Call");
                                    setSelected(customers);
                                    handleClick();
                                  }}
                                  variant="contained"
                                  size="small"
                                  className="accept_button"
                                >
                                  Un-Block
                                </Button>
                              )}
                            </TableCell>

                            {/* <TableCell>{customers.paymentMethod}</TableCell> */}
                            {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ pt: 4 }} /> */}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Customers
      </Link>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={Open}
        onClose={handleClose}
        // message="Do you want to reject this Order?"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Do you want to{" "}
          {selected !== null
            ? selected.isBlock === undefined || selected.isBlock === false
              ? "Block"
              : "Un-Block"
            : ""}{" "}
          {selected !== null ? selected.name : ""} ?
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button
              onClick={() => {
                let tempData = JSON.parse(JSON.stringify(selected));
                tempData.isBlock =
                  selected !== null
                    ? selected.isBlock === undefined ||
                      selected.isBlock === false
                      ? true
                      : false
                    : false;
                fetch("http://localhost:3000/customer/" + selected.id, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(tempData),
                })
                  .then((data) => data.json())
                  .then((actualData) => {
                    console.log(actualData);
                    getData();
                    handleClose();
                  });
              }}
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              Yes
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              No
            </Button>
          </div>
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
