import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <> 
      <div className='flex justify-center text-justify aboutMeQuestion'>
        <div className='grid grid-cols-1 '>
          <div className='mt-12 flex justify-start'>
            <h1 className='underline text-2xl'>Sobre Mi</h1>
          </div>
          <div className='flex justify-center'>
            <p>Soy un desarrollador de Software Backend con sede en Argentina. Actualmente tengo experiencia desarrollando con Node y Typescript pero continuo en constante aprendizaje. Me encanta desarrollar porque me otorga las herramientas
              para poder generar soluciones a problemas cotidianos como por ejemplo PROYECTO MEALS y poder llevar a cabo mis ideas como por ejemplo PROYECTO POMODORO . Cuando no estoy desarrollando suelo salir a caminar,
              leer o ver documentales. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
