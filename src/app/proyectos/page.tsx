'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../pageFormat/Nav.page';
import Logo from '../components/Logo';
import Footer from '../components/FooterPage';
import '../styles/proyects.css';
import '../styles/logotipo.css';

const date = new Date().getFullYear();
const author = 'Tom Quintana';

const data = [
  {
    name : 'Manejador de Comidas',
    img: '/iconFood.png',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://github.com/TomQuintana/Meals-Proyect',
    bg: 'bg-pink-300'
  },
  {
    name : 'Aplicacion de Clima',
    img: '/weather.avif',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://github.com/TomQuintana/Meals-Proyect',
    bg: 'bg-sky-300'
  },
  {
    name : 'Pomodoro',
    img: '/tomato.png',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://github.com/TomQuintana/Feyndoro-Pomodoro-App',
    bg: 'bg-green-300'
  }
];

const dataFreelanceWork = [
  {
    name : 'Sitio de Abogados',
    img: 'https://img.icons8.com/bubbles/100/scales.png',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://www.estudiojcs.com.ar/',
    bg: 'bg-pink-300'
  },
];

const proyectos = () => {

  const img = '/logo.jpg';

  return (
    <>
      <Nav/>
      <div className='mt-32 md:mt-8'>
        <Logo 
          img={img} 
        />
      </div>
      <div className=' w-full flex justify-center mt-5'>
        <div className='bg-sky-400 p-5 rounded-xl logotipo flex justify-center text-white font-mono'>Proyectos</div>
      </div>
      <div className='mt-12 flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32'>
          {data.map((element, index) =>
            <div key={index} className='flex justify-center'>
              <div className='grid grid-cols-1'>
                <div className={ `flex justify-center ${element.bg} rounded-2xl `}>
                  <Image
                    src={ element.img }
                    width={120}
                    height={300}
                    alt="Picture of the logo"
                    className='m-2'
                  />
                </div>
                <div className='text-justify flex justify-center font-mono text-lg'>
                  <h1>
                    {element.name}
                  </h1>
                </div>
                <div className='text-justify flex justify-center w-72'>
                  <div className='m-4'>
                    <p>
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                    </p>
                  </div>
                </div>
                <div className='bg-violet-400 text-xl flex justify-center rounded-2xl text-white mr-9 ml-9 p-1'>
                  <Image src="/../images/gitIcon.png" alt="GitHub Icon" width={40} height={40} 
                    className='mr-1'
                  />
                  <Link legacyBehavior href={element.path}
                  >
                    <a target='_blank'
                      className='mt-2'
                    >
                      Repositorio
                    </a>
                  </Link>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
      <div className=' w-full flex justify-center mt-10'>
        <div className='bg-cyan-400 p-5 rounded-xl logotipo text-xl flex justify-center text-white font-mono'>Trabajo Freelance</div>
      </div>
      <div className='mt-12 flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32'>
          {dataFreelanceWork.map((element, index) =>
            <div key={index} className='flex justify-center'>
              <div className='grid grid-cols-1'>
                <div className={ `flex justify-center ${element.bg} rounded-2xl `}>
                  <Image
                    src={ element.img }
                    width={120}
                    height={300}
                    alt="Picture of the logo"
                    className='m-2'
                  />
                </div>
                <div className='text-justify flex justify-center font-mono text-lg'>
                  <h1>
                    {element.name}
                  </h1>
                </div>
                <div className='text-justify flex justify-center w-72'>
                  <div className='m-4'>
                    <p>
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                    </p>
                  </div>
                </div>
                <div className='bg-green-400 text-xl flex justify-center rounded-2xl text-white mr-9 ml-9 p-1'>
                  <Image src="https://img.icons8.com/plasticine/100/web.png" alt="GitHub Icon" width={35} height={35}
                    className='mr-1'
                  />
                  <Link legacyBehavior href={element.path} 
                  >
                    <a target='_blank' className='mt-1'>
                      Sitio
                    </a>
                  </Link>
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
