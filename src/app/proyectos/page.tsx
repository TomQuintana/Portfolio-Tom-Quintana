'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../pageFormat/Nav.page';
import Logo from '../components/Logo';
import Footer from '../components/FooterPage';
import '../styles/proyects.css';
import '../styles/logotipo.css'

const date = new Date().getFullYear();
const author = 'Tom Quintana';

const data = [
  {
    name : 'Manejador de Comidas',
    img: '/../images/iconFood.png',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://github.com/TomQuintana/Meals-Proyect'
  },
  {
    name : 'Aplicacion de Clima',
    img: '/../images/iconFood.png',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://github.com/TomQuintana/Meals-Proyect'
  },
  {
    name : 'Pomodoro',
    img: '/../images/iconFood.png',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    path: 'https://github.com/TomQuintana/Meals-Proyect'
  }
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
        <div className='bg-sky-400 p-5 rounded-xl logotipo text-xl flex justify-center text-white'>Proyectos</div>
      </div>
      <div className='mt-12 flex justify-center'>
        <div className='grid grid-cols-1 md:flex justify-between m-5 md:m-0 proyectos gap-10 md:gap-28'>
          {data.map((element, index) => 
            <div key={index} className='w-full'>
              <div className='flex justify-center bg-sky-50 rounded-2xl'>
                <Image
                  src={element.img}
                  alt='Picture of meals proyect'
                  width={120}
                  height={300}
                  className='m-2'
                />
              </div>
              <div className='text-justify flex justify-center font-mono text-lg'>
                <h1>{element.name}</h1>
              </div>
              <div className='text-justify flex justify-center w-72'>
                <div className='m-3'>
                  <p>{element.description}</p>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='bg-violet-400 mt-4 p-5 rounded-2xl text-white hover:cursor-pointer'>
                  <Link href={element.path} >
                    Icono Git Respositorio
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

// <div className='flex justify-center'>
//             <div className='grid grid-cols-1 w-72'>
//               <div className='flex justify-center bg-sky-50 rounded-2xl'>
//                 <Image
//                   src={ '/../images/iconFood.png' }
//                   width={120}
//                   height={300}
//                   alt="Picture of the logo"
//                   className='m-2'
//                 />
//               </div>
//               <div className='text-justify flex justify-center w-72'>
//                 <div className='m-4'>
//                   <p>
//                     Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
//                   </p>
//                 </div>
//               </div>
//               <div className='bg-sky-400 text-xl flex justify-center rounded-2xl text-white mr-9 ml-9'>
//                 <Link legacyBehavior href='https://github.com/TomQuintana?tab=repositories'>
//                   <a target='_blank'>
//                     Repositorio
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
