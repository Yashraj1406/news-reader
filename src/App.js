import React from 'react';
import './App.css';
import Sidebar from './sidebar'
import NewsBlock from './newsBlock'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <NewsBlock />
      </div>
    </div> 

  );
}

export default App;
