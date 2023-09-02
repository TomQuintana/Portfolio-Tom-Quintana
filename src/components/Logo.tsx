import React from 'react';
import Image from 'next/image';
import '../app/styles/levitatingIcon.css';

interface Information {
  img: string,
}

const Logo: React.FC<Information> = ({img}) => {
  return (
    <>
      <div className='flex justify-center '>
        <div className='grid grid-cols-1'>
          <div className='flex justify-center'>
            <div className='levitating-image'>
              <Image
                src={img}
                width={300}
                height={72}
                className='mt-20 h-72 rounded-s-3xl '
                alt="Picture of the logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
