'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../pageFormat/Nav.page';
import Logo from '../../components/Logo';
import Footer from '../../components/FooterPage';
import info from '../data/info.json';
import '../styles/aboutMe.css';
import '../styles/proyects.css';
import '../styles/logotipo.css';

const date = new Date().getFullYear();
const author = 'Tom Quintana';

const data = [
  {
    name: 'Administrador de Comidas',
    img: '/iconFood.png',
    description: 'App para poder manejar las comidas que tengo, editarlas, agregar mas o borrarlas',
    path: '/proyectos/meals',
    bg: 'bg-pink-300'
  },
  {
    name: 'Aplicacion de Clima',
    img: '/weather.avif',
    description: 'App que se utliza desde la terminal para poder consultar el clima',
    path: '/proyectos/weather',
    bg: 'bg-sky-300'
  },
  {
    name: 'Pomodoro',
    img: '/tomato.png',
    description: 'Pomodoro inspirado en Richard Feynman en donde se utilizan sus frases y una foto del mismo',
    path: '/proyectos/pomodoro',
    bg: 'bg-green-300'
  },
];

const dataFreelanceWork = [
  {
    name: 'Sitio de Abogados',
    img: 'https://img.icons8.com/bubbles/100/scales.png',
    description: 'Sitio para Buffet de Abogados',
    path: '/proyectos/abogadosWork',
    bg: 'bg-pink-300'
  },
];

const proyectos = () => {
  return (
    <>
      <Nav />
      <div className='mt-32 md:mt-8'>
        <Logo
          img={info.info.img}
        />
      </div>
      <div className=' w-full flex justify-center mt-5 fade-in'>
        <div className='bg-sky-400 p-5 rounded-xl proyectosTitle flex justify-center text-white font-mono text-2xl'>Proyectos</div>
      </div>
      <div className='mt-12 flex justify-center fade-in'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 slide-up-element'>
          {data.map((element, index) =>
            <div key={index} className='flex justify-center'>
              <div className='grid grid-cols-1'>
                <div className={`flex justify-center ${element.bg} rounded-2xl hover:cursor-pointer w-full h-36`}>
                  <Link href={element.path}
                  >
                    <Image
                      src={element.img}
                      width={120}
                      height={300}
                      alt="Picture of the logo"
                    />
                  </Link>
                </div>
                <div className='text-justify flex justify-center font-mono text-lg mt-2'>
                  <h1>
                    {element.name}
                  </h1>
                </div>
                <div className='text-justify flex justify-center w-72 text-sm'>
                  <div className='m-4'>
                    <p>
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
      <div className=' w-full flex justify-center mt-10 fade-in'>
        <div className='bg-cyan-400 p-5 rounded-xl proyectosTitle flex justify-center text-white font-mono text-2xl'>Trabajo Freelance</div>
      </div>
      <div className='mt-12 flex justify-center fade-in'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
          {dataFreelanceWork.map((element, index) =>
            <div key={index} className='flex justify-center'>
              <div className='grid grid-cols-1'>
                <div className={`flex justify-center ${element.bg} rounded-2xl hover: cursor-pointer`}>
                  <Link legacyBehavior href={element.path} >
                    <Image
                      src={element.img}
                      width={120}
                      height={300}
                      alt="Picture of the logo"
                      className='m-2'
                    />
                  </Link>
                </div>
                <div className='text-justify flex justify-center font-mono text-lg'>
                  <h1>
                    {element.name}
                  </h1>
                </div>
                <div className='text-justify flex justify-center w-72'>
                  <div className='m-4'>
                    <p>
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className='mt-5'>
        <Footer
          author={author}
          year={date}
        />
      </footer>
    </>
  );
};

export default proyectos;
