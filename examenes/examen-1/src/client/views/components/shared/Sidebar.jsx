import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../../../controllers/contexts/SidebarContextProvider";

import SidebarOption from "./SidebarOption";

import { AiFillMedicineBox } from "react-icons/ai";

const Sidebar = () => {
	const { options } = useContext(SidebarContext);

	return (
		<aside className="fixed top-0 left-0 h-screen w-64 bg-[#e7e6df] p-4">
			<h1 className="text-center font-neue text-2xl font-black text-[#1A4946] cursor-pointer">
				<Link to="/">FAS Dashboard</Link>
			</h1>
			<SidebarOption title="Productos" icon={<AiFillMedicineBox />} linkTo="/products" />
			<hr className="border-solid border-[1.5px] border-black w-1/2 mx-auto" />
			{options.map((option) => (
				<SidebarOption key={option.id} title={option.title} icon={option.icon} linkTo={option.linkTo} />
			))}
		</aside>
	);
};

export default Sidebar;
