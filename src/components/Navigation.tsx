'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../app/styles/nav.css';
import '../app/styles/writeMachine.css';

interface Author {
  author: {
    name: string,
    path: string
  },
  data: Array<{
    name: string,
    path: string
  }>
}

const Navigation: React.FC<Author> = ({author, data}) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.theme = next ? 'dark' : 'light';
  };

  return (
    <div className=' grid grid-cols-1 md:flex justify-center gap-5 p-5'>
      <div className='text-xl md:text-2xl typewriter font-mono'>
        <Link href={author.path}>
          {author.name}
        </Link>
      </div>
      <div className='flex justify-center gap-4 mt-1 navFontSize'>
        {data.map((navBar, index: number) =>
          <div key={index} className='flex justify-center underline-text'>
            <div key={index} className=''>
              <Link href={navBar.path} >
                {navBar.name}
              </Link>
            </div>
          </div>
        )}
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className='flex justify-center underline-text'
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
