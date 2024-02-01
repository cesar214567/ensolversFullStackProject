import { BrowserRouter, Route, Routes,Outlet, Link } from 'react-router-dom';
import Home from './layout/home';
import Login from './layout/login';
import './App.css';
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        
          <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Ensolvers</a>
              <ul class="right hide-on-med-and-down">
                <li>
                  <Link to="./login">Ensolvers</Link>
                </li>
                <Outlet/>
              </ul>

              <ul id="nav-mobile" class="sidenav">
                <li>
                  <Link to="/">Login</Link>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          </Routes>
          
          
        <footer class="page-footer orange">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Company Bio</h5>
                <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Settings</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Connect</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Made by <a class="orange-text text-lighten-3" href="http://github.com/cesar214567">Created by cesar214567</a>
            </div>
          </div>
        </footer>
      </BrowserRouter>

    </div>
  );
}