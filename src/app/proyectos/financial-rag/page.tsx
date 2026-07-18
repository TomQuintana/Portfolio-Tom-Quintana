import React from 'react';
import ProyectBody from '../../../components/proyectBody';

const dataFinancialRag = {
  name: 'Financial RAG',
  stack: 'Python, LangGraph, LangChain',
  description: 'Aplicación para buscar y consultar información dentro de reportes financieros 10-K de empresas como AAPL. Implementa un pipeline RAG con LangGraph y Python para recuperación semántica sobre los documentos y responder preguntas en lenguaje natural.',
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
