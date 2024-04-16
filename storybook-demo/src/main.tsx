import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// Chakra styling and extended themes
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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

// components for routing
import App from './App.tsx'
import RootLayout from './layouts/RootLayout'
// data fetching with Chakra and react router
import Create from './components/Create.tsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile'
// chakra demos
import ChakraBasics from './components/ChakraBasics.tsx';
import ListsDemo from './components/ListsDemo.tsx';
import FlexLayoutDemo from './components/FlexLayoutDemo.tsx';
import GridLayoutDemo from './components/GridLayoutDemo.tsx';
import CardDemo from './components/CardDemo.tsx';
import FormDemo from './components/FormDemo.tsx';

// data fetching - data passed as a prop to the component via react router
import { toDosLoader } from './apis/queries/toDosLoader.ts';
import { submitNewToDo } from './apis/mutations/submitNewToDo.ts';

// router and routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route path ='chakra-basics-demo' element={<ChakraBasics/>}/>
      <Route path ='chakra-lists-demo' element={<ListsDemo/>}/>
      <Route path ='chakra-flexlayout-demo' element={<FlexLayoutDemo/>}/>
      <Route path ='chakra-gridlayout-demo' element={<GridLayoutDemo/>}/>
      <Route path ='chakra-card-demo' element={<CardDemo/>}/>
      <Route path ='chakra-form-demo' element={<FormDemo/>}/>
      <Route index element={<Dashboard />} loader={toDosLoader}  />
      <Route path="create" element={<Create />}  action={submitNewToDo} />
      <Route path="profile" element={<Profile />} />
    </Route>
    )
  )


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <ChakraProvider theme={theme}>
    <App />
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
