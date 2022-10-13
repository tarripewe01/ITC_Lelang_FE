import { combineReducers } from "redux";

// reducer import
import customization from "./customizationReducer";
import auth from "./authReducer";
import alert from "./alertReducer";
import product from "./productReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization,
  alert,
  auth,
  product
});

export default reducer;
