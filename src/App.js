import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Services/PrivateRoute'
import { AuthProvider } from './Context/AuthContext'

import { Header, Footer } from './Layout'
import { Exercises, History, Home, Login, Register, Workout } from './Pages'

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Header />
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<Home />} />
              </Route>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register/>}/>
            </Routes>
          </AuthProvider>
          <Footer />
        </Fragment>
      </Router>
    </>
  );
}

export default App;
