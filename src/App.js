import { Landing, Login, Dashboard, Register, Workout, AddWorkout, SubmitWorkout, History, LogWorkout, ErrorPage, Friends, FriendsForm } from './pages';
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext';
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { useLocation } from "react-router-dom";
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">

        <AuthProvider>
          <UserProvider>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/landing' element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/logworkout" element={<LogWorkout />} />
            <Route path="/history" element={<History />} />
            <Route path='/workout' element={<Workout />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/friendsform' element={<FriendsForm />} />
            <Route path='/addworkout' element={<AddWorkout />} />
            <Route path='/submitworkout' element={<SubmitWorkout />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          </AnimatePresence>
          </UserProvider>
        </AuthProvider>
    </div>
  );
}

export default App;
