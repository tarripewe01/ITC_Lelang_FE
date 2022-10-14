import { axios } from "axios";

export const addProduct = (data) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8000/produk", data);
  } catch (error) {
    throw error;
  }
};
