import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Courses from './components/CoursePage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.js';
import SignUp from './components/SignUp.js'
import { AuthProvider } from './components/AuthMessage.js';

export const linkTitles = React.createContext(null);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
