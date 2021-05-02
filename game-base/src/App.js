import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


// Pages / Views
import WorldMap from './Pages/WorldMap'
import Inventory from './Pages/Inventory'


const PAGES = {
  WORLD_MAP: "WORLD_MAP",
  INVENTORY: "INVENTORY"
}

const App = props => {
  const [page, setPage] = useState(PAGES.WORLD_MAP)

  const getPage = () => {
    switch (page) {
      case PAGES.WORLD_MAP: return <WorldMap />
      case PAGES.INVENTORY: return <Inventory />
    }
  }

  const goto = page => {
    setPage(page);
  }

  return (
    <div className="App">
      <section>
        <button onClick={() => goto(PAGES.WORLD_MAP)}>WORLD MAP</button>
        <button onClick={() => goto(PAGES.INVENTORY)}>INVENTORY</button>
      </section>
      {getPage()}
    </div>
  );
}

export default App;
