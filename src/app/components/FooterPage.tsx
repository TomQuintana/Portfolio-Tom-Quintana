import React from 'react';
import '../styles/footer.css';

interface Data {
  author: string,
  year: number
}

const Footer: React.FC<Data> = ({author, year}) => {
  return (
    <div className='flex justify-center footer mt-3 font-mono text-sm'>
      © {year} {author} . All Rights Reserved.
    </div>
  );
};

export default Footer;
