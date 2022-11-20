import axios from "axios";
import React from "react";

function Test() {
  const [avatar, setAvatar] = React.useState("");
  const [nama_produk, setNamaProduk] = React.useState("");
  const [harga, setHarga] = React.useState(0);

  console.log("nama_produk", nama_produk);

  const handleChange = (e) => {
    let file = e.target.files[0];

    setAvatar(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nama_produk", nama_produk);
    formData.append("harga", harga);
    formData.append("avatar", avatar);

    try {
      const { data } = await axios.post(
        "http://192.168.1.3:9000/api/test",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) {
        console.log(response.data);
      }
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        style={{ marginTop: 10, padding: 10 }}
        type="file"
        name="avatar"
        onChange={handleChange}
      />
      <input
        style={{ marginTop: 10, padding: 10 }}
        placeholder="Nama Produk"
        onChange={(e) => setNamaProduk(e.target.value)}
      />
      <input
        style={{ marginTop: 10, padding: 10 }}
        placeholder="Harga"
        onChange={(e) => setHarga(e.target.value)}
      />
      <button style={{ marginTop: 10, padding: 10 }} onClick={onSubmit}>
        submit
      </button>

      {/* <h1>avatar: {avatar}</h1>
      <h1>nama: {nama}</h1>
      <h1>harga: Rp{harga}</h1> */}
    </div>
  );
}

export default Test;
