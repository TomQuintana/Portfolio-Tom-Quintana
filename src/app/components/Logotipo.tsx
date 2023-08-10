import React from 'react';
import '../styles/logotipo.css';

interface Logotipo {
  textLogotipo: string
}

const Logotipo: React.FC<Logotipo> = ({textLogotipo}) => {
  return (
    <div className='flex justify-center mt-8'>
      <div className='bg-sky-50 p-5 rounded-xl logotipo flex justify-center'>{textLogotipo}</div>
    </div>
  );
};

export default Logotipo;
