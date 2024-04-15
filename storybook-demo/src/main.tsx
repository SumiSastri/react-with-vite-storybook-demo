import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import './index.css'

// Extend Themes
import { unionJackBrand } from './branding/union-jack/index.ts';
import { satsumasBrand } from './branding/satsumas/index.ts';

const colors= {
  brand: {
    100: "#F2F2F2",
    200: "#E6E6E6",
    600: "#666666",
    700: "#BBC7D9",
  },
}

const fonts = {
  body: "Tahoma",
  heading: "Roboto"
  }


const theme= extendTheme({ unionJackBrand, satsumasBrand, colors, fonts})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
