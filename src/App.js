import React from 'react';
import './App.scss';
import Header from './components/Header'
import HomeBanner from './components/HomeBanner'
import Login from './components/Login'
import Banner from './components/Banner'
import List from './components/List'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <HomeBanner />
            </div>
          } />

          <Route path="/login" element={
            <React.Fragment>
              <Login />
            </React.Fragment>
          } />


          <Route path="/dashboard" element={
            <React.Fragment>
              <Login />
            </React.Fragment>
          } />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
