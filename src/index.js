import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globalstyles.css'
import App from './App';
import { DashBoardPage } from './pages/DashBoardPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/404'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='dashboardpage' element={<DashBoardPage />} />
        <Route path='loginpage' element={<LoginPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


