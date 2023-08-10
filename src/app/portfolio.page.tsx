import React from 'react';
import Main from './pages/Main.page';
import Footer from './components/FooterPage';
import Nav from './pages/Nav.page';

const date = new Date().getFullYear()
const author = 'Tom Quintana'

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
        <Footer 
          year={date}
          author={author}
        />
      </footer>
    </div>
  );
};

export default Portfolio;
