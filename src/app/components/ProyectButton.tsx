import React from 'react';
import Link from 'next/link';

interface ButtonPath {
  path: string
}

const ProyectButton: React.FC<ButtonPath> = ({path}) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-sky-400 mt-4 p-5 rounded-2xl text-white hover:cursor-pointer'>
        <Link href={path}>
          Mis Proyectos {'>'}
        </Link>
      </div>
    </div>
  );
};

export default ProyectButton;
