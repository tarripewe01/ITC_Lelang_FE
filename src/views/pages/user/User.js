/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as React from "react";
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
  Avatar,
  Modal,
  Typography,
  CircularProgress,
} from "@mui/material";

import moment from "moment";
import "moment/locale/id";

import axios from "axios";

const User = () => {
  const [dataUser, setDataUser] = React.useState([]);
  const [dataProfile, setDataProfile] = React.useState({});
  const [idUser, setIdUser] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const [page, setPage] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // console.log("idUser", idUser._id);
  // console.log("dataProfile", dataProfile);

  React.useEffect(() => {
    loadDataUser();
    loadDataProfile();
  }, [idUser]);

  const loadDataUser = async () => {
    await axios
      .get("https://itc-finance.herokuapp.com/api/auth/all")
      .then((response) => {
        setDataUser(response.data);
      });
  };

  const loadDataProfile = async () => {
    setLoading(true);
    await axios
      .get("https://itc-finance.herokuapp.com/api/profile")
      .then((response) => {
        const data = response.data;
        // console.log("RESPONSE", data);
        data.map((item) => {
          console.log("ITEM", item);
          if (item.user._id === idUser._id) {
            setDataProfile(item);
            setLoading(false);
          }
        });
      });
  };

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
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          style={{ padding: 20 }}
        >
          <TextField
            fullWidth
            label="Search ..."
            id="fullWidth"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>

        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Date of Join</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataUser
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter((row) => row.name.toLowerCase().includes(query))
                .map((row, idx) => {
                  return (
                    <TableRow key={row._id}>
                      <TableCell align="center">{idx + 1}</TableCell>
                      {/* <TableCell align="center">{row.user._id}</TableCell> */}

                      <TableCell
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ textTransform: "lowercase" }}
                      >
                        {row.email}
                      </TableCell>
                      <TableCell align="center">{row.gender}</TableCell>
                      <TableCell align="center">
                        {moment(row.date).format("LL")}
                      </TableCell>
                      <TableCell align="center">
                        {dataProfile ? (
                          <Button
                            onClick={() => {
                              setIdUser(row);
                              handleOpen();
                            }}
                            variant="contained"
                            style={{ backgroundColor: "#5e35b1", width: 100 }}
                          >
                            View
                          </Button>
                        ) : (
                          ""
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                idUser={dataProfile}
              >
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Box sx={style}>
                    <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                      Phone : {dataProfile.phone}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      No.KTP : {dataProfile.ktp}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      No. NPWP :{dataProfile.npwp ? dataProfile.npwp : "-"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Bank : {dataProfile.bank}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Bank Account : {dataProfile.bank_account}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Address : {dataProfile.address}
                    </Typography>
                  </Box>
                )}
              </Modal>
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 30, 50]}
          component="div"
          count={dataUser.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default User;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px dotted #5e35b1",
  boxShadow: 24,
  p: 4,
};
