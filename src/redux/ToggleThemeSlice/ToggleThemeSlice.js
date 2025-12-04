import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      return true; // Return the saved theme directly
    } else if (savedTheme === "light") {
      return false; // Return the saved theme directly
    }
  
    // If no saved theme, check user's system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      localStorage.setItem("theme", "dark");
      return true;
    } else {
      localStorage.setItem("theme", "light");
      return false;
    }
  };
const initialState = {
  isDarkTheme: getInitialTheme(),
};

const toggleThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("theme", state.isDarkTheme ? "dark" : "light");
    },
    setDarkTheme: (state) => {
      state.isDarkTheme = true;
      localStorage.setItem("theme", "dark");
    },
    setLightTheme: (state) => {
      state.isDarkTheme = false;
      localStorage.setItem("theme", "light");
    },
  },
});

export const { toggleTheme, setDarkTheme, setLightTheme } =
  toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
