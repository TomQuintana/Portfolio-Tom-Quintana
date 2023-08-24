import React from 'react';
import '../styles/logotipo.css';

interface Logotipo {
  textLogotipo: string
}

const Logotipo: React.FC<Logotipo> = ({textLogotipo}) => {
  return (
    <div className='flex justify-center mt-8'>
      <h1 className='bg-green-400 p-5 rounded-xl w-32 logotipo flex justify-center text-white '>{textLogotipo}</h1>
    </div>
  );
};

export default Logotipo;
