/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import { Branch, Category, Rating } from "ui-component/SelectCustom";
import { useNavigate } from "react-router-dom";
import FieldDocument from "ui-component/FieldDocument";
import Field from "../../../ui-component/Field";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../../store/action/productAction";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [lot, setLot] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [machine, setMachine] = useState(null);
  const [interior, setInterior] = useState(null);
  const [exterior, setExterior] = useState(null);
  const [branch, setBranch] = useState(null);
  const [category, setCategory] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [merk, setMerk] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmition, setTransmition] = useState("");
  const [odometer, setOdometer] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [noFrame, setNoFrame] = useState("");
  const [noMachine, setNoMachine] = useState("");
  const [noPolisi, setNoPolisi] = useState("");
  const [stnk, setStnk] = useState("");
  const [bpkb, setBpkb] = useState("");
  const [masaberlakuStnk, setMasaBerlakuStnk] = useState("");
  const [faktur, setFaktur] = useState("");
  const [fcKtp, setFcKtp] = useState("");
  const [kwitansi, setKwitansi] = useState("");
  const [formA, setFormA] = useState("");
  const [sph, setSph] = useState("");
  const [keur, setKeur] = useState("");
  const [status, setStatus] = useState("");
  const [catatan, setCatatan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      lot,
      name,
      price,
      color,
      machine,
      interior,
      exterior,
      branch,
      category,
      startDate,
      endDate,
      startTime,
      endTime,
      merk,
      type,
      year,
    };
    addProduct(data);
    clearForm();
    navigate("/ITC-Finance/product");
    console.log('klik')
  };

  const clearForm = () => {
    setLot("");
    setName("");
    setPrice("");
    setColor("");
    setMerk("");
    setType("");
    setYear("");
    setFuel("");
    setTransmition("");
    setOdometer("");
    setEngineCapacity("");
    setNoFrame("");
    setNoMachine("");
    setNoPolisi("");
    setStnk("");
    setBpkb("");
    setMasaBerlakuStnk("");
    setFaktur("");
    setFcKtp("");
    setKwitansi("");
    setFormA("");
    setSph("");
    setKeur("");
    setStatus("");
    setCatatan("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/ITC-Finance/products");
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <div style={{ display: "flex", padding: 20 }}>
          <Box>
            <h1>Add Product</h1>
          </Box>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "98%" },
          }}
          autoComplete="off"
          onSubmit={()=>console.log('klik')}
        >
          <div>
            <input
              accept="image/*"
              multiple
              type="file"
              id="fullWidth"
              value={image}
              onChange={(e) => setImage(e.target.files[0])}
              style={{ marginLeft: 10, marginBottom: 10 }}
            />
            <Field
              type="text"
              label="No.LOT"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
            />
            <Field
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Field
              type="text"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Field
              type="text"
              label="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <Category
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Rating
                    label="Machine"
                    value={machine}
                    onChange={(e) => setMachine(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Interior"
                    value={interior}
                    onChange={(e) => setInterior(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Exterior"
                    value={exterior}
                    onChange={(e) => setExterior(e.target.value)}
                  />
                </Grid>
              </Grid>
            </FormControl>
            <Branch
              label="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <div>
                <p>Start Auction</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <p>End Auction</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
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
                      <Field
                        type="text"
                        label="Merk"
                        value={merk}
                        onChange={(e) => setMerk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
              </FormControl>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <div>
                  <Grid container spacing={1}>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Odometer (KM)"
                        value={odometer}
                        onChange={(e) => setOdometer(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Machine Capacity (CC)"
                        value={engineCapacity}
                        onChange={(e) => setEngineCapacity(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Fuel"
                        value={fuel}
                        onChange={(e) => setFuel(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
              </FormControl>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <div>
                  <Grid container spacing={1}>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Transmition"
                        value={transmition}
                        onChange={(e) => setTransmition(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Frame"
                        value={noFrame}
                        onChange={(e) => setNoFrame(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Machine"
                        value={noMachine}
                        onChange={(e) => setNoMachine(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
              </FormControl>
            </div>
            <div>
              <div style={{ display: "flex", padding: 20 }}>
                <Box>
                  <h3>Document</h3>
                </Box>
              </div>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <FieldDocument
                  label="No.Polisi"
                  choose="text"
                  value={noPolisi}
                  onChange={(e) => setNoPolisi(e.target.value)}
                />
                <FieldDocument
                  label="STNK"
                  option="Document"
                  value={stnk}
                  onChange={(e) => setStnk(e.target.value)}
                />
                <FieldDocument
                  label="Masa Berlaku STNK"
                  type="date"
                  choose="text"
                  value={masaberlakuStnk}
                  onChange={(e) => setMasaBerlakuStnk(e.target.value)}
                />
                <FieldDocument
                  label="BPKB"
                  option="BPKB"
                  value={bpkb}
                  onChange={(e) => setBpkb(e.target.value)}
                />
                <FieldDocument
                  label="Faktur"
                  option="Document"
                  value={faktur}
                  onChange={(e) => setFaktur(e.target.value)}
                />
                <FieldDocument
                  label="Fotocopy KTP"
                  option="Document"
                  value={fcKtp}
                  onChange={(e) => setFcKtp(e.target.value)}
                />
                <FieldDocument
                  label="Kwitansi Blanko"
                  option="Document"
                  value={kwitansi}
                  onChange={(e) => setKwitansi(e.target.value)}
                />
                <FieldDocument
                  label="Form A"
                  option="Document"
                  value={formA}
                  onChange={(e) => setFormA(e.target.value)}
                />
                <FieldDocument
                  label="SPH"
                  option="Document"
                  value={sph}
                  onChange={(e) => setSph(e.target.value)}
                />
                <FieldDocument
                  label="KEUR"
                  option="Document"
                  value={keur}
                  onChange={(e) => setKeur(e.target.value)}
                />
              </FormControl>
            </div>

            <div>
              <div style={{ display: "flex", padding: 20 }}>
                <Box>
                  <h3>Additional</h3>
                </Box>
              </div>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <FieldDocument
                  label="Status"
                  option="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <Grid
                  container
                  spacing={1}
                  style={{ marginLeft: 10, marginTop: 20 }}
                >
                  <Grid xs={12}>
                    <TextareaAutosize
                      maxRows={20}
                      aria-label="maximum height"
                      placeholder="Catatan"
                      value={catatan}
                      onChange={(e) => setCatatan(e.target.value)}
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
                onSubmit={()=>console.log('klik')}
              >
                Save
              </Button>
              <Button
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#d84315",
                }}
                variant="contained"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </Paper>
  );
};

export default connect(null, { addProduct })(AddProduct);
