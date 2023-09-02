import React from 'react';
import ProyectBody from '../../../components/proyectBody';

const dataMeals = {
  name: 'Weather App',
  stack: 'node',
  description: 'Este proyecto consiste en una aplicación de terminal donde puedes consultar el clima de cualquier ciudad.',
  repo: 'https://github.com/TomQuintana/Weather-App',
  imageOne: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1685302127/Screenshot_2023-05-28_at_16.28.09_tdjykz.png',
  imageSecond: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1685302397/Screenshot_2023-05-28_at_16.32.47_pcudyq.png'
};
 

const page = () => {
  return (
    <>
      <ProyectBody 
        proyectoName={dataMeals.name}
        stack={dataMeals.stack}
        description={dataMeals.description}
        repo={dataMeals.repo}
        imageOne={dataMeals.imageOne}
        imageSecond={dataMeals.imageSecond}
      />
    </>
  );
};

export default page;
