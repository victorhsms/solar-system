import React from 'react';
import Header from './components/header';
import SolarSystem from './components/solarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
