import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './page/MainPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./page/NoPage";
import TempPage from './page/TempPage';
import ActivityPage from './page/ActivityPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="temp" element={<TempPage />}/>
        <Route path="activity" element={<ActivityPage />}/>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './page/MainPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
*/

/*
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './page/MainPage';

function App() {

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
*/

