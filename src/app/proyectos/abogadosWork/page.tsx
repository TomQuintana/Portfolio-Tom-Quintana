import React from 'react';
import ProyectBody from '../../../components/freelanceProyectBody';

const dataMeals = {
  name: 'Pagina para buffet de Abogados',
  stack: 'React, Next, Typescript',
  description: 'Trabajo Freelance en donde se realaizo un sitio para un buffet de abogados. El mismo fue desarrollado junto Dmitri Trofimenko y Pablo Llanes ',
  sitio: 'https://www.estudiojcs.com.ar/',
  imageOne: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1693692760/Screenshot_2023-09-02_at_19.10.42_xptsmf.png',
  imageSecond: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1693692760/Screenshot_2023-09-02_at_19.11.06_z3kp6b.png'
};


const page = () => {
  return (
    <>
      <ProyectBody 
        proyectoName={dataMeals.name}
        stack={dataMeals.stack}
        description={dataMeals.description}
        sitio={dataMeals.sitio}
        imageOne={dataMeals.imageOne}
        imageSecond={dataMeals.imageSecond}
      />
    </>
  );
};

export default page;
