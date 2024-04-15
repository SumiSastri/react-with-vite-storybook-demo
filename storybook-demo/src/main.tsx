import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import './index.css'
// components
import App from './App.tsx'
import Create from './components/Create.tsx'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import RootLayout from './layouts/RootLayout'

  // router and routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
<Route path ='chakra-basics-demo' element={<ChakraBasics/>}/>
<Route path ='chakra-lists-demo' element={<ListsDemo/>}/>
<Route path ='chakra-checkbox-demo' element={<CheckboxDemo/>}/>
<Route path ='chakra-flexlayout-demo' element={<FlexLayoutDemo/>}/>
    </Route>
    )
  )

// Extend Themes
import { unionJackBrand } from './branding/union-jack/index.ts';
import { satsumasBrand } from './branding/satsumas/index.ts';
import ChakraBasics from './components/ChakraBasics.tsx';
import ListsDemo from './components/ListsDemo.tsx';
import CheckboxDemo from './components/CheckboxDemo.tsx';
import FlexLayoutDemo from './components/FlexLayoutDemo.tsx';

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
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
