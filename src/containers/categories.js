import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActionArea, CardActions } from "@mui/material";
import Link from "@mui/material/Link";
import Title from "../components/Title";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
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
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

// import "../style/menu.scss";
import { Loader, LoaderBackdrop } from "../components/Loader";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #fbbe36",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

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

export default function Categories() {
  const [categoriesList, setCategoriesList] = React.useState([
    {
      id: "id",
     // name:"name",
      image:"image",
    },
  ]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [catName, setCatName] = React.useState("");
  const [catImage, setCatImage] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  //const [categories, setcategories] = React.useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3000/categories")
      .then((data) => data.json())
      .then((actualData) => {
        console.log(actualData);
        setCategoriesList(actualData);
      });
  };

  return (
    // <h2>Categories</h2>
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <AppBar backgroundColor="red" position="absolute" open={open}>
        <Toolbar
          color="#fbbe36"
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
              color="#fbbe36"
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
                Categories
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
              onClick={()=>{
                setOpenCreateModal(true)
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
                    <Grid container spacing={4}>
                      {categoriesList.map((item) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            xl={3}
                            xxl={2}
                          >
                            <Card
                              style={{
                                boxShadow: "1px 2px 9px grey",
                                // margin: "4em",
                                // padding: "1em",
                              }}
                              sx={{ maxWidth: 345 }}
                            >
                              <CardMedia
                                component="img"
                                height="200"
                                src={item.image}
                                // image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {item.name}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
                              </CardContent>
                              <CardActions>
                                <Button
                                  size="small"
                                  fullWidth
                                  onClick={() => {
                                    setOpenModal(true);
                                    setSelectedItem(item);
                                    //   handleOpenEdit();
                                  }}
                                  style={{
                                    color: "black",
                                    background: "#fbbe36",
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => {
                                    setOpenDeleteModal(true);
                                       setSelectedItem(item);
                                    //   handleOpenDelete();
                                    // handleClick();
                                  }}
                                  size="small"
                                  fullWidth
                                  style={{
                                    color: "black",
                                    background: "#fbbe36",
                                  }}
                                >
                                  Delete
                                </Button>
                              </CardActions>
                            </Card>
                          </Grid>
                        );
                      })}
                    </Grid>
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
              defaultValue="Update Categorey"
              inputProps={ariaLabel}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Category Name"
              name=""
              value={selectedItem.name}
              onChange={(e) => {
                let tempData = JSON.parse(JSON.stringify(selectedItem));
                tempData.name = e.target.value;
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
                fetch("http://localhost:3000/categories/" + selectedItem.id, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(selectedItem),
                })
                  .then((data) => data.json())
                  .then((actualData) => {
                    console.log(actualData);
                    getData();
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
            defaultValue="Add New Category"
            inputProps={ariaLabel}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Category Name"
            name=""
            value={catName}
            onChange={(e) => {
              setCatName(e.target.value);
            }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Picture URL"
            value={catImage}
            onChange={(e) => {
              setCatImage(e.target.value);
            }}
            autoFocus
          />
          <Button
            variant="contained"
            onClick={() => {
                if(catName===''){
                    window.alert('Add Category name')
                    return
                }
                if(catImage===''){
                    window.alert('Add Category image')
                    return
                }
                let dataObj={
                    name:catName,
                    image:catImage
                }
              console.log(JSON.stringify(selectedItem));
              fetch("http://localhost:3000/categories", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObj),
              })
                .then((data) => data.json())
                .then((actualData) => {
                  console.log(actualData);
                  getData();
                  setOpenCreateModal(false);
                });
            }}
          >
            Save
          </Button>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
      {selectedItem !== null && <Modal
        open={openDeleteModal}
        onClose={() => {
            setOpenDeleteModal(false);
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
         <h2>Delete Alert!</h2>
         <h4>Are you sure you want to delete {selectedItem.name} {' '}category?</h4>
       
          <Button
            variant="contained"
            color="error"
            onClick={() => {
               
              console.log(JSON.stringify(selectedItem));
              fetch("http://localhost:3000/categories/"+selectedItem.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                //body: JSON.stringify(dataObj),
              })
                .then((data) => data.json())
                .then((actualData) => {
                  console.log(actualData);
                  getData();
                  setOpenDeleteModal(false);
                });
            }}
          >
            Delete
          </Button>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
      }
    </React.Fragment>
  );
}
