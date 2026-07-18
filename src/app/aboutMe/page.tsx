import React from 'react';
import Nav from '../pageFormat/Nav.page';
import Logo from '../../components/Logo';
import Footer from '../../components/FooterPage';
import data from '../data/info.json';
import '../styles/aboutMe.css';
import '../styles/logotipo.css';

const date = new Date().getFullYear();
const author = 'Tom Quintana';

const jobs = [
  {
    company: 'Taligent · Data & AI Solutions',
    role: 'AI Engineer — Cliente: YPF',
    period: 'may. 2026 - actualidad',
    current: true,
    description: 'Diseño de arquitectura e implementación de sistemas multiagente con LangGraph y FastAPI para YPF: grafos de agentes, routing y estado persistente en Cosmos DB. RAG pipelines con recuperación semántica sobre documentación técnica interna (relevancia, latencia y context window management). Integración de LLMs vía Azure AI Foundry (OpenAI / Anthropic) con control de costos por token en entornos enterprise.'
  },
  {
    company: 'Quadminds',
    role: 'Ssr. Backend & IA Developer',
    period: 'feb. 2025 - may. 2026',
    current: false,
    description: 'Creación de agentes de IA con LangChain/Python y desarrollo de APIs escalables con FastAPI y NestJS/TypeScript.'
  },
  {
    company: 'Gojiraf · Live Shopping',
    role: 'Full Stack Developer',
    period: '',
    current: false,
    description: 'Junto al equipo de integraciones y core: desarrollo de integraciones con distintos ecommerce, participación en microservicios y tareas de implementación y mantenimiento del core de la aplicación.'
  }
];

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
        <div className='bg-white dark:bg-[#23242d] w-10/12 md:w-6/12 font-mono p-4 text-center shadowBox'>
          <div className='text-center text-xl'>
            <h1>
              Hola! Me llamo Tomas Quintana 
            </h1>
          </div>
          <br/>
          <div >
            <h2>
              Tengo 27 años y soy de Buenos Aires📍
            </h2>
          </div>
          <br/>
          <div>
            <h1 className='text-xl mb-4'>Mi trayectoria</h1>
            <div className='grid grid-cols-1 gap-4 text-left'>
              {jobs.map((job, index) =>
                <div key={index} className='border-l-4 border-orange-400 pl-4 py-1'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <h2 className='text-lg font-bold'>{job.role}</h2>
                    {job.current &&
                      <span className='bg-orange-400 text-white text-xs rounded-full px-2 py-0.5'>actual</span>
                    }
                  </div>
                  <div className='text-sm'>{job.company}</div>
                  {job.period &&
                    <div className='text-xs text-gray-500'>{job.period}</div>
                  }
                  <p className='text-sm mt-2'>{job.description}</p>
                </div>
              )}
            </div>
          </div>
          <br/>
          <div>
            <p>
              Me gusta trabajar en equipo, tener nuevos retos y poder poner en práctica lo que aprendo
            </p>
          </div>
          <br/>
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
