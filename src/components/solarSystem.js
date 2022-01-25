import React from 'react';
import Title from './title';
import PlanetCard from './planetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet, index) => {
          const { name, image } = planet;
          return (<PlanetCard
            key={ index }
            planetName={ name }
            planetImage={ image }
          />);
        })}
      </div>
    );
  }
}

export default SolarSystem;
