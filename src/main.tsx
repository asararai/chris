import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const TEST_CSS = {
  border: "3px solid red",
  backgroundColor: "green",
  borderRadius: 2
}




declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    }; testCss: {
      border: string,
      backgroundColor: string,
      borderRadius: number
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    testCss: {
      border: string,
      backgroundColor: string,
      borderRadius: number
    }
  }
}

const theme = createTheme({
  status: {
    danger: "red",
  },
  testCss: {
    ...TEST_CSS
  }

});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
  </React.StrictMode >
)