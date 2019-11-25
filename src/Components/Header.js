import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subTitle }) => (
  <div className='row mt-4 mb-4'>
    <div className='col-sm-12 text-center'>
      <h1 className='text-color-swapi'>{title}</h1>
      <span className='text-color-swapi'>{subTitle}</span>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default Header;