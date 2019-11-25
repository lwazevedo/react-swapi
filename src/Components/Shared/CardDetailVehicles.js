import React from 'react';
import NotFound from '../Base/NotFound';

const CardDetailVehicles = ({ vehicles, url, history }) => (
  
  <>
    {vehicles && <div className="card-transparent mt-4">
      <div className="card-body">
        <h5 className="card-title text-color-swapi">Name: {vehicles.name}</h5>
        <p className="card-text text-white">Manufacturer:  {vehicles.manufacturer}</p>
        <p className="card-text text-white">Model:  {vehicles.model}</p>
        <p className="card-text text-white">Max Atmosphering Speed:  {vehicles.max_atmosphering_speed}</p>
        <p className="card-text text-white">Cost In Credits: {vehicles.cost_in_credits}</p>
        {history && <button onClick={() => history.push(`/${url}/${vehicles.url.match(/\d+/g)}`)} className="btn btn-primary  hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
      </div>
    </div>}
    {!vehicles && <NotFound />}
  </>
);

export default CardDetailVehicles;