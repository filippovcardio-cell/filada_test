import { configureStore } from "@reduxjs/toolkit";
import BurgerSlice from "./BurgerSlice/BurgerSlice";
import ModalSlice from "./ModalSlice/ModalSlice";
import ToggleThemeSlice from "./ToggleThemeSlice/ToggleThemeSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice,
    theme: ToggleThemeSlice,
    burger: BurgerSlice,
  },
});

export default store;
