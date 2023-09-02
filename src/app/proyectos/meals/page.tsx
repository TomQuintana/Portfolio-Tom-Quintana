import React from 'react';
import ProyectBody from '../../../components/proyectBody';

const dataMeals = {
  name: 'Administrador de Comidas',
  stack: 'node',
  description: 'El proyecto Meals es un administrador de comidas para poder enumerar todas las comidas, editarlas, crearlas o eliminarlas. Está compuesto por una aplicación frontend y un servidor backend. El proyecto está diseñado para proporcionar una interfaz a través del frontend, mientras que el backend es responsable de gestionar la lógica empresarial y la interacción con la base de datos.',
  repo: 'https://github.com/TomQuintana/Meals-Proyect',
  imageOne: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1691522353/Screenshot_2023-08-08_at_16.18.59_gaeany.png',
  imageSecond: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1691520962/Screenshot_2023-08-08_at_13.04.57_hvmj4i.png'
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
