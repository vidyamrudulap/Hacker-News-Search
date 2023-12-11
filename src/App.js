// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Search';
import PostDetail from './PostDetail';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1 id="hh">Hacker News Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
