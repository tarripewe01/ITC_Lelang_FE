/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FieldDocument from "ui-component/FieldDocument";
import { Branch, Category, Rating } from "ui-component/SelectCustom";
import Field from "../../../ui-component/Field";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard/products");
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <div style={{ display: "flex", padding: 20 }}>
          <Box>
            <h1>Add Product</h1>
          </Box>
        </div>
        <Field type="file" />
        <Field type="text" label="No.LOT" />
        <Field type="text" label="Name" />
        <Field type="text" label="Price" />
        <Field type="text" label="Color" />
        <Category />

        <FormControl sx={{ m: 1, width: "98%" }}>
          <Grid container spacing={1}>
            <Grid xs={4}>
              <Rating label="Machine" />
            </Grid>
            <Grid xs={4}>
              <Rating label="Interior" />
            </Grid>
            <Grid xs={4}>
              <Rating label="Exterior" />
            </Grid>
          </Grid>
        </FormControl>
        <Branch label="Branch" />
        <FormControl sx={{ m: 1, width: "98%" }}>
          <div>
            <p>Start Auction</p>
            <Grid container spacing={1}>
              <Grid xs={6}>
                <Field type="date" />
              </Grid>
              <Grid xs={6}>
                <Field type="time" />
              </Grid>
            </Grid>
            <p>End Auction</p>
            <Grid container spacing={1}>
              <Grid xs={6}>
                <Field type="date" />
              </Grid>
              <Grid xs={6}>
                <Field type="time" />
              </Grid>
            </Grid>
          </div>
        </FormControl>
        <div>
          <div style={{ display: "flex", padding: 20 }}>
            <Box>
              <h3>Spesification</h3>
            </Box>
          </div>
          <FormControl sx={{ m: 1, width: "98%" }}>
            <div>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Field type="text" label="Merk" />
                </Grid>
                <Grid xs={4}>
                  <Field type="text" label="Type" />
                </Grid>
                <Grid xs={4}>
                  <Field type="text" label="Year" />
                </Grid>
              </Grid>
            </div>
          </FormControl>
          <FormControl sx={{ m: 1, width: "98%" }}>
            <div>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Field type="text" label="Odometer (KM)" />
                </Grid>
                <Grid xs={4}>
                  <Field type="text" label="Machine Capacity (CC)" />
                </Grid>
                <Grid xs={4}>
                  <Field type="text" label="Fuel" />
                </Grid>
              </Grid>
            </div>
          </FormControl>
          <FormControl sx={{ m: 1, width: "98%" }}>
            <div>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Field type="text" label="Transmition" />
                </Grid>
                <Grid xs={4}>
                  <Field type="text" label="No. Frame" />
                </Grid>
                <Grid xs={4}>
                  <Field type="text" label="No. Machine" />
                </Grid>
              </Grid>
            </div>
          </FormControl>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", padding: 20 }}>
          <Box>
            <h3>Document</h3>
          </Box>
        </div>
        <FormControl sx={{ m: 1, width: "98%" }}>
          <FieldDocument label="No.Polisi" />
          <FieldDocument label="STNK" option="select" />
          <FieldDocument label="Masa Berlaku STNK" type="date" />
          <FieldDocument label="BPKB" option="BPKB" />
          <FieldDocument label="Faktur" option="select" />
          <FieldDocument label="Fotocopy KTP" option="select" />
          <FieldDocument label="Kwitansi Blanko" option="select" />
          <FieldDocument label="Form A" option="select" />
          <FieldDocument label="SPH" option="select" />
          <FieldDocument label="KEUR" option="select" />
        </FormControl>
      </div>

      <div>
        <div style={{ display: "flex", padding: 20 }}>
          <Box>
            <h3>Additional</h3>
          </Box>
        </div>
        <FormControl sx={{ m: 1, width: "98%" }}>
          <FieldDocument label="Status" option="select" />
          <Grid container spacing={1} style={{ marginLeft: 10, marginTop: 20 }}>
            <Grid xs={12}>
              <TextareaAutosize
                maxRows={20}
                aria-label="maximum height"
                placeholder="Catatan"
                style={{ width: "98%", padding: 20 }}
              />
            </Grid>
          </Grid>
        </FormControl>
      </div>

      <div style={{ marginBottom: 20, padding: 20 }}>
        <Button
          style={{
            width: "100%",
            height: 50,
            marginBottom: 10,
            backgroundColor: "#2196f3",
          }}
          variant="contained"
        >
          Save
        </Button>
        <Button
          style={{ width: "100%", height: 50, backgroundColor: "#d84315" }}
          variant="contained"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </Paper>
  );
};

export default AddProduct;
