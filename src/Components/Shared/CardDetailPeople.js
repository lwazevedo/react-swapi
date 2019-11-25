import React from 'react';
import NotFound from '../Base/NotFound';
const CardDetailPeople = ({ people, url, history }) => (
  <>
    {people && <div className="card-transparent mt-4">
      <div className="card-body">
        <h5 className="card-title text-color-swapi">Name: {people.name} - {people.skin_color}</h5>
        <p className="card-text text-white">Gender:  {people.gender}</p>
        <p className="card-text text-white">Mass:  {people.mass}</p>
        <p className="card-text text-white">Height: {people.height}</p>
        {history && <button onClick={() => url === 'characters' ? history.push(`/people/${people.url.match(/\d+/g)}`) : history.push(`/${url}/${people.url.match(/\d+/g)}`)} className="btn btn-primary  hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
      </div>
    </div>}
    {!people && <NotFound />}
  </>
);


export default CardDetailPeople;