import React from 'react';
import Logo from '../components/Logo';
import Logotipo from '../components/Logotipo';
import AboutMe from '../components/AboutMe';
import ProyectButton from '../components/ProyectButton';

const img = '/logo.jpg';
const text= '¡Hola, soy desarrollador Backend con sede en Argentina!';

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:mt-10 mt-28">
      <Logo
        img={img}
      />
      <Logotipo 
        textLogotipo={text}
      />
      <div className='ml-4 md:ml-0 w-11/12 md:w-full '>
        <AboutMe />
      </div>
      <ProyectButton />
    </div>
  );
};

export default Main;
