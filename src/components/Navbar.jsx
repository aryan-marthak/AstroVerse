import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className='navbarFont relative'>
        <img className='projectLogo absolute -top-4 left-0 w-56' src="/astroverseLogo.png" alt="" />

        
        <div className='sidebar w-[90vh] absolute right-0 hidden smx:block'>
          <ul className='flex justify-center gap-[8rem] z-10 text-white pr-12 pt-6 rounded-l-full items-center pl-12 mt-12 bg-gradient-to-r from-slate-600 via-slate-500 via-50% to-slate-600'>
            <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/">
              <li className='yello'>
              HOME
            </li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about">
              <li className='yello'>
              ABOUT
            </li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/contact">
              <li className='yello'>
              CONTACT US
            </li></NavLink>
          </ul>
        </div>

        
        <div className={`absolute top-0 right-0 h-[100vh] bg-gradient-to-r from-slate-600 via-slate-500 via-50% to-slate-600 transition-transform duration-300 smx:hidden flex flex-col ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='menuButton absolute top-[64px] right-4'>
            <img
              className='w-10 cursor-pointer'
              src={`/${openMenu ? 'close' : 'menu'}.svg`}
              alt={openMenu ? 'Close Menu' : 'Open Menu'}
              onClick={toggleMenu}
            />
          </div>

          {openMenu && (
            <ul className='text-white list-disc pt-36 gap-16 flex flex-col pl-16 pr-32 text-left'>
              <NavLink to="/"><li className='hover:font- cursor-pointer'>HOME</li></NavLink>
              <NavLink to="/about"><li className='hover:font- cursor-pointer'>ABOUT</li></NavLink>
              <NavLink to="/contact"><li className='hover:font- cursor-pointer'>CONTACT US</li></NavLink>
            </ul>
          )}
        </div>

        
        <div className={`fixed top-4 right-4 smx:hidden z-20 ${openMenu ? 'hidden' : ''}`}>
          <img
            className='w-10 cursor-pointer'
            src={`/${openMenu ? 'close' : 'menu'}.svg`}
            alt={openMenu ? 'Close Menu' : 'Open Menu'}
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;  