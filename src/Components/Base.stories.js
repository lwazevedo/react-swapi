import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { btnDetails, listTypes, identifyLabelField } from '../Config/Constants';


import { BtnDetails, Header, SubHeader, NotFound, Search, Container, CardContainer, CardDetail } from './index';


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

const actionsBtnls = {
  onDetail: action('onDetail'),
}

const actionsContainer = {
  onBack: action('onBack'),
  onSearch: action('onSearch'),
  onMoreInfo: action('onMoreInfo'),
  onDetail: action('onDetail'),
}

storiesOf('Buttons of details list ', module)
  .addDecorator(story => <div style={{ padding: '5rem' }}>{story()}</div>)
  .add('Buttons Film', () => <BtnDetails listBtns={btnDetails.films} {...actionsBtnls} active={'films'} />)
  .add('Buttons People', () => <BtnDetails listBtns={btnDetails.people} {...actionsBtnls} active={'people'} />)
  .add('Buttons Planets', () => <BtnDetails listBtns={btnDetails.planets} {...actionsBtnls} active={'planets'} />)
  .add('Buttons Species', () => <BtnDetails listBtns={btnDetails.species} {...actionsBtnls} active={'species'} />)
  .add('Buttons Startships', () => <BtnDetails listBtns={btnDetails.starships} {...actionsBtnls} active={'startships'} />)
  .add('Buttons Vehicles', () => <BtnDetails listBtns={btnDetails.vehicles} {...actionsBtnls} active={'vehicles'} />)


storiesOf('Header')
  .add('Header App', () => <Header title='SWAPI' subTitle='The Star Wars Api' />)

storiesOf('Sub Header')
  .add('Sub Header App', () => <Router><SubHeader list={listTypes} /></Router>)

storiesOf('Search')
  .add('Search App', () => <Search onSearch={actionsContainer.onSearch} placeholder='Search' />)

storiesOf('Not Found')
  .add('Not Found ', () => <NotFound />)


storiesOf('Container')
  .add('Container With Children Multiple Not Search and pagnation default', () => <Container onBack={actionsContainer.onBack} > <CardContainer typeRender='multiple' data={[film, film]} fields={identifyLabelField['films']} onMoreInfo={actionsContainer.onMoreInfo} /></Container>)
  .add('Container With Children Multiple Not Back and pagnation default', () => <Container onSearch={actionsContainer.onSearch} > <CardContainer typeRender='multiple' data={[film, film]} fields={identifyLabelField['films']} onMoreInfo={actionsContainer.onMoreInfo} /></Container>)
  .add('Container With Children One', () => <Container onBack={actionsContainer.onBack} > <CardContainer typeRender='one' data={film} fields={identifyLabelField['films']} listBtns={btnDetails['films']} onDetail={actionsContainer.onDetail} /></Container>)



storiesOf('CardContainer')
  .add('Card Container Multiple', () => <CardContainer typeRender='multiple' data={[film, film]} fields={identifyLabelField['films']} onMoreInfo={actionsContainer.onMoreInfo} onDetail={actionsContainer.onDetail} />)
  .add('Card Container One', () => <CardContainer typeRender='one' data={film} fields={identifyLabelField['films']} listBtns={btnDetails['films']} onDetail={actionsContainer.onDetail} />)

storiesOf('CardDetail')
  .add('Card Detail', () => <CardDetail data={film} fields={identifyLabelField['films']} onMoreInfo={actionsContainer.onMoreInfo} />)