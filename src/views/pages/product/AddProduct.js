/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  OutlinedInput,
  Paper,
  TextareaAutosize,
  InputLabel
} from "@mui/material";
import { Branch, Category, Document, Rating, BPKB,Status, Transmisi } from "ui-component/SelectCustom";
import { useLocation, useNavigate } from "react-router-dom";
import FieldDocument from "ui-component/FieldDocument";
import Field from "../../../ui-component/Field";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../../store/action/productAction";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const AddProduct = ({ addProduct }) => {
  const state = useLocation().state
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [cabang, setCabang] = useState(state?.cabang || "");
  const [nama_produk, setNamaProduk] = useState(state?.nama_produk || "");
  const [harga, setHarga] = useState(state?.harga || "");
  const [no_lot, setNoLot] = useState(state?.no_lot ||"");
  const [kondisi_mesin, setKondisiMesin] = useState(state?.kondisi_mesin ||"");
  const [kondisi_exterior, setKondisiExterior] = useState(state?.kondisi_exterior || "");
  const [kondisi_interior, setKondisiInterior] = useState(state?.kondisi_interior || "");
  const [kategori_produk, setKategoriProduk] = useState(state?.kategori_produk ||  "");
  const [merk_produk, setMerkProduk] = useState(state?.merk_produk || "");
  const [model_produk, setModelProduk] = useState(state?.model_produk || "");
  const [tahun_produk, setTahunProduk] = useState(state?.tahun_produk || "");
  const [transmisi, setTransmisi] = useState(state?.transmisi || "");
  const [no_rangka, setNoRangka] = useState(state?.no_rangka || "");
  const [no_mesin, setNoMesin] = useState(state?.no_mesin || "");
  const [kapasitas_mesin, setKapasitasMesin] = useState(state?.kapasitas_mesin || "");
  const [odometer, setOdometer] = useState(state?.odometer || "");
  const [isActive, setIsActive] = useState("");
  const [catatan, setCatatan] = useState(state?.catatan || "");
  const [no_polisi, setNoPolisi] = useState(state?.no_polisi || "");
  const [warna, setWarna] = useState(state?.warna || "");
  const [stnk, setStnk] = useState(state?.stnk || "");
  const [exp_stnk, setExpStnk] = useState(state?.exp_stnk || "");
  const [faktur, setFaktur] = useState(state?.faktur || "");
  const [ktp, setKtp] = useState(state?.ktp || "");
  const [kwitansi, setKwitansi] = useState(state?.kwitansi || "");
  const [formA, setFormA] = useState(state?.form_A || "");
  const [sph, setSph] = useState(state?.sph || "");
  const [keur, setKeur] = useState(state?.keur || "");
  const [bpkb, setBpkb] = useState(state?.bpkb || "");
  const [tanggal_mulai, setTanggalMulai] = useState(state?.tanggal_mulai || "");
  const [tanggal_selesai, setTanggalSelesai] = useState(state?.tanggal_selesai || "");
  const [waktu_mulai, setWaktuMulai] = useState(state?.waktu_mulai || "");
  const [waktu_selesai, setWaktuSelesai] = useState(state?.waktu_selesai || "");
  const [status_lelang, setStatusLelang] = useState(state?.status_lelang || "");



  const handleSubmit = async(e) => {
    e.preventDefault();
    let formData = new FormData()
    formData .append("cabang", cabang);
formData.append("nama_produk", nama_produk);
formData.append("harga", harga);
formData.append("no_lot", no_lot);
formData.append("kondisi_mesin", kondisi_mesin);
formData.append("kondisi_exterior", kondisi_exterior);
formData.append("kondisi_interior", kondisi_interior);
formData.append("kategori_produk", kategori_produk);
formData.append("merk_produk", merk_produk);
formData.append("model_produk", model_produk);
formData.append("tahun_produk", tahun_produk);
formData.append("transmisi", transmisi);
formData.append("no_rangka", no_rangka);
formData.append("no_mesin", no_mesin);
formData.append("kapasitas_mesin", kapasitas_mesin);
formData.append("odometer", odometer);
formData.append("isActive", "Aktif");
formData.append("catatan", catatan);
formData.append("no_polisi", no_polisi);
formData.append("warna", warna);
formData.append("stnk", stnk);
formData.append("exp_stnk", exp_stnk);
formData.append("faktur", faktur);
formData.append("ktp", ktp);
formData.append("kwitansi", kwitansi);
formData.append("form_A", formA);
formData.append("sph", sph);
formData.append("keur", keur);
formData.append("bpkb", bpkb);
formData.append("status_lelang", status_lelang);
formData.append("waktu_mulai", waktu_mulai);
formData.append("waktu_selesai", waktu_selesai);
formData.append("tanggal_selesai", tanggal_selesai);
formData.append("tanggal_mulai", tanggal_mulai);
Array.from(file).forEach(item => {
  formData.append("product_path", item)
})
  try {
    if(state){
      const res = await axios.put(`http://localhost:8000/product/${state._id}`, formData,{
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      console.log(res)
    }else{
      const res = await axios.post('http://localhost:8000/product', formData)
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }
  navigate('/ITC-Finance/products')
  };
  
  const handleCancel = (e) => {
    e.preventDefault();
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
            { state ? <h1>Edit Product</h1> :<h1>Add Product</h1>}
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
              onChange={(e) => setFile(e.target.files)}
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
              value = {nama_produk}
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
                      value={waktu_mulai}
                      onChange={(e) => setWaktuMulai(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <p>End Auction</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={tanggal_selesai}
                      onChange={(e) => setTanggalSelesai(e.target.value)}
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
                      <Transmisi
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
                <Field
                  label="No.Polisi"
                  type="text"
                  value={no_polisi}
                  onChange={(e) => setNoPolisi(e.target.value)}
                />
                <Document
                  label="STNK"
                  value={stnk}
                  onChange={(e) => setStnk(e.target.value)}
                />
                  
                  <p style={{marginLeft: '10px'}} >  Masa Berlaku STNK</p>
                <Field
                  type="date"
                  choose="text"
                  value={exp_stnk}
                  onChange={(e) => setExpStnk(e.target.value)}
                />
                <BPKB
                  label="BPKB"
                  value={bpkb}
                  onChange={(e) => setBpkb(e.target.value)}
                />
                <Document
                  label="Faktur"
                  value={faktur}
                  onChange={(e) => setFaktur(e.target.value)}
                />
                <Document
                  label="Fotocopy KTP"
                  value={ktp}
                  onChange={(e) => setKtp(e.target.value)}
                />
                <Document
                  label="Kwitansi Blanko"
                  value={kwitansi}
                  onChange={(e) => setKwitansi(e.target.value)}
                />
                <Document
                  label="Form A"
                  value={formA}
                  onChange={(e) => setFormA(e.target.value)}
                />
                <Document
                  label="SPH"
                  value={sph}
                  onChange={(e) => setSph(e.target.value)}
                />
                <Document
                  label="KEUR"
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
                <Status
                  label="Status"
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
