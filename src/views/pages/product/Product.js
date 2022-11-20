/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Category, Status } from "ui-component/SelectCustom";
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

  const loadData = async (e) => {
    await axios
      .get(`https://itc-finance.herokuapp.com/api/product`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
  };

  const handleChangeCategory = async (event) => {
    const category = event.target.value;
    await axios
      .get(`http://192.168.1.3:9000/api/product/filter?kategori=${category}`)
      .then((response) => {
        setData(response.data);
      });
    setKategoriProduk(category);
  };

  const handleChangeStatus = async (event) => {
    const status = event.target.value;
    await axios
      .get(`http://192.168.1.3:9000/api/product/filter?status=${status}`)
      .then((response) => {
        setData(response.data);
      });
    setIsActive(status);
    console.log(kategori_produk);
  };

  const handleDelete = async (_id, e) => {
    try {
      await axios.delete(`http://192.168.1.3:9000/api/product/${_id}`);
      toast.danger("Sukses Menghapus Produk", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/ITC-Finance/products");
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    loadData();
    setKategoriProduk("");
    setIsActive("");
  };

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
            label="Cari Nama Mobil atau Motor ...."
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
        <FormControl sx={{ minWidth: 120, ml: 2 }}>
          <Status
            label="Status"
            directLoad={true}
            withEmptySelect={true}
            value={isActive}
            onChange={handleChangeStatus}
          />
        </FormControl>
        <Button
          onClick={handleReset}
          variant="contained"
          style={{
            backgroundColor: "#ffc107",
            width: 100,
            marginLeft: 20,
            height: 50,
            marginTop: 8,
          }}
        >
          Reset
        </Button>
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
          Tambah
        </Button>
      </div>
      <TableContainer sx={{ maxHeight: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              {/* <TableCell align="center">Id</TableCell> */}
              <TableCell align="center">Kategori</TableCell>
              <TableCell align="center">Cabang</TableCell>
              <TableCell align="center">Nama Produk</TableCell>
              <TableCell align="center">Harga Limit</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Aksi</TableCell>
            </TableRow>
          </TableHead>
          {data ? (
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
                        {row.kategori}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {row.cabang}
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
                            row?.status_produk === "Aktif"
                              ? "#00c853"
                              : "#d84315",
                          fontWeight: "600",
                        }}
                      >
                        {row?.status_produk}
                      </TableCell>
                      <TableCell align="center">
                        <div>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#5e35b1", width: 100 }}
                            onClick={() =>
                              navigate(`/ITC-Finance/edit_product/${row._id}`)
                            }
                          >
                            Ubah
                          </Button>

                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#d84315",
                              width: 100,
                              marginLeft: 10,
                            }}
                            onClick={(e) => {
                              handleDelete(row._id);
                              e.preventDefault();
                            }}
                          >
                            Hapus
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          ) : (
            "Tidak Ada Data"
          )}
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
