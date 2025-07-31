import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (!('theme' in localStorage)) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }
  return false;
};

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  }, [isDarkMode])
  
  return (
    <>
      
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

    </>
  )
}

export default App