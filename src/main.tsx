import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const PALETTE = {
  WHITE: {
    MAIN: "#e0e0e0",
    GRADIENT_DARK: "#CACACA",
    GRADIENT_LIGHT: "#F0F0F0",

    SHADOW_LIGHT: "#ffffff",
    SHADOW_DARK: "#bebebe"
  },
  blue: {
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
    flat: `${PALETTE.blue.MAIN}`,
    concave: `linear-gradient(145deg, ${PALETTE.blue.GRADIENT_DARK}, ${PALETTE.blue.GRADIENT_LIGHT})`,
    convex: `linear-gradient(145deg, ${PALETTE.blue.GRADIENT_LIGHT},${PALETTE.blue.GRADIENT_DARK});`,
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
    outdent: `8px 8px 16px ${PALETTE.blue.SHADOW_DARK}, -8px -8px 16px ${PALETTE.blue.SHADOW_LIGHT}`,
    indent: `inset 8px 8px 16px ${PALETTE.blue.SHADOW_DARK}, inset -8px -8px 16px ${PALETTE.blue.SHADOW_DARK}`
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
      },
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
      },
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
  surface: { ...SURFACE }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
  </React.StrictMode >
)








