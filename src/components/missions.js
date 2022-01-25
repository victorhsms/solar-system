import React from 'react';
import Title from './title';
import MissionCard from './missionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission, index) => {
          const { name, year, country, destination } = mission;
          return (<MissionCard
            key={ index }
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
