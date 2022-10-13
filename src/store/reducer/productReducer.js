import { ADD_PRODUCT } from "store/action/types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  products: [],
  product: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    default:
      return state;
  }
}
