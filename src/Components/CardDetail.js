import React, { useEffect, useState } from 'react';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const CardDetail = ({ data, fields, onMoreInfo }) => {
  const [view, setView] = useState([]);

  useEffect(() => {
    const itemView = [];
    for (const key in data) {
      if (data.hasOwnProperty(key) && fields[key]) {
        itemView.push({
          label: fields[key],
          value: data[key]
        });
      }
    }
    if (itemView.length > 0) setView(itemView);
  }, [data, fields])

  const getUrlMoreInfo = () => onMoreInfo(`/${data.url.replace(process.env.REACT_APP_API_URL, '')}`);

  return (
    <>
      {data && <div className="card-transparent mt-4">
        <div className="card-body">
          {view.length > 0 && view.map(item => (
            <p key={`p-${item.label}`} className="card-title mb-2"><span className='text-color-swapi mr-1'>{item.label}:</span><small className='text-white ml-1'>{item.value}</small></p>
          ))}
          {onMoreInfo && <button onClick={getUrlMoreInfo} className="btn btn-primary mt-2 hover-color-swapi btn-sm text-white bg-transparent border-color-swapi">More Information</button>}
        </div>
      </div>}
      {!data && <NotFound />}
    </>
  )
};

CardDetail.propTypes = {
  data: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  onMoreInfo: PropTypes.func,
}

export default CardDetail;