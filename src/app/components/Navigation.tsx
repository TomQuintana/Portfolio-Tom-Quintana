'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/nav.css';
import '../styles/writeMachine.css';
//https://github.com/TomQuintana

const Navigation = ({author, data}) => {
  const pathname = usePathname();

  return (
    <div className='flex justify-center gap-5 p-5'>
      <div className='text-2xl typewriter font-mono'>
        <Link href={author.path}>
          {author.name}
        </Link>
      </div>
      <div className='flex justify-center gap-4 mt-1'>
        {data.map((navBar, index) =>

          <div key={index} className='flex justify-center underline-text'>
            <div className='mr-1'>
              <Image
                key={index}
                src={navBar.img}
                width={20}
                height={40}
                alt="Picture of the logo"
                className='navIcon'
              />           
            </div>
            <div key={index} className='text-lg'>
              <Link href={navBar.path} >
                {navBar.name}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

//       </div>

// <div className='flex justify-center '>
//           <div>
//             <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-portfolio-user-interface-vol-3-prettycons-lineal-prettycons-4.png" alt="external-portfolio-user-interface-vol-3-prettycons-lineal-prettycons-4"       
//               className='w-4 h-5 navGitIcon mr-1'
//             />
//           </div>
//           <div className='underline-text text-lg'>
//             <Link href="/proyectos" >
//               Proyectos
//             </Link>
//           </div>
//         </div>
//         <div className='flex justify-center underline-text'>
//           <div>
//             <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="github"      
//               className='w-5 h-5 navGitIcon '
//             />
//           </div>
//           <div className='text-lg'>
//             @TomQuinta
//           </div>
//         </div>
//         <div className='flex justify-center underline-text'>
//           <img src="https://img.icons8.com/ios/50/000000/resume.png" alt="resume"
//             className='w-5 h-5 navGitIcon'
//           />
//           <div className='text-lg'>
//            Cv 
//           </div>
//         </div>
//
