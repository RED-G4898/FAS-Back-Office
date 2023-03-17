import React from "react";

import Navbar from "./Navbar.jsx";

const Header = () => {
	return (
		<header className="sticky top-0 z-[2] grid grid-cols-12 justify-center items-center bg-[#e7e6df] h-[8vh]">
			<Navbar />
		</header>
	);
};

export default Header;
