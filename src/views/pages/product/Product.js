/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Category, Status } from "ui-component/SelectCustom";
import {
  Box,
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
var currencyFormatter = require("currency-formatter");

const Product = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState([]);
  // filter
  const [query, setQuery] = React.useState("");
  const [kategori_produk, setKategoriProduk] = React.useState("");
  const [isActive, setIsActive] = React.useState("");
  //   pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get(`http://localhost:8000/product`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleChangeCategory = async (event) => {
    const category = event.target.value;
    await axios
      .get(`http://localhost:8000/product?kategori_produk=${category}`)
      .then((response) => {
        setData(response.data);
      });
    setKategoriProduk(category);
  };

  // const handleChangeStatus = async (event) => {
  //   const status = event.target.value;
  //   await axios
  //     .get(`http://localhost:8000/product?kategori_produk=${status}`)
  //     .then((response) => {
  //       setData(response.data);
  //     });
  //   setIsActive(status);
  //   console.log(kategori_produk);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div style={{ display: "flex", padding: 20 }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            marginTop: 1,
          }}
        >
          <TextField
            fullWidth
            label="Search ..."
            id="fullWidth"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
        <FormControl sx={{ minWidth: 120, ml: 2 }}>
          <Category
            directLoad={true}
            withEmptySelect={true}
            value={kategori_produk}
            onChange={handleChangeCategory}
          />
        </FormControl>
        {/* <FormControl sx={{ minWidth: 120, ml: 2 }}>
          <Status
            label="Status"
            directLoad={true}
            withEmptySelect={true}
            value={isActive}
            onChange={handleChangeStatus}
          />
        </FormControl> */}
        {/* <Button
          variant="contained"
          style={{
            backgroundColor: "#ffc107",
            width: 100,
            marginLeft: 20,
          }}
        >
          Reset
        </Button> */}
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2196f3",
            width: 100,
            marginLeft: 20,
          }}
          onClick={() => navigate("/ITC-Finance/add_product")}
        >
          Add
        </Button>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              {/* <TableCell align="center">Id</TableCell> */}
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((row) => row.nama_produk.toLowerCase().includes(query))
              .map((row, idx) => {
                return (
                  <TableRow key={row._id}>
                    <TableCell align="center">{idx + 1}</TableCell>
                    {/* <TableCell align="center">{row.user._id}</TableCell> */}
                    <TableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {row.kategori_produk}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {row.nama_produk}
                    </TableCell>
                    <TableCell align="center">
                      {currencyFormatter.format(row.harga, { code: "IDR" })}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        color:
                          row?.isActive === "Aktif" ? "#00c853" : "#d84315",
                        fontWeight: "600",
                      }}
                    >
                      {row?.isActive}
                    </TableCell>
                    <TableCell align="center">
                      <div>
                        <Link
                          to={"/ITC-Finance/add_product?edit=2"}
                          state={row}
                        >
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#5e35b1", width: 100 }}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#d84315", width: 100 }}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Product;
