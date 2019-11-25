import React from 'react';
import NotFound from '../Base/NotFound';


const CardDetailPlanets = ({ planets, url, history }) => (
  <>
    {planets && <div className="card-transparent mt-4">
      <div className="card-body">
        <h5 className="card-title text-color-swapi">Name: {planets.name}</h5>
        <p className="card-text text-white">Population:  {planets.population}</p>
        <p className="card-text text-white">Orbital:  {planets.orbital_period}</p>
        <p className="card-text text-white">Climate:  {planets.climate}</p>
        <p className="card-text text-white">Terrain: {planets.terrain}</p>
        {history && <button onClick={() => history.push(`/${url}/${planets.url.match(/\d+/g)}`)} className="btn btn-primary  hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
      </div>
    </div>}
    {!planets && <NotFound />}
  </>
);

export default CardDetailPlanets;