/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl, Grid, Paper,
  TextareaAutosize
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  BPKB, Branch,
  Category,
  Document,
  Rating, Status
} from "ui-component/SelectCustom";
import { addProduct } from "../../../store/action/productAction";
import Field from "../../../ui-component/Field";

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
  const [isActive, setIsActive] = useState("Aktif");
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
  const [mulai, setTanggalMulai] = useState("");
  const [selesai, setTanggalSelesai] = useState("");
  const [waktu_mulai, setWaktuMulai] = useState("");
  const [waktu_selesai, setWaktuSelesai] = useState("");
  const [status_lelang, setStatusLelang] = useState("");

  console.log(catatan);
  console.log(waktu_mulai)

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("cabang", cabang);
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
    formData.append("isActive", isActive);
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
    formData.append("waktu_mulai", waktu_mulai);
    formData.append("waktu_selesai", waktu_selesai);
    formData.append("status_lelang", status_lelang);
    formData.append("tanggal_selesai", mulai);
    formData.append("tanggal_mulai", selesai);
    Array.from(file).forEach((item) => {
      formData.append("product_path", item);
    });
    axios
      .post("http://localhost:8000/produk", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/ITC-Finance/products");
      })
      .catch((err) => {
        console.log(err);
      });
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
              onChange={(e) => setFile(e.target.files)}
              style={{ marginLeft: 10, marginBottom: 10 }}
            />
            <Field
              type="number"
              label="No.LOT"
              name="no_lot"
              onChange={(e) => setNoLot(e.target.value)}
            />
            <Field
              type="text"
              label="Name"
              onChange={(e) => setNamaProduk(e.target.value)}
            />
            <Field
              type="number"
              label="Price"
              onChange={(e) => setHarga(e.target.value)}
            />
            <Field
              type="text"
              label="Color"
              onChange={(e) => setWarna(e.target.value)}
            />
            <Category onChange={(e) => setKategoriProduk(e.target.value)} />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Rating
                    label="Machine"
                    // value={kondisi_mesin}
                    onChange={(e) => setKondisiMesin(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Interior"
                    // value={kondisi_interior}
                    onChange={(e) => setKondisiInterior(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Exterior"
                    // value={kondisi_exterior}
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
                      onChange={(e) => setTanggalMulai(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      onChange={(e) => setTanggalSelesai(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <p>End Auction</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      onChange={(e) => setWaktuMulai(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
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
                        onChange={(e) => setMerkProduk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Type"
                        onChange={(e) => setModelProduk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="number"
                        label="Year"
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
                        onChange={(e) => setOdometer(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={6}>
                      <Field
                        type="number"
                        label="Machine Capacity (CC)"
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
                        onChange={(e) => setTransmisi(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Frame"
                        onChange={(e) => setNoRangka(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Machine"
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
                  onChange={(e) => setNoPolisi(e.target.value)}
                />
                <Document
                  label="STNK"
                  onChange={(e) => setStnk(e.target.value)}
                />

                <p style={{ marginLeft: "10px" }}> Masa Berlaku STNK</p>
                <Field
                  type="date"
                  choose="text"
                  onChange={(e) => setExpStnk(e.target.value)}
                  styele={{}}
                />
                <BPKB label="BPKB" onChange={(e) => setBpkb(e.target.value)} />
                <Document
                  label="Faktur"
                  onChange={(e) => setFaktur(e.target.value)}
                />
                <Document
                  label="Fotocopy KTP"
                  onChange={(e) => setKtp(e.target.value)}
                />
                <Document
                  label="Kwitansi Blanko"
                  onChange={(e) => setKwitansi(e.target.value)}
                />
                <Document
                  label="Form A"
                  onChange={(e) => setFormA(e.target.value)}
                />
                <Document
                  label="SPH"
                  onChange={(e) => setSph(e.target.value)}
                />
                <Document
                  label="KEUR"
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
                  label="Status Produk"
                  onChange={(e) => setIsActive(e.target.value)}
                />
                <Status
                  label="Status Lelang"
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
