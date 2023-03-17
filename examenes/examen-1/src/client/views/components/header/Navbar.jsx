import React from "react";
import { Link } from "react-router-dom";

import NavbarLink from "./NavbarLink.jsx";

const Navbar = () => {
	return (
		<nav className="col-span-8 col-start-3 w-full flex justify-between items-center flex-nowrap gap-3">
			<h1 className="text-center font-neue text-2xl font-black text-[#1A4946] cursor-pointer">
				<Link to="/">FAS Dashboard</Link>
			</h1>
			<section className="flex justify-center items-center flex-row w-auto gap-4">
				<NavbarLink elementTitle="Inicio" linkTo="/" />
				<NavbarLink elementTitle="Productos" linkTo="/products" />
			</section>
		</nav>
	);
};

export default Navbar;
