import React, { useContext } from 'react';
import { SidebarContext } from '../../../controllers/contexts/SidebarContextProvider';
import SidebarOption from './SidebarOption';

const Sidebar = (props) => {;
  const { options } = useContext(SidebarContext);

  return (
    <aside className='fixed top-[8vh] left-0 h-screen w-16 bg-[#e7e6df]'>
      {options.map(option => (
        <SidebarOption key={option.id} title={option.title} icon={option.icon} linkTo={option.linkTo} />
      ))}
    </aside>
  );
}

export default Sidebar;