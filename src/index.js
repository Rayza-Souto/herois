import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/Home/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Pages/Details/App';
import ComicsDetails from './Pages/Comics/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="/:id/comics" element={<ComicsDetails />} />
    </Routes>
  </BrowserRouter>
);
