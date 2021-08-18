
import './App.css';
import NavBar from './navbar';
import Home from './home';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Post from './blogdetails';


function App() {
  return (
  
       
       <Router>
           <div className="App">
       <NavBar />
       <div className="content">
       <Switch>
    
        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/blog/:slug">
          <Post />
        </Route>



       </Switch>
       </div>
       </div>
       </Router>

      

     
  );
}

export default App;
