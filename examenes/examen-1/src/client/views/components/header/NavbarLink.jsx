import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = (props) => {
  return (
    <div className='cursor-pointer after:content-["|"] after:pl-4 last:after:content-[""] last:after:pl-0 inline-block'>
        <NavLink className='inline-block font-neue font-light text-xl not-italic transition-all duration-700 hover:border-b-2 hover:border-solid hover:border-fasgreen hover:rounded-b-lg hover:bg-slate-400 hover:px-3 hover:pb-3 hover:pt-[2vh] hover:text-slate-200 hover:-translate-y-4' to={props.linkTo}>{props.elementTitle}</NavLink>
    </div>
  )
}

export default NavbarLink