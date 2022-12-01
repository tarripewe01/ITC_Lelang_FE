/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
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
import moment from "moment";
import "moment/min/locales";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
var currencyFormatter = require("currency-formatter");

moment.locale("id");

const HistoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = React.useState([]);
  const [bidderName, setBidderName] = React.useState([]);
  const [bidder, setBidder] = React.useState([]);

  console.log("bidderName", bidderName);
  console.log("bidder", bidder);
  // console.log("data", data);

  useEffect(() => {
    loadData();
    profile();
  }, []);

  const loadData = () => {
    if (id) {
      axios
        .get(`https://itcfinanceapi.vercel.app/api/product/${id}`)
        .then((response) => {
          let bidder = response.data.bids;
          // bidder.map((item) => {
          //   // console.log("DATA", item.user);
          //   const data = item.user;
          //   // console.log('bidder', data)
          //   setBidderName(item);
          // });
          setData(response.data);
          setBidderName(bidder);
        });
    }
  };

  const profile = () => {
    axios
      .get(`https://itcfinanceapi.vercel.app/api/profile`)
      .then((response) => {
        let dataProfile = response.data;
        // console.log('DATA PROFILE', dataProfile)
        dataProfile.map((item) => {
          const id = item.user?._id;
          const user = item.user?.name;
          // console.log(id, "-", user);
          setBidder(id);
        });
      });
  };

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
        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>No</TableCell>
                <TableCell style={{ textAlign: "center" }}>Id</TableCell>
                {/* <TableCell style={{ textAlign: "center" }}>Nama</TableCell> */}
                <TableCell style={{ textAlign: "center" }}>Tanggal</TableCell>
                <TableCell style={{ textAlign: "center" }}>Bid </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.bids?.map((bid, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell style={{ textAlign: "center" }}>
                      {idx + 1}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {bid.user}
                    </TableCell>
                    {/* <TableCell style={{ textAlign: "center" }}>
                      {bidder}
                    </TableCell> */}
                    <TableCell style={{ textAlign: "center" }}>
                      {moment(bid.tanggal_bid).format("LL")}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {currencyFormatter.format(bid.nominal_bid, {
                        code: "IDR",
                      })}
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
          count={data.bids?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div>
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
