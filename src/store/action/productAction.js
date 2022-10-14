import  axios  from "axios";
import { ADD_PRODUCT } from "./types";
import { setAlert } from "./alertAction";

export const addProduct = formData => async (dispatch) => {

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("http://localhost:8000/produk", body);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    dispatch(setAlert("Product Added", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};
