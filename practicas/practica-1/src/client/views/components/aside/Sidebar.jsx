import React from 'react';
import { CSidebar, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CBadge, CNavGroup, CSidebarToggler } from '@coreui/react';

const Sidebar = () => {
  return (
    <CSidebar className='h-full'>
      <CSidebarBrand>FAS Dashboard</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="/products">
          Productos
        </CNavItem>
        <CNavItem href="#">
          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#">
            Nav dropdown item
          </CNavItem>
          <CNavItem href="#">
            Nav dropdown item
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler onClick={() => setVisible(!visible)} />
    </CSidebar>
  );
}

export default Sidebar;