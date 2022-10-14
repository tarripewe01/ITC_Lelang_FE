/* eslint-disable no-use-before-define */
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

  // const [product_path, setProductPath] = useState(null);
  // const [no_lot, setNoLot] = useState("");
  // const [nama_produk, setNamaProduk] = useState("");
  // const [harga, setHarga] = useState("");
  // const [warna, setWarna] = useState("");
  // const [kondisi_mesin, setKondisiMesin] = useState(null);
  // const [kondisi_interior, setKondisiInterior] = useState(null);
  // const [kondisi_exterior, setKondisiExterior] = useState(null);
  // const [cabang, setCabang] = useState(null);
  // const [kategori_produk, setCategory] = useState(null);
  // const [tanggal_mulai, setTanggalMulai] = useState(Date.now());
  // const [tanggal_selesai, setTanggalSelesai] = useState(Date.now());
  // const [waktu_mulai, setWaktuMulai] = useState(null);
  // const [waktu_selesai, setWaktuSelesai ]= useState(null);

  // const [merk_produk, setMerk] = useState("");
  // const [model_produk, setModel] = useState("");
  // const [tahun_produk, setTahun] = useState("");
  // const [fuel, setFuel] = useState("");
  // const [transmisi, setTransmisi] = useState("");
  // const [odometer, setOdometer] = useState("");
  // const [kapasitas_mesin, setKapasitasMesin] = useState("");
  // const [no_rangka, setNoRangka] = useState("");
  // const [no_mesin, setNoMesin] = useState("");
  // const [no_polisi, setNoPolisi] = useState("");
  // const [stnk, setStnk] = useState("");
  // const [bpkb, setBpkb] = useState("");
  // const [exp_stnk, setExpStnk] = useState("");
  // const [faktur, setFaktur] = useState("");
  // const [ktp, setKtp] = useState("");
  // const [kwitansi, setKwitansi] = useState("");
  // const [formA, setFormA] = useState("");
  // const [sph, setSph] = useState("");
  // const [keur, setKeur] = useState("");
  // const [status_lelang, setStatusLelang] = useState(null);
  // const [catatan, setCatatan] = useState("");
  // const [isActive, setIsActive] = useState(null);
  const [file, setFile] = useState("");
  const [cabang, setCabang] = useState("");
  const [nama_produk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [no_lot, setNoLot] = useState("");
  const [kondisi_mesin, setKondisiMesin] = useState("");
  const [kondisi_exterior, setKondisiExterior] = useState("");
  const [kondisi_interior, setKondisiInterior] = useState("");
  const [kategori_produk, setKategoriProduk] = useState("");
  const [merk_produk, setMerkProduk] = useState("");
  const [model_produk, setModelProduk] = useState("");
  const [tahun_produk, setTahunProduk] = useState("");
  const [transmisi, setTransmisi] = useState("");
  const [no_rangka, setNoRangka] = useState("");
  const [no_mesin, setNoMesin] = useState("");
  const [kapasitas_mesin, setKapasitasMesin] = useState("");
  const [odometer, setOdometer] = useState("");
  const [isActive, setIsActive] = useState("");
  const [catatan, setCatatan] = useState("");
  const [no_polisi, setNoPolisi] = useState("");
  const [warna, setWarna] = useState("");
  const [stnk, setStnk] = useState("");
  const [exp_stnk, setExpStnk] = useState("");
  const [faktur, setFaktur] = useState("");
  const [ktp, setKtp] = useState("");
  const [kwitansi, setKwitansi] = useState("");
  const [formA, setFormA] = useState("");
  const [sph, setSph] = useState("");
  const [keur, setKeur] = useState("");
  const [bpkb, setBpkb] = useState("");
  const [tanggal_mulai, setTanggalMulai] = useState("");
  const [tanggal_selesai, setTanggalSelesai] = useState("");
  const [waktu_mulai, setWaktuMulai] = useState("");
  const [waktu_selesai, setWaktuSelesai] = useState("");
  const [status_lelang, setStatusLelang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo_path", file);
    console.log(file);
    // const data = {
    //   product_path,
    //   cabang,
    //   nama_produk,
    //   harga,
    //   no_lot,
    //   kondisi_mesin,
    //   kondisi_exterior,
    //   kondisi_interior,
    //   kategori_produk,
    //   merk_produk,
    //   model_produk,
    //   tahun_produk,
    //   transmisi,
    //   no_rangka,
    //   no_mesin,
    //   kapasitas_mesin,
    //   odometer,
    //   isActive,
    //   catatan,
    //   no_polisi,
    //   warna,
    //   stnk,
    //   exp_stnk,
    //   faktur,
    //   ktp,
    //   kwitansi,
    //   formA,
    //   sph,
    //   keur,
    //   bpkb,
    //   tanggal_mulai,
    //   tanggal_selesai,
    //   waktu_mulai,
    //   waktu_selesai,
    //   status_lelang,
    // };
    // addProduct(data);
    // addProduct(data);
    // clearForm();
    // navigate("/ITC-Finance/products");
    console.log("klik");
  };
  
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/ITC-Finance/products");
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile(file);
    console.log(file);
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
          onSubmit={() => console.log("klik")}
        >
          <div>
            <input
              accept="image/*"
              multiple
              type="file"
              id="fullWidth"
              onChange={handleFile}
              style={{ marginLeft: 10, marginBottom: 10 }}
            />
            <Field
              type="text"
              label="No.LOT"
              value={no_lot}
              onChange={(e) => setNoLot(e.target.value)}
            />
            <Field
              type="text"
              label="Name"
              value={nama_produk}
              onChange={(e) => setNamaProduk(e.target.value)}
            />
            <Field
              type="text"
              label="Price"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
            <Field
              type="text"
              label="Color"
              value={warna}
              onChange={(e) => setWarna(e.target.value)}
            />
            <Category
              value={kategori_produk}
              onChange={(e) => setKategoriProduk(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Rating
                    label="Machine"
                    value={kondisi_mesin}
                    onChange={(e) => setKondisiMesin(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Interior"
                    value={kondisi_interior}
                    onChange={(e) => setKondisiInterior(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Exterior"
                    value={kondisi_exterior}
                    onChange={(e) => setKondisiExterior(e.target.value)}
                  />
                </Grid>
              </Grid>
            </FormControl>
            <Branch
              label="Branch"
              value={cabang}
              onChange={(e) => setCabang(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <div>
                <p>Start Auction</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={tanggal_mulai}
                      onChange={(e) => setTanggalMulai(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      value={tanggal_selesai}
                      onChange={(e) => setTanggalSelesai(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <p>End Auction</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={waktu_mulai}
                      onChange={(e) => setWaktuMulai(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      value={waktu_selesai}
                      onChange={(e) => setWaktuSelesai(e.target.value)}
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
                        value={merk_produk}
                        onChange={(e) => setMerkProduk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Type"
                        value={model_produk}
                        onChange={(e) => setModelProduk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="number"
                        label="Year"
                        value={tahun_produk}
                        onChange={(e) => setTahunProduk(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
              </FormControl>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <div>
                  <Grid container spacing={1}>
                    <Grid xs={6}>
                      <Field
                        type="number"
                        label="Odometer (KM)"
                        value={odometer}
                        onChange={(e) => setOdometer(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={6}>
                      <Field
                        type="number"
                        label="Machine Capacity (CC)"
                        value={kapasitas_mesin}
                        onChange={(e) => setKapasitasMesin(e.target.value)}
                      />
                    </Grid>
                    {/* <Grid xs={4}>
                      <Field
                        type="text"
                        label="Fuel"
                        value={fuel}
                        onChange={onChange}
                      />
                    </Grid> */}
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
                        value={transmisi}
                        onChange={(e) => setTransmisi(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Frame"
                        value={no_rangka}
                        onChange={(e) => setNoRangka(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Machine"
                        value={no_mesin}
                        onChange={(e) => setNoMesin(e.target.value)}
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
                  value={no_polisi}
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
                  value={exp_stnk}
                  onChange={(e) => setExpStnk(e.target.value)}
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
                  value={ktp}
                  onChange={(e) => setKtp(e.target.value)}
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
                  value={status_lelang}
                  onChange={(e) => setStatusLelang(e.target.value)}
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
                onClick={handleSubmit}
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
