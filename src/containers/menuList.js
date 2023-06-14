import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../components/Title";
import { Button, ImageList } from "@mui/material";
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
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Categories from "./categories";

const ariaLabel = { "aria-label": "description" };
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
//function createData(id, productName, Category, Price, paymentMethod, amount) {
//  return { id, productName, Category, Price, paymentMethod, amount };
//}

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

export default function MenuList() {
  const [productList, setproductList] = React.useState([
    {
      id: "id",
      productName: "productName",
      Category: "Category",
      Price: "Price",
    },
  ]);
  const [categoryList, setCategoryList] = React.useState([]);
  const [catlist, setcatlist] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const [category, setcategory] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState('');

  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    getproductData();
  }, []);

  const getproductData = () => {
    fetch("http://localhost:3000/products")
      .then((data) => data.json())
      .then((actualData) => {
        console.log(actualData);
        setproductList(actualData);
      });

    fetch("http://localhost:3000/categories")
      .then((data) => data.json())
      .then((actualData) => {
        console.log(actualData);
        setCategoryList(actualData);
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
                Menu List
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
            <div style={{ width: "100%" }}>
              <Button
                onClick={() => {
                  setOpenCreateModal(true);
                }}
                style={{
                  marginLeft: "90%",
                  marginTop: "2%",
                  color: "black",
                  background: "#fbbe36",
                }}
                variant="contained"
              >
                + Add New
              </Button>
            </div>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 0, display: "flex", flexDirection: "column" }}
                  >
                    <Table size="large">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Image</StyledTableCell>
                          <StyledTableCell>Product Name</StyledTableCell>
                          <StyledTableCell>Category</StyledTableCell>
                          <StyledTableCell>Price</StyledTableCell>
                          <StyledTableCell>Edit Product</StyledTableCell>
                          <StyledTableCell>Delete Product</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {productList.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>
                              <ImageList
                                sx={{ width: 100, height: 60 }}
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                              >
                                <img
                                  src={row.image}
                                  // srcSet={`https://propakistani.pk/wp-content/uploads/2022/04/front-view-tasty-meat-burger-wit.jpg?w=30&h=30&fit=crop&auto=format&dpr=2 2x`}
                                  alt={row.productName}
                                  loading="lazy"
                                  height={60}
                                  width={100}
                                />
                              </ImageList>
                            </TableCell>
                            {/* <TableCell>{row.id + 1}</TableCell> */}
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.categoryName}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                onClick={() => {
                                  setOpenModal(true);
                                  setSelectedItem(row);
                                  //   handleOpenDelete();
                                  // handleClick();
                                }}
                              >
                                Edit
                              </Button>
                            </TableCell>
                            <TableCell>
                              {" "}
                              <Button variant="contained">Delete</Button>
                            </TableCell>

                            {/* <TableCell>{row.paymentMethod}</TableCell> */}
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
        See more products
      </Link>
      {selectedItem !== null && (
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #fbbe36",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Input
              disabled
              defaultValue="Update Product"
              inputProps={ariaLabel}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Product Name"
              name=""
              value={selectedItem.name}
              onChange={(e) => {
                let tempData = JSON.parse(JSON.stringify(selectedItem));
                tempData.name = e.target.value;
                setSelectedItem(tempData);
              }}
              autoFocus
            />
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div style={{ marginRight: "5px" }}>
                <Typography variant="body1" component="div" gutterBottom>
                  Select Category
                </Typography>
                <Select
                  sx={{ width: 202 }}
                  value={selectedItem.categoryName}
                  onChange={(e) => {
                    let tempData = JSON.parse(JSON.stringify(selectedItem));
                    tempData.categoryName = e.target.value;
                    setSelectedItem(tempData);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                >
                  {categoryList.map((item) => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>;
                  })}

                  {/* <MenuItem value={10}>Category 2</MenuItem>
              <MenuItem value={20}>Category 3</MenuItem>
              <MenuItem value={30}>Category 4</MenuItem>
              <MenuItem value={40}>Category 5</MenuItem> */}
                </Select>
              </div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Product Price"
              name=""
              value={selectedItem.price}
              onChange={(e) => {
                let tempData = JSON.parse(JSON.stringify(selectedItem));
                tempData.price = e.target.value;
                setSelectedItem(tempData);
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Picture URL"
              value={selectedItem.image}
              //   autoComplete="email"
              onChange={(e) => {
                let tempData = JSON.parse(JSON.stringify(selectedItem));
                tempData.image = e.target.value;
                setSelectedItem(tempData);
              }}
              autoFocus
            />
            <Button
              variant="contained"
              onClick={() => {
                console.log(JSON.stringify(selectedItem));
                fetch("http://localhost:3000/products/" + selectedItem.id, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(selectedItem),
                })
                  .then((data) => data.json())
                  .then((actualData) => {
                    console.log(actualData);
                    getproductData();
                    setOpenModal(false);
                  });
              }}
            >
              Update
            </Button>
            {/* <ChildModal /> */}
          </Box>
        </Modal>
      )}
      {
        <Modal
          open={openCreateModal}
          onClose={() => {
            setOpenCreateModal(false);
          }}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #fbbe36",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Input
              disabled
              defaultValue="Add New Product"
              inputProps={ariaLabel}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Product Name"
              name=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoFocus
            />
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div style={{ marginRight: "5px" }}>
                <Typography variant="body1" component="div" gutterBottom>
                  Select Category
                </Typography>
                <Select
                  sx={{ width: 202 }}
                  value={category}
                  onChange={(e) => {
                    
                    setcategory(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                >
                  {categoryList.map((item) => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>;
                  })}

                  {/* <MenuItem value={10}>Category 2</MenuItem>
              <MenuItem value={20}>Category 3</MenuItem>
              <MenuItem value={30}>Category 4</MenuItem>
              <MenuItem value={40}>Category 5</MenuItem> */}
                </Select>
              </div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Product Price"
              name=""
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Picture URL"
              value={image}
              //   autoComplete="email"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              autoFocus
            />
            <Button
              variant="contained"
              onClick={() => {
                let newItem = {
                  name: name,
                  categoryName: category,
                  image:image,
                  price: price
                }
                console.log(JSON.stringify(selectedItem));
                fetch("http://localhost:3000/products/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newItem),
                })
                  .then((data) => data.json())
                  .then((actualData) => {
                    console.log(actualData);
                    getproductData();
                    setName('');
                    setcategory('');
                    setPrice('');
                    setImage('');
                    setOpenCreateModal(false);
                  });
              }}
            >
              Save
            </Button>
            {/* <ChildModal /> */}
          </Box>
        </Modal>
      }
    </React.Fragment>
  );
}
