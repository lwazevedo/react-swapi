import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { btnDetails, listTypes } from '../../Config/Constants';


import { BtnDetails, Header, SubHeader, NotFound, Search, CardDetailObject } from '../index';

import {
  film,
  people,
  planets,
  species,
  starships,
  vehicles,
} from '../Shared/Shared.stories';

const actions = {
  onDetail: action('onDetail'),
}

const actionsContainer = {
  onBack: action('onBack'),
  onSearch: action('onSearch'),
}

storiesOf('Buttons of details list ', module)
  .addDecorator(story => <div style={{ padding: '5rem' }}>{story()}</div>)
  .add('Buttons Film', () => <BtnDetails listBtns={btnDetails.films} {...actions} />)
  .add('Buttons People', () => <BtnDetails listBtns={btnDetails.people} {...actions} />)
  .add('Buttons Planets', () => <BtnDetails listBtns={btnDetails.planets} {...actions} />)
  .add('Buttons Species', () => <BtnDetails listBtns={btnDetails.species} {...actions} />)
  .add('Buttons Startships', () => <BtnDetails listBtns={btnDetails.starships} {...actions} />)
  .add('Buttons Vehicles', () => <BtnDetails listBtns={btnDetails.vehicles} {...actions} />)


storiesOf('Header')
  .add('Header App', () => <Header title='SWAPI' subTitle='The Star Wars Api' />)

storiesOf('Sub Header')
  .add('Sub Header App', () => <Router><SubHeader list={listTypes} /></Router>)

storiesOf('Search')
  .add('Search App', () => <Search onSearch={actionsContainer.onSearch} placeholder='Search' />)

storiesOf('Not Found')
  .add('Not Found ', () => <NotFound />)

storiesOf('Card Object Routes')
  .add('Render Card Film', () => <CardDetailObject type={'films'} data={film} history={{}} />)
  .add('Render Card People', () => <CardDetailObject type={'characters'} data={people} history={{}} />)
  .add('Render Card Planets', () => <CardDetailObject type={'planets'} data={planets} history={{}} />)
  .add('Render Card Species', () => <CardDetailObject type={'species'} data={species} history={{}} />)
  .add('Render Card Starships', () => <CardDetailObject type={'starships'} data={starships} history={{}} />)
  .add('Render Card Vehicles', () => <CardDetailObject type={'vehicles'} data={vehicles} history={{}} />)