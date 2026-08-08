import React from 'react';
import ProyectBody from '../../../components/proyectBody';

const dataFinancialRag = {
  name: 'Financial RAG',
  stack: 'Python, LangGraph, LangChain',
  description: 'API que permite hacerle preguntas en lenguaje natural a reportes financieros 10-K en vez de leerlos manualmente. Usa un pipeline RAG (LangGraph + LangChain) que recupera los fragmentos relevantes del documento y genera respuestas basadas solo en esa información.',
  repo: 'https://github.com/TomQuintana/Financial-RAG'
};


const page = () => {
  return (
    <>
      <ProyectBody
        proyectoName={dataFinancialRag.name}
        stack={dataFinancialRag.stack}
        description={dataFinancialRag.description}
        repo={dataFinancialRag.repo}
      />
    </>
  );
};

export default page;
