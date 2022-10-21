import { Global, css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createTheme({
  palette: {
    primary: {
      warning: "#C1C1C6",
      light: "#f5f5f7",
      secondary: "#333333",
      main: "#000",
    },
    secondary: {
      main: "#f56300",
      second: "#bf4800",
      light: "#f2f2f2",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 833,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const CustomTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ThemeContext}>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};
