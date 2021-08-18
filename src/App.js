import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import Home from './home';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Post from './blogdetails';


function App() {
  return (
    <div className="App">
       
       <Router>
       <NavBar />

       <Switch>
        <div className="content"></div>
        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/blog/slug">
          <Post />
        </Route>



       </Switch>
       </Router>


      <Home />
    </div>
  );
}

export default App;
