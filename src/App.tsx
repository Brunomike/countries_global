import {Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import defaultTheme from './components/styles/theme';

import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';

import Home from './containters/Home';
import CountryDetail from './containters/CountryDetail';

function App() {
  let myTheme = localStorage.getItem("myTheme") || "dark";

  const [userTheme, setUserTheme] = useState(myTheme);
  
  function handleThemeSelection() {
    let toggledTheme = myTheme === "light" ? "dark" : "light";
    setUserTheme(toggledTheme);
    localStorage.setItem("myTheme", toggledTheme);
  }

  return (
    <>      
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles myTheme={userTheme} />
        <Header currentTheme={userTheme} toggleTheme={handleThemeSelection} />
        <Container>
            <Routes>
              <Route path='/' element={<Home userTheme={userTheme}/>}/>
              <Route path='/:searchTerm' element={<CountryDetail userTheme={userTheme}/>}/>            
            </Routes>
        </Container>
      </ThemeProvider>      
    </>
  );
}

export default App;
