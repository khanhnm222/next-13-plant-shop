'use client';

// react
import { useState, useEffect } from 'react';
// next
import Link from 'next/link';
// components
import Logo from './Logo';
// icons
import IconFacebook from './icons/IconFacebook';
import IconInstagram from './icons/IconInstagram';
import IconTwitter from './icons/IconTwitter';

interface FooterData {
  description: string;
}

export default function Footer() {
  // footer data
  const [footerData, setFooterData] = useState<FooterData>({
    description: '',
  });

  useEffect(() => {
   
  }, []);

  // footer
  return (
    <footer className='footer mt-20 pt-14 pb-10 bg-primary text-white'>
      <div className='wrapper flex flex-col gap-10 md:items-center'>
        <Logo white={true} />
        <div className='social-media flex flex-col gap-5 md:items-center'>
          <div className='flex gap-7'>
            <Link
              href='/products'
              title='Products'
              className='hover:text-green-500 duration-200'
            >
              Products
            </Link>
            <Link
              href='/blogs'
              title='Blogs'
              className='hover:text-green-500 duration-200'
            >
              Blogs
            </Link>
            <Link
              href='/contact'
              title='Contact'
              className='hover:text-green-500 duration-200'
            >
              Contact
            </Link>
          </div>
          <div className='flex gap-5'>
            <Link
              href='#'
              title='Facebook'
              className='hover:text-green-500 duration-200'
            >
              <IconFacebook />
            </Link>
            <Link
              href='#'
              title='Instagram'
              className='hover:text-green-500 duration-200'
            >
              <IconInstagram />
            </Link>
            <Link
              href='#'
              title='Twitter'
              className='hover:text-green-500 duration-200'
            >
              <IconTwitter />
            </Link>
          </div>
        </div>
        <div className='bottom-footer flex flex-col gap-5 md:items-center text-sm'>
          <p className='description md:text-center max-w-2xl'>
            {footerData.description}
          </p>
          <div className='credits flex flex-col md:flex-row gap-2.5 md:items-center'>
            <p className='text-gray-200'>©2023 Plant shop</p>
            <Link
              href='/'
              title='Primary Policy'
              className='text-gray-200'
            >
              Primary Policy
            </Link>
            <Link href='/' title='Terms and Conditions' className='text-gray-200'>
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
