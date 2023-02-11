import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarOption = (props) => {
  return (
    <NavLink className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-[#1A4946] text-green-500 hover:text-whate rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group' to={props.linkTo}>
        {props.icon}
        <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>{props.title}</span>
    </NavLink>
  );
}

export default SidebarOption;