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
    path: 'https://drive.google.com/file/d/1mnyEk4dlkoG3y9wKQHqi1a6qWupj2dw1/view'
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
    <div className='w-10/12 ml-10 md:ml-0 lg:w-full flex justify-center navBar'>
      <Navigation
        author={author}
        data={data}
      />
    </div>
  );
};

export default Nav;
