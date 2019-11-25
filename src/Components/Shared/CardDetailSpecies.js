import React from 'react';
import NotFound from '../Base/NotFound';

const CardDetailSpecies = ({ species, url, history }) => (
  <>
    {species && <div className="card-transparent mt-4">
      <div className="card-body">
        <h5 className="card-title text-color-swapi">Name: {species.name}</h5>
        <p className="card-text text-white">Classification:  {species.classification}</p>
        <p className="card-text text-white">Designation:  {species.designation}</p>
        <p className="card-text text-white">Language:  {species.language}</p>
        <p className="card-text text-white">Average Height: {species.average_height}</p>
        {history && <button onClick={() => history.push(`/${url}/${species.url.match(/\d+/g)}`)} className="btn btn-primary  hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
      </div>
    </div>}
  {!species && <NotFound />}
  </>
);

export default CardDetailSpecies;