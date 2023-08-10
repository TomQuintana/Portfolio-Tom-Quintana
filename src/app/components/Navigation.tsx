import React from 'react';
import '../styles/nav.css';
//https://github.com/TomQuintana

const Navigation = () => {
  return (
    <div className='flex justify-center gap-5 p-5'>
      <div className='text-2xl font-sans'>Tom Quintana</div>
      <div className='flex justify-center gap-4'>
        <div className='flex justify-center '>
          <div>
            <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-portfolio-user-interface-vol-3-prettycons-lineal-prettycons-4.png" alt="external-portfolio-user-interface-vol-3-prettycons-lineal-prettycons-4"       
              className='w-4 h-5 navGitIcon mr-1'
            />
          </div>
          <div className='underline-text'>
            Proyectos
          </div>
        </div>
        <div className='flex justify-center underline-text'>
          <div>
            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="github"      
              className='w-5 h-5 navGitIcon '
            />
          </div>
          <div className=''>
            @TomQuinta
          </div>
        </div>
        <div className='flex justify-center underline-text'>
          <img src="https://img.icons8.com/ios/50/000000/resume.png" alt="resume"
            className='w-5 h-5'
          />
          <div className=''>
           Cv 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

// <div className="flex justify-center gap-6">
//         <div className="flex gap-3  ">
//           <div className='mr-10'>
//             <h1>Tom Quintana</h1>
//           </div>
//           <div className='flex justify-center '>
//             <img src="https://img.icons8.com/small/32/github.png" alt="github"
//               className='w-5 h-5 mt-1 pagesNav'
//             />
//             <div className=''>
//               @TomQuinta
//             </div>
//           </div>
//           <div>Cv</div>
//         </div>
//       </div>
