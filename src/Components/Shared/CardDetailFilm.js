import React from 'react';
import NotFound from '../Base/NotFound';

const CardDetailFilm = ({ film, url, history }) => {
  return (
  <>
    {film && <div className="card-transparent mt-4">
      <div className="card-body">
        <h5 className="card-title text-color-swapi">Episode: {film.episode_id} - {film.title}</h5>
        <p className="card-text text-white">Director:  {film.director}</p>
        <p className="card-text text-white">Producer:  {film.producer}</p>
        <p className="card-text text-white">Description: {film.opening_crawl}</p>
        {history && <button onClick={() => history.push(`/${url}/${film.url.match(/\d+/g)}`)} className="btn btn-primary  hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
      </div>
    </div>}
    {!film && <NotFound />}
  </>
)};

export default CardDetailFilm;