
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Features/Navbar';
import Header from './components/Features/Header';
import openSupplies from './shared/data/openSupplies.json';
import PrefCardList from './components/Card List/PrefCardList';
import MainFeatures from './components/Features/MainFeatures';
import ExampleCard from './components/Features/ExampleCard'


function App() {
  const [ prefCardList, setPrefCard ] = useState(openSupplies);

  return (
    <div className="App">
      <Navigation />
      <Header />
      <PrefCardList prefCardList={prefCardList}/>
      <hr />
      <MainFeatures />
      <hr />
      <ExampleCard />
    </div>
  );
}

export default App;
