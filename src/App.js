import { Landing, Login, Dashboard, Register, Workout, AddWorkout, SubmitWorkout, History, LogWorkout, ErrorPage, Friends, FriendsForm, AcceptInvite  } from './Pages';
import { Routes, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom";


import { AnimatePresence } from 'framer-motion'
import './App.css';

import { AuthProvider } from './Context/AuthContext'
import { UserProvider } from './Context/UserContext';
function App() {
  const location = useLocation();

  return (
    <div className="App">

      <AuthProvider>
        <UserProvider>
          <AnimatePresence mode='wait'>
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
              <Route path='/acceptinvite' element={<AcceptInvite />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </AnimatePresence>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
