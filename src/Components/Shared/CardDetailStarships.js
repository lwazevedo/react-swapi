import React from 'react';
import NotFound from '../Base/NotFound';

const CardDetailStarships = ({ starships, url, history }) => (
  <>
    {starships && <div className="card-transparent mt-4">
      <div className="card-body">
        <h5 className="card-title text-color-swapi">Name: {starships.name}</h5>
        <p className="card-text text-white">Manufacturer:  {starships.manufacturer}</p>
        <p className="card-text text-white">Model:  {starships.model}</p>
        <p className="card-text text-white">Max Atmosphering Speed:  {starships.max_atmosphering_speed}</p>
        <p className="card-text text-white">Cost In Credits: {starships.cost_in_credits}</p>
        {history && <button onClick={() => history.push(`/${url}/${starships.url.match(/\d+/g)}`)} className="btn btn-primary  hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
      </div>
    </div>}
  {!starships && <NotFound />}
  </>
);

export default CardDetailStarships;