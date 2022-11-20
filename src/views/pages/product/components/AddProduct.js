import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextareaAutosize,
} from "@mui/material";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Status } from "ui-component/SelectCustom";
import Field from "../../../../ui-component/Field";
import {
  BPKB,
  Branch,
  Category,
  Document,
  Rating,
  Transmisi,
} from "../../../../ui-component/SelectCustom";
import { FileUploader } from "react-drag-drop-files";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddProduct = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [produk, setProduk] = useState({
    no_lot: "",
    cabang: "",
    nama_produk: "",
    harga: "",
    kategori: "",
    status_produk: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    waktu_mulai: "",
    waktu_selesai: "",
    status_lelang: "",
    kondisi_mesin: "",
    kondisi_exterior: "",
    kondisi_interior: "",
    model_produk: "",
    tahun_produk: "",
    transmisi: "",
    no_rangka: "",
    no_mesin: "",
    merk_produk: "",
    kapasitas_mesin: "",
    odometer: "",
    catatan: "",
    no_polisi: "",
    warna: "",
    stnk: "",
    exp_stnk: "",
    faktur: "",
    ktp: "",
    kwitansi: "",
    form_A: "",
    sph: "",
    keur: "",
    bpkb: "",
    file: "",
  });

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/ITC-Finance/products");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();

    formData.append("no_lot", produk.no_lot);
    formData.append("cabang", produk.cabang);
    formData.append("nama_produk", produk.nama_produk);
    formData.append("harga", produk.harga);
    formData.append("kategori", produk.kategori);
    formData.append("status_produk", produk.status_produk);
    formData.append("tanggal_mulai", produk.tanggal_mulai);
    formData.append("tanggal_selesai", produk.tanggal_selesai);
    formData.append("waktu_mulai", produk.waktu_mulai);
    formData.append("waktu_selesai", produk.waktu_selesai);
    formData.append("status_lelang", produk.status_lelang);
    formData.append("kondisi_mesin", produk.kondisi_mesin);
    formData.append("kondisi_exterior", produk.kondisi_exterior);
    formData.append("kondisi_interior", produk.kondisi_interior);
    formData.append("model_produk", produk.model_produk);
    formData.append("tahun_produk", produk.tahun_produk);
    formData.append("transmisi", produk.transmisi);
    formData.append("no_rangka", produk.no_rangka);
    formData.append("no_mesin", produk.no_mesin);
    formData.append("merk_produk", produk.merk_produk);
    formData.append("kapasitas_mesin", produk.kapasitas_mesin);
    formData.append("odometer", produk.odometer);
    formData.append("catatan", produk.catatan);
    formData.append("no_polisi", produk.no_polisi);
    formData.append("warna", produk.warna);
    formData.append("stnk", produk.stnk);
    formData.append("exp_stnk", produk.exp_stnk);
    formData.append("faktur", produk.faktur);
    formData.append("ktp", produk.ktp);
    formData.append("kwitansi", produk.kwitansi);
    formData.append("form_A", produk.form_A);
    formData.append("sph", produk.sph);
    formData.append("keur", produk.keur);
    formData.append("bpkb", produk.bpkb);
    Array.from(produk.file).forEach((item) => {
      formData.append("product_path", item);
    });
    try {
      await axios.post(
        "https://itc-finance.herokuapp.com/api/product/",
        formData
      );
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
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <div style={{ display: "flex", padding: 20 }}>
          <Box
            style={{
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
              flex: 1,
              marginBottom: 70,
              marginTop: 30,
            }}
          >
            TAMBAH PRODUK BARU
          </Box>
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
          <FileUploader>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: 350,
                height: 350,
                border: "2px dashed #5e35b1",
                marginLeft: 300,
                marginBottom: 20,
              }}
            >
              <CloudUploadIcon fontSize="large" color="secondary" />
              <p>Drop your file here !</p>
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
            {/* <input
              accept="image/*"
              multiple
              type="file"
              id="fullWidth"
              onChange={(e) => setProduk.file(e.target.files)}
              style={{ marginLeft: 10, marginBottom: 10 }}
            /> */}
            <Field
              type="number"
              label="LOT"
              value={produk.no_lot}
              onChange={(e) => setProduk.no_lot(e.target.value)}
            />
            <Field
              type="text"
              label="Nama"
              value={produk.nama_produk}
              onChange={(e) => setProduk.nama_produk(e.target.value)}
            />
            <Field
              type="number"
              label="Harga"
              value={produk.harga}
              onChange={(e) => setProduk.harga(e.target.value)}
            />
            <Field
              type="text"
              label="Warna"
              value={produk.warna}
              onChange={(e) => setProduk.warna(e.target.value)}
            />
            <Category
              value={produk.kategori}
              onChange={(e) => setProduk.kategori(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <Grid container spacing={1}>
                <Grid xs={4}>
                  <Rating
                    label="Kondisi Mesin"
                    value={produk.kondisi_mesin}
                    onChange={(e) => setProduk.kondisi_mesin(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Kondisi Interior"
                    value={produk.kondisi_interior}
                    onChange={(e) => setProduk.kondisi_interior(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Rating
                    label="Kondisi Exterior"
                    value={produk.kondisi_exterior}
                    onChange={(e) => setProduk.kondisi_exterior(e.target.value)}
                  />
                </Grid>
              </Grid>
            </FormControl>
            <Branch
              label="Cabang"
              value={produk.cabang}
              onChange={(e) => setProduk.cabang(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: "98%" }}>
              <div>
                <p>Mulai Lelang</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={produk.tanggal_mulai}
                      onChange={(e) => setProduk.tanggal_mulai(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      value={produk.waktu_mulai}
                      onChange={(e) => setProduk.waktu_mulai(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <p>Berakhir Lelang</p>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Field
                      type="date"
                      value={produk.tanggal_selesai}
                      onChange={(e) =>
                        setProduk.tanggal_selesai(e.target.value)
                      }
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Field
                      type="time"
                      value={produk.waktu_selesai}
                      onChange={(e) => setProduk.waktu_selesai(e.target.value)}
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
                        value={produk.merk_produk}
                        onChange={(e) => setProduk.merk_produk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="Type"
                        value={produk.model_produk}
                        onChange={(e) => setProduk.model_produk(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="number"
                        label="Tahun"
                        value={produk.tahun_produk}
                        onChange={(e) => setProduk.tahun_produk(e.target.value)}
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
                        value={produk.odometer}
                        onChange={(e) => setProduk.odometer(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={6}>
                      <Field
                        type="number"
                        label="Kapasitas Mesin (CC)"
                        value={produk.kapasitas_mesin}
                        onChange={(e) =>
                          setProduk.kapasitas_mesin(e.target.value)
                        }
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
                        value={produk.transmisi}
                        onChange={(e) => setProduk.transmisi(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Rangka"
                        value={produk.no_rangka}
                        onChange={(e) => setProduk.no_rangka(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Field
                        type="text"
                        label="No. Mesin"
                        value={produk.no_mesin}
                        onChange={(e) => setProduk.no_mesin(e.target.value)}
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
                  value={produk.no_polisi}
                  onChange={(e) => setProduk.no_polisi(e.target.value)}
                />
                <Document
                  label="STNK"
                  value={produk.stnk}
                  onChange={(e) => setProduk.stnk(e.target.value)}
                />

                <p style={{ marginLeft: "10px" }}> Masa Berlaku STNK</p>
                <Field
                  type="date"
                  choose="text"
                  value={produk.exp_stnk}
                  onChange={(e) => setProduk.exp_stnk(e.target.value)}
                />
                <BPKB
                  label="BPKB"
                  value={produk.bpkb}
                  onChange={(e) => setProduk.bpkb(e.target.value)}
                />
                <Document
                  label="Faktur"
                  value={produk.faktur}
                  onChange={(e) => setProduk.faktur(e.target.value)}
                />
                <Document
                  label="Fotocopy KTP"
                  value={produk.ktp}
                  onChange={(e) => setProduk.ktp(e.target.value)}
                />
                <Document
                  label="Kwitansi Blanko"
                  value={produk.kwitansi}
                  onChange={(e) => setProduk.kwitansi(e.target.value)}
                />
                <Document
                  label="Form A"
                  value={produk.form_A}
                  onChange={(e) => setProduk.form_A(e.target.value)}
                />
                <Document
                  label="SPH"
                  value={produk.sph}
                  onChange={(e) => setProduk.sph(e.target.value)}
                />
                <Document
                  label="KEUR"
                  value={produk.keur}
                  onChange={(e) => setProduk.keur(e.target.value)}
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
                  value={produk.status_produk}
                  onChange={(e) => setProduk.status_produk(e.target.value)}
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
                      value={produk.catatan}
                      onChange={(e) => setProduk.catatan(e.target.value)}
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
                {loading ? "Loading..." : "Simpan"}
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

export default AddProduct;
