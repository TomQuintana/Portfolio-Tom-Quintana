import React from 'react';
import ProyectBody from '../../../components/proyectBody';

const data = {
  name: 'Pomodoro',
  stack: 'Python, Tkinter',
  description: 'Pomodoro inspirado en Richard Feynman',
  repo: 'https://github.com/TomQuintana/Feyndoro-Pomodoro-App',
  imageOne: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1692564429/Screenshot_2023-08-20_at_14.05.03_w9ywbe.png',
  imageSecond: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/v1692564637/Screenshot_2023-08-20_at_17.50.18_nrum4w.png'
};
 

const page = () => {
  return (
    <ProyectBody 
      proyectoName={data.name}
      stack={data.stack}
      description={data.description}
      repo={data.repo}
      imageOne={data.imageOne}
      imageSecond={data.imageSecond}
    />
  );
};

export default page;
