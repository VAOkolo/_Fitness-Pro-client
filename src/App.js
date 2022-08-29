import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'

import { Header, Footer } from './Layout'
import { Login, SignUp, Home, History, Workout, Exercises, ErrorPage } from './Pages'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </Router>
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
