import React from 'react';
import PropTypes from 'prop-types';
import { CardDetailFilm, CardDetailPeople, CardDetailPlanets, CardDetailSpecies, CardDetailStarships, CardDetailVehicles, NotFound } from '../index'

const CardDetailObject = ({ type, data, history }) => {
  if (type === 'films') return (<CardDetailFilm film={data} url={type} history={history} />)
  if (type === 'characters') return (<CardDetailPeople people={data} url={type} history={history} />)
  if (type === 'planets') return (<CardDetailPlanets planets={data} url={type} history={history} />)
  if (type === 'species') return (<CardDetailSpecies species={data} url={type} history={history} />)
  if (type === 'starships') return (<CardDetailStarships starships={data} url={type} history={history} />)
  if (type === 'vehicles') return (<CardDetailVehicles vehicles={data} url={type} history={history} />)
  return (
    <NotFound />
  )
};

CardDetailObject.prototypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default CardDetailObject;