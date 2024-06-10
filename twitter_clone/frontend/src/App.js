import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TweetProvider } from './context/TweetContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <TweetProvider>
        <Router>
          <Header />
          <div className="container">
            <Sidebar />
            <main>
              <Route path="/" component={HomePage} exact />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </main>
          </div>
        </Router>
      </TweetProvider>
    </AuthProvider>
  );
};

export default App;
