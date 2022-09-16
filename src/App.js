import logo from './logo.svg';
import './App.css';
import Home from './view/Home'
console.log(Home)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
