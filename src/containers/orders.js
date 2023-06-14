import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../components/Title";
import { Button, MenuItem, Select } from "@mui/material";
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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
// Generate Order Data

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

export default function Orders() {
  const [open, setOpen] = React.useState(true);
  const [orders, setOrders] = React.useState([]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3000/orders")
      .then((data) => data.json())
      .then((actualData) => {
        console.log(actualData);
        setOrders(actualData);
      });
  };

  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
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
                Orders List
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
                          <StyledTableCell>Date</StyledTableCell>
                          <StyledTableCell>Customer Name</StyledTableCell>
                          <StyledTableCell>Address</StyledTableCell>
                          <StyledTableCell>Items</StyledTableCell>
                          <StyledTableCell>Total</StyledTableCell>
                          <StyledTableCell align="right">
                            Status
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders.map((row, index) => (
                          <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>
                              {row.products.map((e) => e + ",")}
                            </TableCell>
                            <TableCell>{row.total}</TableCell>
                            <TableCell align="right">
                              <Select
                                sx={{ width: 202 }}
                                value={row.status}
                                onChange={(e) => {
                                  let tempData = JSON.parse(
                                    JSON.stringify(orders)
                                  );
                                  tempData[index].status = e.target.value;
                                  console.log(tempData[index].id);
                                  fetch(
                                    "http://localhost:3000/orders/" +
                                      tempData[index].id,
                                    {
                                      method: "PUT",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(tempData[index]),
                                    }
                                  )
                                    .then((data) => data.json())
                                    .then((actualData) => {
                                      console.log(actualData);
                                      getData();
                                    });
                                  // setOrders(tempData);
                                }}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                size="small"
                              >
                                <MenuItem key={1} value={"Pending"}>Pending</MenuItem>
                                <MenuItem key={2} value={"Preparing"}>
                                  Preparing
                                </MenuItem>
                                <MenuItem key={3} value={"Ready"}>Ready</MenuItem>
                                <MenuItem key={4} value={"Deliver"}>Deliver</MenuItem>
                                <MenuItem key={5} value={"Complete"}>Complete</MenuItem>
                                <MenuItem key={6} value={"Cancel"}>Cancel</MenuItem>
                              </Select>
                            </TableCell>
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
        See more orders
      </Link>
    </React.Fragment>
  );
}
