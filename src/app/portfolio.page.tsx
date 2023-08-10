import React from 'react';
import Main from './pages/Main.page';
import Footer from './components/FooterPage';
import Nav from './pages/Nav.page';
import './styles/mainContent.css';

const date = new Date().getFullYear();
const author = 'Tom Quintana';

const Portfolio = () => {
  return (
    <>
      <nav>
        <Nav/>
      </nav>
      <main className='w-full'>
        <div className=''>
          <Main />
        </div>
      </main>
      <footer>
        <Footer 
          year={date}
          author={author}
        />
      </footer>
    </>
  );
};

export default Portfolio;
