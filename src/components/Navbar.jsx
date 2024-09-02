import React, { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className='navbarFont relative'>
        <img className='projectLogo absolute -top-4 left-0 w-56' src="./src/assets/astroverseLogo.png" alt="" />
        <hr className='unwantedLine absolute top-[86px] left-[225px] z-10 w-[45%]' />

        {/* Main Sidebar (Always visible on larger screens) */}
        <div className='sidebar w-[45%] absolute right-0 hidden smx:block'>
          <ul className='flex justify-center z-10 text-white pr-12 pt-6 rounded-l-full items-center pl-12 mt-12 bg-gradient-to-r from-slate-600 via-slate-500 via-50% to-slate-600'>
            <li className='cursor-pointer pb-6 mx-[4rem] px-2 border-white border-b-3 hover:font-medium hover:border-border-zinc-350 transition-all'>
              HOME
            </li>
            <li className='cursor-pointer pb-6 mx-[4rem] px-2 border-transparent border-b-3 hover:font-medium hover:border-border-zinc-350 transition-all'>
              ABOUT
            </li>
            <li className='cursor-pointer pb-6 mx-[4rem] px-2 border-transparent border-b-3 hover:font-medium hover:border-border-zinc-350 transition-all'>
              CONTACT US
            </li>
          </ul>
        </div>

        {/* Responsive Sidebar (Visible on small screens) */}
        <div className={`fixed top-0 right-0 h-[100vh] bg-gradient-to-r from-slate-600 via-slate-500 via-50% to-slate-600 transition-transform duration-300 smx:hidden flex flex-col ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='menuButton absolute top-[64px] right-4'>
            <img
              className='w-10 cursor-pointer'
              src={`./src/assets/${openMenu ? 'close' : 'menu'}.svg`}
              alt={openMenu ? 'Close Menu' : 'Open Menu'}
              onClick={toggleMenu}
            />
          </div>

          {openMenu && (
            <ul className='text-white list-disc pt-36 gap-16 flex flex-col pl-16 pr-32 text-left'>
              <li className='hover:font-medium cursor-pointer'>HOME</li>
              <li className='hover:font-medium cursor-pointer'>ABOUT</li>
              <li className='hover:font-medium cursor-pointer'>CONTACT US</li>
            </ul>
          )}
        </div>

        {/* Menu Button Positioned Outside Sidebar */}
        <div className={`fixed top-4 right-4 smx:hidden z-20 ${openMenu ? 'hidden' : ''}`}>
          <img
            className='w-10 cursor-pointer'
            src={`./src/assets/${openMenu ? 'close' : 'menu'}.svg`}
            alt={openMenu ? 'Close Menu' : 'Open Menu'}
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;  