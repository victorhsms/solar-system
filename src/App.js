import React from 'react';
import Header from './components/header';
import SolarSystem from './components/solarSystem';
import Missions from './components/missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
