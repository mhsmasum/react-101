
import './App.css';
import Home from './Home/Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

import NavBar from './navbar/NabBar';
import Create from './Home/Create';
import BlogDetails from './Home/BlogDetails';
function App() {

  const title = "Welcome to new blog";
  return (
   
   <Router>
     <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/create" >
            <Create/>
          </Route>
          <Route path="/blogs/:id" >
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
