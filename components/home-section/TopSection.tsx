'use client';

import Link from 'next/link';
// react
import { useState, useEffect } from 'react';
import Button from '../button';
// next
// icons
import IconArrowRight from '../icons/IconArrowRight';

interface ConfiguratorSectionData {
  title: string;
  description: string;
}

export default function TopSection() {
  // data
  const [configuratorSectionData, setConfiguratorSectionData] =
    useState<ConfiguratorSectionData>({
      title: 'Life with Plant',
      description: 'Enjoy your life!',
    });

  // styles
  const ConfiguratorSectionStyles = {
    background:
      'linear-gradient(135deg, #16A34A 0%, rgba(22, 163, 74, 0.00) 100%)',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#16A34A',
  };

  // section
  return (
    <section className='px-2.5 md:py-10' id='KonfiguratorSokow'>
      <div
        className='max-w-[1360px] mx-auto rounded-3xl lg:flex'
        style={ConfiguratorSectionStyles}
      >
        <div className='px-5 py-10 w-full md:p-20'>
          <h3 className='mb-5 text-3xl md:text-5xl font-medium text-white'>
            {configuratorSectionData.title}
          </h3>
          <p className='mb-10 text-white'>
            {configuratorSectionData.description}
          </p>
          <Link href='/konfigurator' title='Stwórz swój sok'>
            <Button
              icon='right'
              size='large'
              variant='secondary'
              label='Stwórz swój sok'
            >
              <IconArrowRight />
            </Button>
          </Link>
        </div>
        <img
          className='w-full max-h-80 object-cover lg:max-w-lg lg:max-h-none 2xl:scale-105
          rounded-tr-none rounded-tl-none rounded-br-3xl rounded-bl-3xl
          lg:rounded-tr-3xl lg:rounded-tl-none lg:rounded-br-3xl lg:rounded-bl-none
          2xl:rounded-tr-3xl 2xl:rounded-tl-3xl 2xl:rounded-br-3xl 2xl:rounded-bl-3xl
          '
          src='./configurator-image.png'
          alt='Konfigurator soków'
        />
      </div>
    </section>
  );
}
