/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { toast } from "react-toastify";
import {
  BPKB,
  Branch,
  Category,
  Document,
  Rating,
  Status,
  Transmisi,
} from "ui-component/SelectCustom";
import { addProduct } from "../../../store/action/productAction";
import Field from "../../../ui-component/Field";

import { FileUploader } from "react-drag-drop-files";

const AddProduct = () => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(state?.avatar?.url);
  const [cabang, setCabang] = useState(state?.cabang || "");
  const [nama_produk, setNamaProduk] = useState(state?.nama_produk || "");
  const [harga, setHarga] = useState(state?.harga || "");
  const [no_lot, setNoLot] = useState(state?.no_lot || "");
  const [kondisi_mesin, setKondisiMesin] = useState(state?.kondisi_mesin || "");
  const [kondisi_exterior, setKondisiExterior] = useState(
    state?.kondisi_exterior || ""
  );
  const [kondisi_interior, setKondisiInterior] = useState(
    state?.kondisi_interior || ""
  );
  const [kategori, setKategoriProduk] = useState(state?.kategori || "");
  const [merk_produk, setMerkProduk] = useState(state?.merk_produk || "");
  const [model_produk, setModelProduk] = useState(state?.model_produk || "");
  const [tahun_produk, setTahunProduk] = useState(state?.tahun_produk || "");
  const [transmisi, setTransmisi] = useState(state?.transmisi || "");
  const [no_rangka, setNoRangka] = useState(state?.no_rangka || "");
  const [no_mesin, setNoMesin] = useState(state?.no_mesin || "");
  const [kapasitas_mesin, setKapasitasMesin] = useState(
    state?.kapasitas_mesin || ""
  );
  const [odometer, setOdometer] = useState(state?.odometer || "");
  const [isActive, setIsActive] = useState(state?.status_produk || "");
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
  const [tanggal_selesai, setTanggalSelesai] = useState(
    state?.tanggal_selesai || ""
  );
  const [waktu_mulai, setWaktuMulai] = useState(state?.waktu_mulai || "");
  const [waktu_selesai, setWaktuSelesai] = useState(state?.waktu_selesai || "");
  const [imagePreview, setImagePreview] = useState(state?.avatar?.url);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("cabang", cabang);
    formData.append("nama_produk", nama_produk);
    formData.append("harga", harga);
    formData.append("no_lot", no_lot);
    formData.append("kondisi_mesin", kondisi_mesin);
    formData.append("kondisi_exterior", kondisi_exterior);
    formData.append("kondisi_interior", kondisi_interior);
    formData.append("kategori", kategori);
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
    formData.append("tanggal_selesai", tanggal_selesai);
    formData.append("tanggal_mulai", tanggal_mulai);
    formData.append("avatar", avatar);

    try {
      setLoading(true);
      await axios.post("http://192.168.1.5:9000/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Sukses Menambah Produk Baru", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      navigate("/ITC-Finance/products");
    } catch (error) {
      console.log(error);
      toast.danger("Field harus diisi semua", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/ITC-Finance/products");
  };

  const handleChange = (e) => {
    let file = e.target.files[0];

    setAvatar(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <div style={{ display: "flex", padding: 20 }}>
          <Box>{state ? <h1>Ubah Produk</h1> : <h1>Tambah Produk</h1>}</Box>
        </div>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "98%" },
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <FileUploader type="file" name="file" onChange={handleChange}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: 560,
                height: 410,
                border: "2px dashed #34aadc",
                marginLeft: 200,
                marginBottom: 20,
                // backgroundColor: "#34aadc"
              }}
            >
              {imagePreview ? (
                <img src={imagePreview} style={{ width: 550, height: 400 }} />
              ) : (
                <>
                  {/* <CloudUploadIcon fontSize="large" color="secondary" />
                  <p>Drop your file here !</p> */}
                </>
              )}
            </div>
          </FileUploader>
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "98%" },
          }}
          autoComplete="off"
        >
          <div>
            <input
              accept="image/*"
              type="file"
              name="avatar"
              id="fullWidth"
              onChange={handleChange}
              style={{ marginLeft: 10, marginBottom: 10 }}
            />
            {/* <img src={imagePreview} style={{ width: 300, height: 300 }} /> */}
            <Field
              type="number"
              label="LOT"
              value={no_lot}
              onChange={(e) => setNoLot(e.target.value)}
            />
            <Field
              type="text"
              label="Nama"
              value={nama_produk}
              onChange={(e) => setNamaProduk(e.target.value)}
            />
            <Field
              type="number"
              label="Harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
            <Field
              type="text"
              label="Warna"
              value={warna}
              onChange={(e) => setWarna(e.target.value)}
            />
            <Category
              value={kategori}
              onChange={(e) => setKategoriProduk(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Rating
                    label="Kondisi Mesin"
                    value={kondisi_mesin}
                    onChange={(e) => setKondisiMesin(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Kondisi Interior"
                    value={kondisi_interior}
                    onChange={(e) => setKondisiInterior(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Kondisi Exterior"
                    value={kondisi_exterior}
                    onChange={(e) => setKondisiExterior(e.target.value)}
                  />
                </Grid>
              </Grid>
            </FormControl>
            <Branch
              label="Cabang"
              value={cabang}
              onChange={(e) => setCabang(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <div>
                <p>Mulai Lelang</p>
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
                <p>Berakhir Lelang</p>
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
                  <h3>Spesifikasi</h3>
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
                        label="Tahun"
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
                        label="Kapasitas Mesin (CC)"
                        value={kapasitas_mesin}
                        onChange={(e) => setKapasitasMesin(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
              </FormControl>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <div>
                  <Grid container spacing={1}>
                    <Grid xs={4}>
                      <Transmisi
                        type="text"
                        label="Transmisi"
                        value={transmisi}
                        onChange={(e) => setTransmisi(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Rangka"
                        value={no_rangka}
                        onChange={(e) => setNoRangka(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Mesin"
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

                <p style={{ marginLeft: "10px" }}> Masa Berlaku STNK</p>
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
                  <h3>Tambahan</h3>
                </Box>
              </div>
              <FormControl sx={{ m: 1, width: "98%" }}>
                <Status
                  label="Status"
                  value={isActive}
                  onChange={(e) => setIsActive(e.target.value)}
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
