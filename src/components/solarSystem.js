import React from 'react';
import { nanoid } from 'nanoid';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

// Referencia nanoid: https://github.com/ai/nanoid/
// Ideia de uso do nanoid do colega da tribo B(turma XP) Asafe Dainez em um post do slack[https://trybecourse.slack.com/archives/C02HY11SPJP/p1643138374441800]
// Nano ID é um gerador de IDs de 21 caracteres/símbolos que ja vem no NODE e, segundo a sua documentação, ele é performático e seguro.

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => {
          const { name, image } = planet;
          return (<PlanetCard
            key={ nanoid() }
            planetName={ name }
            planetImage={ image }
          />);
        })}
      </div>
    );
  }
}

export default SolarSystem;
