/* eslint-disable react-hooks/exhaustive-deps */
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
var currencyFormatter = require("currency-formatter");

const HistoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = React.useState([]);
  console.log(data);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/product/${id}`).then((response) => {
        setData(response.data);
      });
    }
  }, []);

  //   pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", padding: 20 }}>
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
              <h1>{data.nama_produk}</h1>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              style={{ textAlign: "end", color: "#d84315" }}
            >
              <h2>
                Harga Limit :{" "}
                {currencyFormatter.format(data.harga, { code: "IDR" })}
              </h2>
            </Grid>
          </Grid>
        </div>
        <div style={{ display: "flex", padding: 20 }}>
          <h3>Daftar Peserta Lelang</h3>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>No</TableCell>
                <TableCell style={{ textAlign: "center" }}>Id</TableCell>
                <TableCell style={{ textAlign: "center" }}>Nama</TableCell>
                <TableCell style={{ textAlign: "center" }}>Bid </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>1</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  iu23y3n383
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>Jhonatha</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  Rp 113.000.000
                </TableCell>
              </TableRow>
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
        <div >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#2196f3",
              width: 100,
              float: "right",
              marginTop: 10,
              marginRight: 20,
              marginBottom: 30,
            }}
            onClick={() => navigate("/ITC-Finance/history")}
          >
            Kembali
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default HistoryDetail;
