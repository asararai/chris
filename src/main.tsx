import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Box, Button } from "@mui/material";

const PALETTE = {
  WHITE: {
    MAIN: "#e0e0e0",
    GRADIENT_DARK: "#CACACA",
    GRADIENT_LIGHT: "#F0F0F0",
    SHADOW_LIGHT: "#ffffff",
    SHADOW_DARK: "#bebebe"
  },
  BLUE: {
    MAIN: "#3C00FF",
    GRADIENT_DARK: "#3600e6",
    GRADIENT_LIGHT: "#4000ff",
    SHADOW_LIGHT: "#5200ff",
    SHADOW_DARK: "#2600a1",
  }
}

const SURFACE = {
  white: {
    flat: `${PALETTE.WHITE.MAIN}`,
    concave: `linear-gradient(145deg, ${PALETTE.WHITE.GRADIENT_DARK}, ${PALETTE.WHITE.GRADIENT_LIGHT})`,
    convex: `linear-gradient(145deg, ${PALETTE.WHITE.GRADIENT_LIGHT}, ${PALETTE.WHITE.GRADIENT_DARK})`,
  },
  blue: {
    flat: `${PALETTE.BLUE.MAIN}`,
    concave: `linear-gradient(145deg, ${PALETTE.BLUE.GRADIENT_DARK}, ${PALETTE.BLUE.GRADIENT_LIGHT})`,
    convex: `linear-gradient(145deg, ${PALETTE.BLUE.GRADIENT_LIGHT},${PALETTE.BLUE.GRADIENT_DARK});`,
  }
}

const INDENTATION = {
  white: {
    flat: "none",
    outdent: `8px 8px 16px ${PALETTE.WHITE.SHADOW_DARK}, -8px -8px 16px ${PALETTE.WHITE.SHADOW_LIGHT}`,
    indent: `inset 8px 8px 16px ${PALETTE.WHITE.SHADOW_DARK}, inset -8px -8px 16px ${PALETTE.WHITE.SHADOW_DARK}`,
  },
  blue: {
    flat: "none",
    outdent: `8px 8px 16px ${PALETTE.BLUE.SHADOW_DARK}, -8px -8px 16px ${PALETTE.BLUE.SHADOW_LIGHT}`,
    indent: `inset 8px 8px 16px ${PALETTE.BLUE.SHADOW_DARK}, inset -8px -8px 16px ${PALETTE.BLUE.SHADOW_DARK}`
  }
}


export const DENTED_BOXES = {
  white: {
    outdent_flat: {
      backgroundColor: SURFACE.white.flat,
      boxShadow: INDENTATION.white.outdent
    },
    outdent_concave: {
      backgroundColor: SURFACE.white.concave,
      boxShadow: INDENTATION.white.outdent
    },
    outdent_convex: {
      backgroundColor: SURFACE.white.convex,
      boxShadow: INDENTATION.white.outdent
    },
    INDENT_flat: {
      backgroundColor: SURFACE.white.flat,
      boxShadow: INDENTATION.white.indent
    }
  },
  blue: {
    outdent_flat: {
      backgroundColor: SURFACE.blue.flat,
      boxShadow: INDENTATION.blue.outdent
    },
    outdent_concave: {
      backgroundColor: SURFACE.blue.concave,
      boxShadow: INDENTATION.blue.outdent
    },
    outdent_convex: {
      backgroundColor: SURFACE.blue.convex,
      boxShadow: INDENTATION.blue.outdent
    },
    INDENT_flat: {
      backgroundColor: SURFACE.blue.flat,
      boxShadow: INDENTATION.blue.indent
    }
  }
}


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    indentation: {
      white: {
        flat: string;
        outdent: string;
        indent: string;
      };
      blue: {
        flat: string;
        outdent: string;
        indent: string;
      }
    }
    surface: {
      white: {
        flat: string;
        concave: string;
        convex: string;
      };
      blue: {
        flat: string;
        concave: string;
        convex: string;
      }
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    indentation?: {
      white: {
        flat: string;
        outdent: string;
        indent: string;
      };
      blue: {
        flat: string;
        outdent: string;
        indent: string;
      }
    };
    surface?: {
      white: {
        flat: string;
        concave: string;
        convex: string;
      };
      blue: {
        flat: string;
        concave: string;
        convex: string;
      }
    }
  }
}

const theme = createTheme({
  status: {
    danger: "red",
  },
  indentation: { ...INDENTATION },
  surface: { ...SURFACE },
  typography: {
    fontFamily: "Rubik, sans-serif",
    fontWeightRegular:200
  },
  palette: {
    primary: {
      main: PALETTE.BLUE.MAIN
    },
    secondary:{
      main:PALETTE.WHITE.MAIN
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
  </React.StrictMode >
)



type Indentation = "indent" | "outdent" | "flat"
type Surface = "concave" | "convex" | "flat"
type ColorVariant = "white" | "blue"

interface NeuBoxProps {
  indentation?: Indentation
  surface?: Surface
  variant?: ColorVariant
  shadowColor?:ColorVariant
}

export const NeuBox = styled(Box)<any>(({ theme, indentation = "flat", surface = "flat", variant = "white", shadowColor }) => ({
  background: theme.surface[variant][surface],
  boxShadow: theme.indentation?.[shadowColor]?.[indentation] || theme.indentation?.[variant]?.[indentation],
  flexGrow: 1,
  borderRadius: 20,
  minHeight: "100%",
  boxSizing: "border-box"
}));

export const NeuButton = styled(Button)<any>(({ theme, indentation = "flat", surface = "flat", variant = "white", shadowColor  }) => ({
  background: theme.surface[variant][surface],
  boxShadow: theme.indentation?.[shadowColor]?.[indentation] || theme.indentation?.[variant]?.[indentation],
  borderRadius: 20,
  color:variant === "white" ? "blue" : "white",
  textTransform:"none"
}));


export const TopBox = styled(Box)<any>(({ theme  }) => ({
  background: "#e0e0e0",
  boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.20), -8px 5px 16px 0 rgba(255, 255, 255, 0.30)",
  borderRadius: 20,
  textTransform:"none",
  // marginTop:"calc(100vh - 200px) !important",
  marginTop:"-100px  !important",
  zIndex:9999,
  [theme.breakpoints.down("sm")]: {
    // marginTop:"calc(100vh + 30px) !important",
    marginTop:"70px !important"
  },
}));


//blue shadow 5200ff

// outdent: `8px 8px 16px ${PALETTE.WHITE.SHADOW_DARK}, -8px -8px 16px 0 rgba(255, 255, 255, 0.1),


// box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.17), -8px -8px 16px 0 rgba(255, 255, 255, 0.1);
