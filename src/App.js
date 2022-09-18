import React from 'react'
import Footer from './view/Footer'
import {FooterContext} from './context/index'
import {FooterData} from './api/defaultData'
import {Routers} from './router/Route'

function App() {
  return (
    <FooterContext.Provider value={FooterData}>
      <div className='App'>
        <Routers></Routers>
        <Footer></Footer>
      </div>
    </FooterContext.Provider>
  );
}

export default App
