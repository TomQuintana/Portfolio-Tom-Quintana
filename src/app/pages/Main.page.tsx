import React from 'react';
import Logo from '../components/Logo';
import Logotipo from '../components/Logotipo';
import AboutMe from '../components/AboutMe';
import ProyectButton from '../components/ProyectButton';

const img = '/logo.jpg';
const text= '¡Hola, soy desarrollador Backend con sede en Argentina!';

const Main = () => {
  return (
    <div className="grid grid-cols-1 mt-16">
      <Logo
        img={img}
      />
      <Logotipo 
        textLogotipo={text}
      />
      <AboutMe />
      <ProyectButton />
    </div>
  );
};

export default Main;
