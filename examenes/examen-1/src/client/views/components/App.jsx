/**
 *
 */
/**
 * Author: RED
 *
 *
 */

// External and main dependencies (Dependencias principales y externas):
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// React app components (Componentes de react para la aplicación):
import Header from "./header/Header.jsx";
import Products from "./main/products/Products.jsx";
import AddProducts from "./main/products/AddProducts.jsx";
import DeleteProducts from "./main/products/DeleteProducts.jsx";
import UpdateProducts from "./main/products/UpdateProducts.jsx";
import GetProducts from "./main/products/GetProducts.jsx";
import Sidebar from "./shared/Sidebar.jsx";
import { SidebarContextProvider } from "../../controllers/contexts/SidebarContextProvider.jsx";

// Styles (estilos):
import "./../css/App.css";

// React main component definition (Definición del componente principal de React):
const App = () => {
	return (
		<>
			{/* Routing context (Contexto de rutas) */}
			<BrowserRouter>
				{/* SideBar context to handle sidebar options according to opened section. (Contexto del sidebar para gestionar las opciones del sidebar de acuerdo a la sección activa)*/}
				<SidebarContextProvider>
					<Sidebar />
					<Routes>
						<Route path="/products" element={<Products />} />
						<Route path="/products/add" element={<AddProducts />} />
						<Route path="/products/delete" element={<DeleteProducts />} />
						<Route path="/products/update" element={<UpdateProducts />} />
						<Route path="/products/get" element={<GetProducts />} />
					</Routes>
				</SidebarContextProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
