import React from "react";

import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/404'
import { DashBoardPage } from './pages/DashBoardPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='dashboardpage' element={<DashBoardPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
