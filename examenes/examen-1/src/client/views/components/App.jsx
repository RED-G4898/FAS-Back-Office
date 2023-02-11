import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './header/Header.jsx';

import './../css/App.css';
import Products from "./main/products/Products.jsx";
import AddProducts from "./main/products/AddProducts.jsx";
import DeleteProducts from "./main/products/DeleteProducts.jsx";
import UpdateProducts from "./main/products/UpdateProducts.jsx";
import GetProducts from "./main/products/GetProducts.jsx";
import Sidebar from "./shared/Sidebar.jsx";
import { SidebarContextProvider } from "../../controllers/contexts/SidebarContextProvider.jsx";

const  App = () =>  {

  return (
    <>
      {/* Routing context*/}
      <BrowserRouter>
        <Header />
        <SidebarContextProvider>
          <Sidebar />
          <Routes>
            <Route path="/products" element={ <Products /> } />
            <Route path="/products/add" element={ <AddProducts /> } />
            <Route path="/products/delete" element={ <DeleteProducts /> } />
            <Route path="/products/update" element={ <UpdateProducts /> } />
            <Route path="/products/get" element={ <GetProducts /> } />
          </Routes>
        </SidebarContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App
