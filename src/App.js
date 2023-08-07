import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Home from "./pages/Home";
import { ProductsData } from "./api/api";


const Layout =()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={ProductsData}></Route>  
      </Route>
   )
  );
  return (
    <div className="font-bodyFont bg-slate-300">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
