import React from 'react'
import Home from './view/Home'
import Footer from './view/Footer'
import {FooterContext} from './context/index'
import {FooterData} from './api/defaultData'

function App() {
  return (
    <FooterContext.Provider value={FooterData}>
      <div className="App">
        <div className='App-home'>
          <Home></Home>
          <Footer></Footer>
        </div>
    </div>
    </FooterContext.Provider>
  );
}

export default App
