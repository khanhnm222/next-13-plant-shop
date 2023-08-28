'use client';

// react
import { useState } from 'react';
// next
import Link from 'next/link';
// components
import Logo from '../common/Logo';
// icons
import IconAccount from '../icons/IconAccount';
import IconCart from '../icons/IconCart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOpen = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='sticky top-0 w-full bg-primary border-b border-gray-100 z-20 px-20 text-brand-white'>
      <div className='wrapper mx-auto h-16 flex items-center justify-between'>
        <Link href='/' title='Planty shop'>
          <Logo white={false} />
        </Link>
        <div className='flex items-center gap-6'>
          <ul
            className={`absolute left-0 p-5 w-full bg-primary border-b border-gray-100 z-10 duration-300 ${
              isMenuOpen
                ? 'opacity-100 top-16'
                : 'opacity-0 top-10 pointer-events-none'
            } lg:static lg:flex lg:gap-7 lg:bg-inherit lg:border-0 lg:p-0 lg:w-fit lg:opacity-100 lg:pointer-events-auto`}
          >
            <li className='nav-underline p-2.5 font-medium tracking-tighter hover:text-orange-200 duration-150 text-2xl lg:text-base border-b border-gray-100 lg:border-0'>
              <Link onClick={closeMenuOpen} href='/products' title='Products'>
                Products
              </Link>
            </li>
            <li className='nav-underline p-2.5 font-medium hover:text-orange-200 duration-150 text-2xl lg:text-base border-b border-gray-100 lg:border-0'>
              <Link onClick={closeMenuOpen} href='/blogs' title='Blogs'>
                Blogs
              </Link>
            </li>
            <li className='nav-underline p-2.5 font-medium hover:text-orange-200 duration-150 text-2xl lg:text-base'>
              <Link onClick={closeMenuOpen} href='/contact' title='Contact'>
                Contact
              </Link>
            </li>
          </ul>

          <ul className='flex items-center gap-5'>
            <li className='hover:text-orange-200 duration-150'>
              <Link href='/auth/login' title='My account'>
                <IconAccount />
              </Link>
            </li>
            <li className='hover:text-orange-200 duration-150'>
              <Link href='/cart' title='Cart'>
                <IconCart />
              </Link>
            </li>
            <li className='lg:hidden'>
              <button
                className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                onClick={handleMenuOpen}
              >
                <div className='hamburger-icon hover:text-orange-200'></div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
