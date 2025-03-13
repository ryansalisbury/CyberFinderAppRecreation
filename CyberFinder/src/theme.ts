// theme.js or theme.ts
import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
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
  // You can also override component defaults here
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Default (unfocused) outline
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3C3D37", // White
          },
          // Hover state
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          // Focused state
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
        input: {
          color: "#fff",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Unfocused label color
          color: "#bdbdbd",

          // If you also want a different color when the label is focused or hovered:
          "&.Mui-focused": {
            color: "#fff",
          },
          "&:hover": {
            color: "#f0f0f0",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#f5f5f5", // e.g., white-ish
        },
      },
    },
  },
});

export default theme;
