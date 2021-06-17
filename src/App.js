import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import ResetPassword from './components/ResetPassword/ResetPassword';

const App = () => {
  return (
    <div>
      <Header/>
      <LoginForm/>
      <ResetPassword/>
    </div>
  );
}

export default App;
