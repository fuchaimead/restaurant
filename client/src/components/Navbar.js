import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


const Navbar = ()=> (
  <Menu>
    <Menu.Item name='Home'>
    <NavLink exact to='/'> Home </NavLink>
    </Menu.Item>
    <Menu.Item name='About'>
    <NavLink to='/about'> About </NavLink>
    </Menu.Item>
    <Menu.Item name='Menu'>
    <NavLink to='/menu_items'> Menu </NavLink>
    </Menu.Item>
  </Menu> 
)

export default Navbar;