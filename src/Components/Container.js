import React from 'react';
import { Search } from './index';

const Container = ({ children, onBack, onSearch }) => (
  <div className='container mt-4'>
    {onSearch && <Search placeholder={'Search'} onSearch={onSearch} />}
    {onBack && <button onClick={onBack} className="btn btn-primary btn-sm bg-transparent hover-color-swapi-reverse  border-white  text-color-swapi ml-3">Back</button>}
    {children}
  </div>
);

export default Container;