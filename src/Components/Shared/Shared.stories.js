import React from 'react';
import { storiesOf } from '@storybook/react';


import CardDetailFilm from './CardDetailFilm';
import CardDetailPeople from './CardDetailPeople';
import CardDetailPlanets from './CardDetailPlanets';
import CardDetailSpecies from './CardDetailSpecies';
import CardDetailStarships from './CardDetailStarships';
import CardDetailVehicles from './CardDetailVehicles';

export const film = {
  episode_id: '4',
  title: 'A New Hope',
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  opening_crawl: 'It is a period of civil war....',
};

export const people = {
  name: 'Luke Skywalker',
  skin_color: 'fair',
  gender: 'male',
  mass: '77',
  height: '172.',
};

export const planets = {
  name: 'Alderaan',
  population: '2000000000',
  orbital_period: '364',
  climate: 'temperate',
  terrain: 'grasslands, mountains.',
};

export const species = {
  name: 'Hutt',
  classification: 'gastropod',
  designation: 'sentient',
  language: 'Huttese',
  average_height: '300',
};

export const starships = {
  name: 'Executor',
  manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
  model: 'Executor-class star dreadnought',
  max_atmosphering_speed: 'n/a',
  cost_in_credits: '1143350000',
};

export const vehicles = {
  name: 'Sand Crawler',
  manufacturer: 'Corellia Mining Corporation',
  model: 'Digger Crawler',
  max_atmosphering_speed: '30',
  cost_in_credits: '150000',
};

storiesOf('Card Film One', module)
  .add('Film Completed', () => <CardDetailFilm film={film} url='films' history={{}} />)
  .add('No Film Object', () => <CardDetailFilm url='films' history={{}} />)


storiesOf('Card People One', module)
  .add('People Completed', () => <CardDetailPeople people={people} url='people' history={{}} />)
  .add('No People Object', () => <CardDetailPeople url='people' history={{}} />)


storiesOf('Card Planets One', module)
  .add('Planets Completed', () => <CardDetailPlanets planets={planets} url='planets' history={{}} />)
  .add('No Planets Object', () => <CardDetailPlanets url='planets' history={{}} />)


storiesOf('Card Species One', module)
  .add('Species Completed', () => <CardDetailSpecies species={species} url='species' history={{}} />)
  .add('No Species Object', () => <CardDetailSpecies url='species' history={{}} />)


storiesOf('Card Starships One', module)
  .add('Starships Completed', () => <CardDetailStarships starships={starships} url='starships' history={{}} />)
  .add('No Starships Object', () => <CardDetailStarships url='starships' history={{}} />)


storiesOf('Card Vehicles One', module)
  .add('Vehicles Completed', () => <CardDetailVehicles vehicles={vehicles} url='vehicles' history={{}} />)
  .add('No Vehicles Object', () => <CardDetailVehicles url='vehicles' history={{}} />)