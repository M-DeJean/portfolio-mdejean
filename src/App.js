import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <main className='App'>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;