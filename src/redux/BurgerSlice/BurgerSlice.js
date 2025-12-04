import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBurgerActive: false,
};

const BurgerSlice = createSlice({
  name: "Burger",
  initialState,
  reducers: {
    setBurgerIsActive: (state, action) => {
      state.isBurgerActive = true;
    },
    setBurgerIsClose: (state, action) => {
      state.isBurgerActive = false;
    },
  },
});

export const { setBurgerIsActive, setBurgerIsClose } = BurgerSlice.actions;
export default BurgerSlice.reducer;
