import React from 'react';
import Link from 'next/link';
import '../app/styles/aboutMe.css';

const AboutMe = () => {
  return (
    <> 
      <div className='flex justify-center text-justify aboutMeQuestion '>
        <div className='grid grid-cols-1 '>
          <div className='mt-8 flex justify-start font-mono'>
            <h1 className='text-xl textUnderline'>Sobre Mi</h1>
          </div>
          <div className='flex justify-center p-1'>
            <p>Soy un apasionado del desarrollo de software, por lo que estoy en constante aprendizaje sobre nuevas tecnologías y sobre cómo generar código más limpio. Me gusta generar proyectos para solucionar problemas que surgen en la cotidianidad y poder aprender cada vez más. Cuando no me encuentro codeando suelo ver documentales, leer o salir a caminar.
            </p>
          </div>
          <div className='mt-4 mb-4'>
            Aca expando un poco mas de mi { '-> ' } 
            <Link href={'/aboutMe'}
              className='bg-orange-400 p-1 text-white rounded-2xl'
            >
              Sobre mi 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
