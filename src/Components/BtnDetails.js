import React from 'react';
import PropTypes from 'prop-types';

const BtnDetails = ({ listBtns, onDetail }) => (
  <div className='row'>
    <div className='col-sm-12'>
      {listBtns.map((item, key) => (
        <button key={`i-${key}-${item}`} onClick={() => onDetail(item.toLowerCase())} className="btn btn-primary hover-color-swapi-reverse btn-sm bg-transparent border-white text-color-swapi ml-3">{item}</button>
      ))}
    </div>
  </div >
);

BtnDetails.propTypes = {
  listBtns: PropTypes.array.isRequired,
  onDetail: PropTypes.func.isRequired
}

export default BtnDetails;