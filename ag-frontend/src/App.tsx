import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';

function App() {

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;

/*
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SeriesProps } from './interfaces/SeriesProps';
import Form from './components/Form'
import List from './components/List'

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);

  return (
    <div className="App">
      <h1>My Favorite TV Series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList} />
      <List seriesList={seriesList} />
    </div>
  );
}

export default App;
*/

