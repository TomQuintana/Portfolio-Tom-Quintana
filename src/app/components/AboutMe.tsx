import React from 'react';
import Link from 'next/link';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <> 
      <div className='flex justify-center text-justify aboutMeQuestion '>
        <div className='grid grid-cols-1 '>
          <div className='mt-8 flex justify-start font-mono'>
            <h1 className='text-2xl textUnderline'>Sobre Mi</h1>
          </div>
          <div className='flex justify-center p-1'>
            <p>Soy un apasionando del desarrollo de software que esta en constante aprendizaje sobre nuevas tecnologias y como generar codigo mas limpio. Me gusta generar proyectos para solucionar problemas que me surgen en la cotidianidad y poder aprender cada vez mas. Cuando no me encuentro codeando suelo ver documentales, leer o salir a caminar. 
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
