
import './App.css';
import Home from './Home/Home';

import NavBar from './navbar/NabBar';
function App() {

  const title = "Welcome to new blog";
  return (
   
    <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
