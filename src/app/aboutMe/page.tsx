import React from 'react';
import Nav from '../pageFormat/Nav.page';
import Logo from '../../components/Logo';
import Footer from '../../components/FooterPage';
import data from '../data/info.json';
import '../styles/aboutMe.css';
import '../styles/logotipo.css';

const date = new Date().getFullYear();
const author = 'Tom Quintana';

const page = () => {
  return (
    <>
      <Nav />
      <div className='mt-32 md:mt-8'>
        <Logo
          img={data.info.img}
        />
      </div>
      <div className='w-full flex justify-center mt-5 fade-in'>
        <div className='bg-orange-400 logotipo p-5 rounded-xl aboutMeTitle flex justify-center text-white font-mono'>
          <h1 className='text-2xl'>
            Sobre Mi
          </h1>
        </div>
      </div>
      <div className=' border-black w-full mt-4 flex justify-center slide-up-element'>
        <div className='bg-white w-10/12 md:w-6/12 font-mono p-4 text-center shadowBox'>
          <div className='text-center text-xl'>
            <h1>
              Hola! Me llamo Tomas Quintana 
            </h1>
          </div>
          <br/>
          <div >
            <h2>
              Tengo 25 años y soy de Buenos Aires📍
            </h2>
          </div>
          <br/>
          <div>
            <p className=''>
              Comencé mi carrera como desarrollador Full Stack en Gojiraf Live Shopping, donde formé parte del equipo de integraciones y core. Durante mi tiempo en esta posición, contribuí al desarrollo de integraciones con diversas plataformas de comercio electrónico. Además, colaboré en la creación de microservicios y llevé a cabo tareas de implementación y mantenimiento en el núcleo de la aplicación. Actualmente, continúo mi trayectoria como desarrollador backend en Gojiraf, aplicando mi experiencia y habilidades en esta emocionante etapa profesional.           
            </p>
          </div>
          <br/>
          <div>
            <p>
              Me gusta trabajar en equipo, tener nuevos retos y poder poner en práctica lo que aprendo
            </p>
          </div>
          <br/>
          <div>
            <h1>
              Cuento con experiencia en las siguientes tecnologías
            </h1>
          </div>
          <div className='flex md:flex justify-center '>
            <div className='w-full '>
              <div className='flex justify-around '>
                <img
                  src="https://github.com/TomQuintana/TomQuintana/assets/69986961/8c5b5012-52ee-4824-8292-5d45caa9cccf"
                  alt="javascript"
                  width="100"
                  height="100"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="100"
                  height="100"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="100"
                  height="100"
                />

                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="100"
                  height="100"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="100"
                  height="100"
                /> 
              </div>
              <div className='flex justify-around '>
                <img
                  src="https://github.com/TomQuintana/TomQuintana/assets/69986961/6497df6f-2499-4ad6-ab3f-f1ae229d8a44"
                  alt="typescript"
                  width="100"
                  height="100"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="100"
                  height="100"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
                  alt="mysql"
                  width="100"
                  height="100"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original-wordmark.svg"
                  alt="mysql"
                  width="100"
                  height="100"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-line-wordmark.svg"
                  alt="typescript"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='mt-5'>
        <Footer
          author={author}
          year={date}
        />
      </footer>
    </>
  );
};

export default page;
