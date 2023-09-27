import React from 'react';
import Navigation from '../../components/Navigation';
import '../styles/nav.css';

const data = [
  {
    name : 'Proyectos',
    path: '/proyectos'
  },
  {
    name : 'Repositorio Git',
    path: 'https://github.com/TomQuintana'
  },
  {
    name : 'Curriculum',
    path: 'https://drive.google.com/file/d/1nfoF1xUoAhQ0qiPIXfyxpvKZvw73KiZO/view?usp=sharing'
  },
  {
    name : 'Sobre Mi',
    path: '/aboutMe'
  },
];

const author = {
  name: 'Tom Quintana',
  path: '/'
};

const Nav = () => {
  return (
    <div className='w-full ml-1 md:ml-0 lg:w-full flex justify-center navBar'>
      <Navigation
        author={author}
        data={data}
      />
    </div>
  );
};

export default Nav;
