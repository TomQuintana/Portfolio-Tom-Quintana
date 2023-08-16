'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import '../styles/nav.css';
import '../styles/writeMachine.css';

const Navigation = ({author, data}) => {
  const pathname = usePathname();

  return (
    <div className=' grid grid-cols-1 md:flex justify-center gap-5 p-5'>
      <div className='text-xl md:text-2xl typewriter font-mono'>
        <Link href={author.path}>
          {author.name}
        </Link>
      </div>
      <div className='flex justify-center gap-4 mt-1'>
        {data.map((navBar, index) =>

          <div key={index} className='flex justify-center underline-text'>
            <div key={index} className='md:text-lg'>
              <Link href={navBar.path} >
                {navBar.name}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

