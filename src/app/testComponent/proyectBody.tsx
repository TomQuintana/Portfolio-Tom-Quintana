import React from 'react';
import Nav from '../pageFormat/Nav.page';
import Logo from '../components/Logo';
import Footer from '../components/FooterPage';
import data from '../data/info.json';
import Image from 'next/image';
import Link from 'next/link';
const date = new Date().getFullYear();
const author = 'Tom Quintana';

interface ProyectData {
  proyectoName: string,
  stack: string,
  description: string,
  repo: string,
  imageOne: string,
  imageSecond: string
}

const ProyectBody: React.FC<ProyectData> = ({proyectoName, stack, description, repo, imageOne, imageSecond}) => {
  return (
    <>
      <Nav />
      <div className='mt-32 md:mt-8'>
        <Logo
          img={data.info.img}
        />
      </div>
      <div className='flex justify-center mt-4'>
        <div className='w-7/12 bg-gray-100 p-2 rounded-xl'>
          <div className='text-start'>
            <div>
              <Link href="/proyectos" className='text-blue-600 underline'>
                Proyectos {'>'} 
              </Link>
              {''} {proyectoName}
            </div>
          </div>
          <div className='md:flex justify-center md:text-justify md:w-11/12 mt-4 m-8'>
            <p>{description}</p>
          </div>
          <div className=' md:flex justify-start ml-3 m-3 gap-4'>
            <div className='bg-sky-400 text-center rounded-xl p-1 text-white'>
              <h1
              >Stack</h1>
            </div>
            <p className='text-lg'>{stack}</p>
          </div>
          <div className='md:flex justify-start ml-3 m-3 gap-4'>
            <div className='bg-sky-400 text-center rounded-xl p-1 text-white'>
              <h1
              >Respositorio</h1>
            </div>
            <Link legacyBehavior href={repo}
            >
              <a target='_blank' className='mt-1 text-blue-600 underline '>
                {repo}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='md:flex mt-2 justify-center md:mt-6 gap-8'>
        <Image src={imageOne}
          alt="GitHub Icon" width={450} height={450} className='rounded-xl'
        />
        <Image src={imageSecond}
          alt="GitHub Icon" width={450} height={450} className='rounded-xl mt-2 md:mt-0' 
        />
      </div>
      <footer>
        <Footer 
          year={date}
          author={author}
        />
      </footer>
    </>
  );
};

export default ProyectBody;
