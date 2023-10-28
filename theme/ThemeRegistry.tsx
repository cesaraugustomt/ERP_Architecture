"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { defaultTheme } from "./defaultTheme";

// const themeOptions: ThemeOptions = {
//   typography: {
//     fontSize: 12,
//     fontFamily: roboto.style.fontFamily,
//   },
//   palette: {
//     background: {
//       // pink
//       default: "#f8bbd0",
//     },
//     primary: {
//       main: "#182736",
//     },
//     text: {
//       primary: "#300000",
//     },
//   },
// };

// const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
