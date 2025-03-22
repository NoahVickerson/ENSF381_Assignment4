import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Courses from './components/CoursePage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const linkTitles = React.createContext(null);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
