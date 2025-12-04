import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  isFormSended: false,
  selectedDoctor: null,
  selectedService: null,
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    setIsActive: (state, action) => {
      state.isActive = true;
    },
    setIsClose: (state, action) => {
      state.isActive = false;
    },
    setIsFormSended: (state) => {
      state.isFormSended = true;
    },
    setClearIsFormSended: (state) => {
      state.isFormSended = false;
    },
    setSelectedDoctor: (state, action) => {
      state.selectedHouseTitle = action.payload;
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { setIsActive, setIsClose, setIsFormSended, setClearIsFormSended, setSelectedDoctor, setSelectedService } = ModalSlice.actions;
export default ModalSlice.reducer;
