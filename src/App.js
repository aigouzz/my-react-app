import React from 'react'
import Home from './view/Home'
import {FormContext} from './context/index'

function App() {
  return (
    <FormContext.Provider>
      <div className="App">
        <div className='App-home'>
          <Home></Home>
        </div>
    </div>
    </FormContext.Provider>
  );
}

export default App
