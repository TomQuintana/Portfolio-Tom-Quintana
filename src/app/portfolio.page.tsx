import React from 'react';
import Main from './pages/Main.page';
import Footer from './components/FooterPage';
import Nav from './pages/Nav.page';



const Portfolio = () => {
  return (
    <div>
      <nav>
        <Nav/>
      </nav>
      <main className='w-full'>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
