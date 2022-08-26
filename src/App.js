import logo from './logo.svg';
import Login from './pages/LoginPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
