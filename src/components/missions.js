import React from 'react';
import { nanoid } from 'nanoid';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

// Referencia do 'nanoid' comentada nas linhas 7..9 do arquivo ./solarSystem.js

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => {
          const { name, year, country, destination } = mission;
          return (<MissionCard
            key={ nanoid() }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />);
        })}
      </div>
    );
  }
}

export default Missions;
