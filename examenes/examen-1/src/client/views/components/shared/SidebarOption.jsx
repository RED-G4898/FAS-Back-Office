import React from "react";
import { NavLink } from "react-router-dom";

const SidebarOption = (props) => {
	return (
		<div className="hover:border-solid hover:border-2 hover:border-b-black  transition-all duration-100">
			<NavLink className="relative flex items-center justify-center w-32 gap-2 mt-2 mb-2 mx-auto text-emerald-800 hover:text-whate ease-linear cursor-pointer group" to={props.linkTo}>
			{props.icon}
			<p>{props.title}</p>
			{/* <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">{props.title}</span> */}
		</NavLink>
		</div>
	);
};

export default SidebarOption;
