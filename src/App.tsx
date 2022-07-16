import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';
import Banner from './components/Banner/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Banner /><Home/></>} />
        <Route path="/country/:name" element={<CountryDetails/>}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
