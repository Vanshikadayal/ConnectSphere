import { createTheme } from "@mui/material";



const PRIMARY_BLUE = "#1E90FF";
const SECONDARY_BLUE = "#1976d2";
const DARK_BG = "#0A0F1C";
const DARK_CARD = "#172136ff";
const LIGHT_BG = "#ffffff";
const LIGHT_CARD = "#f8f9fa";
const TEXT_DARK = "#0A0F1C";
const TEXT_GRAY = "#a0aec0";

const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: PRIMARY_BLUE,
      },
      secondary: {
        main: SECONDARY_BLUE,
      },
      background: {
        default: mode === "light" ? LIGHT_BG : DARK_BG,
        paper: mode === "light" ? LIGHT_CARD : DARK_CARD,
      },
      text: {
        primary: mode === "light" ? TEXT_DARK : "#ffffff",
        secondary: mode === "light" ? "#555555" : TEXT_GRAY,
      },
    },
    typography: {
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  });

export default theme;
