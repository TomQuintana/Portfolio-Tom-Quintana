import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/nav.css';

const data = [
  {
    name : 'Proyectos',
    img: 'https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-portfolio-user-interface-vol-3-prettycons-lineal-prettycons-4.png',
    path: '/proyectos'
  },
  {
    name : 'Repositorio Git',
    img: 'https://img.icons8.com/small/32/github.png',
    path: 'https://github.com/TomQuintana'
  },
  {
    name : 'Curriculum',
    img: 'https://img.icons8.com/ios/50/000000/resume.png',
    path: 'https://drive.google.com/file/d/1mnyEk4dlkoG3y9wKQHqi1a6qWupj2dw1/view'
  },
  {
    name : 'Sobre Mi',
    img: 'https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-portfolio-user-interface-vol-3-prettycons-lineal-prettycons-4.png',
    path: '/proyectos'
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
