// theme.js or theme.ts
import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ECDFCC", // e.g. MUI’s default blue
    },
    secondary: {
      main: "#9c27b0", // default purple
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    // you can customize headings, body text, etc.
  },
});

export default theme;
