import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const SubHeader = ({ list }) => (
  <div className='row mt-4'>
    <div className='col-sm-12'>
      <ul className="list-inline d-flex justify-content-center text-white hover-color-li">
        {list.map((item, key) => (
          <li key={`item-${key}-${item.id}`} className="list-inline-item ">
            <Link to={`/${item.id}`} className='text-white'>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

SubHeader.prototypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }
    )
  ),
};

export default SubHeader;