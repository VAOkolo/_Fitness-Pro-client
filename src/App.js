import { Landing, Login, Dashboard, Signup } from './pages';
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { useLocation } from "react-router-dom";
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
        <AuthProvider>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/landing' element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
          </AnimatePresence>
        </AuthProvider>
    </div>
  );
}

export default App;
