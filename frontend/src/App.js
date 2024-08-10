//import logo from './logo.svg';
import React from 'react';
import './App.css';
import CreateStudent from './components/CreateStudent';
// import EditStudent from './components/EditStudent';
import GetStudent from './components/GetStudent';   
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/students/add"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/students/add"} className="nav-link">
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/students/all"} className="nav-link">
                  Student List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/students/add" element={<CreateStudent />} />
            {/* <Route exact path="/edit-student/:id" element={<EditStudent />} /> */}
            <Route exact path="/students/all" element={<GetStudent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
