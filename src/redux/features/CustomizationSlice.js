import { createSlice } from "@reduxjs/toolkit";
import config from "config";

export const SET_MENU = "@customization/SET_MENU";
export const MENU_TOGGLE = "@customization/MENU_TOGGLE";
export const MENU_OPEN = "@customization/MENU_OPEN";
export const SET_FONT_FAMILY = "@customization/SET_FONT_FAMILY";
export const SET_BORDER_RADIUS = "@customization/SET_BORDER_RADIUS";

let id;
const CustomizationSlice = createSlice({
  name: "customization",
  initialState: {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
  },
  reducers: {
    setMenu: (state, action) => {
      state.opened = action.opened;
    },
    // menuToggle: (state) => {
    //   state.opened = !state.opened;
    // },
    menuOpen: (state, action) => {
      id = action.id;
      state.isOpen = [id];
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.fontFamily;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.borderRadius;
    },
  },
});

export const { setMenu, menuOpen, setFontFamily, setBorderRadius } =
  CustomizationSlice.actions;

export default CustomizationSlice.reducer;
