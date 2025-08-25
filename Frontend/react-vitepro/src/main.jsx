import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import SignUp from './routes/sign-up/SignUp.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme("dark")}>
      <CssBaseline />
      <SignUp />
    </ThemeProvider>
  </StrictMode>,
)
