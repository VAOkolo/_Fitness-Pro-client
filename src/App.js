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

      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>

      {/* <Router>
          <Header />
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/home' element={<Home />} />
              </Route>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
          </AuthProvider>
          <Footer />
      </Router> */}
    </>
  );
}

export default App;
