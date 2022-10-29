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
} from "@mui/material";

import axios from "axios";
import { useSelector } from "react-redux";

const User = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("http://localhost:9000/api/profile")
      .then((response) => {
        // console.log(response.data)
        setData(response.data);
      })
      .then((error) => {
        console.log(error);
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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">No.KTP</TableCell>
              <TableCell align="center">No. NPWP</TableCell>
              <TableCell align="center">Bank</TableCell>
              <TableCell align="center">No.Rekening</TableCell>
              <TableCell align="center">Alamat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((row) => row.user?.name.toLowerCase().includes(query))
              .map((row, idx) => {
                return (
                  <TableRow key={row._id}>
                    <TableCell align="center">{idx + 1}</TableCell>
                    {/* <TableCell align="center">{row.user._id}</TableCell> */}
                    <TableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      <Avatar alt={row.user?.name} src={row.user?.avatar} />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {row.user?.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ textTransform: "lowercase" }}
                    >
                      {row.user?.email}
                    </TableCell>
                    <TableCell align="center">{row.user?.gender}</TableCell>
                    <TableCell align="center">+62{row.phone}</TableCell>
                    <TableCell align="center">{row.ktp}</TableCell>
                    <TableCell align="center">
                      {row.npwp ? row.npwp : "-"}
                    </TableCell>
                    <TableCell align="center">{row.bank}</TableCell>
                    <TableCell align="center">{row.bank_account}</TableCell>
                    <TableCell align="center">
                      {/* <div>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#d84315", width: 100 }}
                        >
                          Delete
                        </Button>
                      </div>  */}
                      {row.address}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 30, 50]}
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

export default User;
