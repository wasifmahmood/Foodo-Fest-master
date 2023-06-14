import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { Loader, LoaderBackdrop } from "../component/Loader";
import { getAllOfCollection, saveData } from "./Backend/utility";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: '#ca2129',
    backgroundColor: "#fbbe36",
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "customer_id", label: "Customer ID", minWidth: 120, align: "center" },
  {
    id: "customer_image",
    label: "Image",
    minWidth: 120,
    // align: "center",
  },
  {
    id: "customer_name",
    label: "Customer Name",
    minWidth: 150,
    // align: "center",
  },
  {
    id: "email_id",
    label: "Email ID",
    minWidth: 140,
    // align: "center",
  },
  {
    id: "customer_phone",
    label: "Phone",
    minWidth: 120,
    // align: "center",
  },
  {
    id: "block",
    label: "Block Customer",
    minWidth: 130,
    // align: "center",
    // format: (value) => value.toFixed(2),
  },
];
function createData(
  customer_id,
  customer_name,
  location,
  email_id,
  orderd_item,
  bill,
  block
) {
  //   const orderd_item = location / email_id;
  return {
    customer_id,
    customer_name,
    location,
    email_id,
    orderd_item,
    bill,
    block,
  };
}

const CustomerList = () => {
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const [userList, setUserList] = React.useState([]);

  const { vertical, horizontal, open } = state;
  const [isLoading , setIsLoading] = React.useState(true);
  const handleClick = () => {
    console.log("Call in");
    setState({ open: true, vertical: "top", horizontal: "center" });
  };
  const handleClose = () => {
    setState({ open: false, vertical: "top", horizontal: "center" });
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // await connectFirebase();
    setIsLoading(true);
    let Users = await getAllOfCollection("Users");
    setUserList([...Users]);
    console.log("Users: ", Users);
    setIsLoading(false);
  };

  const block_button = (
    <Button
      // onClick={handleClick({
      //   vertical: "top",
      //   horizontal: "center",
      // })}
      variant="contained"
      size="small"
      className="reject_button"
    >
      Block
    </Button>
  );
  const rows = [
    createData(
      "01475",
      "Joe",
      "street 21",
      "ali@gmail.com",
      "sandwich",
      46,
      block_button
    ),
    createData(
      "02351",
      "Max Marsh",
      "Hall Street",
      "max@gmail.como",
      "Noodles",
      56,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom component="div">
        CUSTOMERS LIST
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading == true ? (
                <LoaderBackdrop />
              ) : (
                <>
                  {userList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={item.Id}
                        >
                          {/* {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })} */}

                          <TableCell>{item.Id.split("-")[0]}</TableCell>
                          <TableCell key={item.id}>
                            <Avatar
                              className="user_avatar"
                              alt="Remy Sharp"
                              align={"center"}
                              src={item.image}
                              // sx={{ width: 44, height: 44 }}
                            />
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.phone}</TableCell>
                          <TableCell>
                            {item.isBlock === undefined ||
                            item.isBlock === false ? (
                              <Button
                                onClick={() => {
                                  console.log("Call");
                                  setSelected(item);
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
                                  setSelected(item);
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
                        </TableRow>
                      );
                    })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
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
              onClick={async () => {
                await saveData("Users", selected.Id, {
                  isBlock:
                    selected.isBlock === undefined || selected.isBlock === false
                      ? true
                      : false,
                });
                fetchData();
                handleClose();
              }}
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              No
            </Button>
          </div>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomerList;
