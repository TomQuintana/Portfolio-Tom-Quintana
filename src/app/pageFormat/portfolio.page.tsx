import React from 'react';
import Main from './Main.page';
import Nav from './Nav.page';
import Footer from '../../components/FooterPage';
import '../styles/mainContent.css';

//const date = new Date().getFullYear();
const author = 'Tom Quintana';

const Portfolio = () => {
  
  return (
    <>
      <div className=''>
        <nav>
          <Nav/>
        </nav>
        <main className='lg:w-full'>
          <div className='flex justify-center'>
            <Main />
          </div>
        </main>
        <footer>
          <Footer 
            year={2024}
            author={author}
          />
        </footer>

      </div>
    </>
  );
};

export default Portfolio;
