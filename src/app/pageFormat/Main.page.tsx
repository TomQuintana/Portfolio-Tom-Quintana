import React from 'react';
import Logo from '../../components/Logo';
import Logotipo from '../../components/Logotipo';
import AboutMe from '../../components/AboutMe';
import ProyectButton from '../../components/ProyectButton';
import data from '../data/info.json'; 
import '../styles/aboutMe.css';

const text= '¡Hola, soy desarrollador Backend con sede en Argentina!';

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:mt-10 mt-28 ">
      <Logo
        img={data.info.img}
      />
      <div className='fade-in'>
        <Logotipo 
          textLogotipo={text}
        />
      </div>
      <div className='ml-32 md:ml-0 w-11/12 md:w-full flex justify-center slide-up-element'>
        <AboutMe />
      </div>
      <div className='slide-up-element'>
        <ProyectButton
          path={'/proyectos'}
        />
      </div>
    </div>
  );
};

export default Main;
