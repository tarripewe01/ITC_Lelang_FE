import { combineReducers } from "redux";

// reducer import
import customization from "./customizationReducer";
import auth from "./authReducer";
import alert from "./alertReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization,
  alert,
  auth,
});

export default reducer;
