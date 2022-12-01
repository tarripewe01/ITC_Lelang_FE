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
import moment from "moment";
import "moment/min/locales";
import React from "react";
import { Link } from "react-router-dom";
import { Category, Status } from "ui-component/SelectCustom";
var currencyFormatter = require("currency-formatter");

const HistoryBid = () => {
  moment.locale("id");

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
      .get(`https://itcfinanceapi.vercel.app/api/product`)
      .then((response) => {
        const data = response.data;
        setData(data);
        // console.log(response.data);
      });
  };

  const handleChangeCategory = async (event) => {
    const category = event.target.value;
    await axios
      .get(
        `https://itcfinanceapi.vercel.app/api/product/filter?kategori=${category}`
      )
      .then((response) => {
        setData(response.data);
      });
    setKategoriProduk(category);
  };

  const handleChangeStatus = async (event) => {
    const status = event.target.value;
    await axios
      .get(
        `https://itcfinanceapi.vercel.app/api/product/filter?status=${status}`
      )
      .then((response) => {
        setData(response.data);
      });
    setIsActive(status);
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

      <TableContainer sx={{ maxHeight: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              {/* <TableCell align="center">Id</TableCell> */}
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Mulai Lelang</TableCell>
              <TableCell align="center">Berakhir Lelang</TableCell>
              <TableCell align="center">Status Lelang</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((row) => row.nama_produk.toLowerCase().includes(query))
              .map((row, idx) => {
                return (
                  <TableRow key={idx}>
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
                      {row.nama_produk}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bold", color: "#d84315" }}
                    >
                      {currencyFormatter.format(row.harga, { code: "IDR" })}
                    </TableCell>
                    <TableCell align="center">
                      {moment(row?.tanggal_mulai).format("LL")}
                      {" ||  "}
                      {row.waktu_mulai}{" "}
                    </TableCell>
                    <TableCell align="center">
                      {moment(row?.tanggal_selesai).format("LL")}
                      {" ||  "}
                      {row.waktu_selesai}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        color:
                          row?.status_lelang === "Aktif"
                            ? "#00c853"
                            : "#d84315",
                        fontWeight: "600",
                      }}
                    >
                      {row?.status_lelang === "Aktif"
                        ? "Lelang Sedang Berlangsung"
                        : "Selesai"}
                    </TableCell>
                    <TableCell align="center">
                      <Link to={`/ITC-Finance/history-detail/${row._id}`}>
                        <div>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#5e35b1", width: 100 }}
                          >
                            Lihat
                          </Button>
                        </div>
                      </Link>
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

export default HistoryBid;
