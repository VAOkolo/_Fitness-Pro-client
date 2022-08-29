import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'

import { Header, Footer } from './Layout'
import { Landing, Login, SignUp, Dashboard, History, Workout, Exercises, ErrorPage } from './Pages'

import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/workout" element={<Workout />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </AnimatePresence>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
