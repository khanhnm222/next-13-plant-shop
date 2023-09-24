'use client';

// react
import { useState, useEffect } from 'react';
// next
import Link from 'next/link';
// components
import Logo from '../common/Logo';
// icons
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import IconTwitter from '../icons/IconTwitter';
import Image from 'next/image';

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
    <footer className='footer mt-20 pt-14 bg-primary text-white'>
      <div className='wrapper flex flex-col gap-10 md:items-center'>
        <Logo white={true} />
        <div className='social-media flex flex-col gap-5 md:items-center'>
          <div className='flex gap-7'>
            <Link
              href='/products'
              title='Products'
              className='hover:text-brand-beige duration-200'
            >
              Products
            </Link>
            <Link
              href='/blogs'
              title='Blogs'
              className='hover:text-brand-beige duration-200'
            >
              Blogs
            </Link>
            <Link
              href='/contact'
              title='Contact'
              className='hover:text-brand-beige duration-200'
            >
              Contact
            </Link>
          </div>
          <div className='flex gap-5'>
            <Link
              href='#'
              title='Facebook'
              className='hover:text-brand-beige duration-200'
            >
              <IconFacebook />
            </Link>
            <Link
              href='#'
              title='Instagram'
              className='hover:text-brand-beige duration-200'
            >
              <IconInstagram />
            </Link>
            <Link
              href='#'
              title='Twitter'
              className='hover:text-brand-beige duration-200'
            >
              <IconTwitter />
            </Link>
          </div>
        </div>
        <div className='bottom-footer flex flex-col gap-5 md:items-center text-sm'>
          <p className='description md:text-center max-w-2xl'>
            {footerData.description}
          </p>
          
        </div>
      </div>
      <div className="bg-primary py-4">
        <div className="container flex items-center justify-between">
          <div className='credits ml-20 flex flex-col md:flex-row gap-2.5 md:items-center text-sm'>
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
            <div>
              <Image src="/payment_methods.png" alt="methods" width={300} height={20} />
            </div>
        </div>
    </div>
    </footer>
  );
}
