import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ placeholder, onSearch }) => {
  const [value, setValue] = useState('');

  const inputOnChange = (e) => setValue(e.target.value);
  
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  const onClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row mt-4 mb-4'>
        <div className='col-sm-4 offset-sm-4   text-center'>
          <div className='d-flex justify-content-center'>
            <div className='input-group'>
              <input type='text' className='form-control bg-transparent transparent-input' value={value} onChange={inputOnChange} placeholder={placeholder} />
              <div className="input-group-append">
                {value && <button className="btn btn-outline-secondary bg-transparent transparent-input" onClick={onClear} type="button"><i className="fa fa-times" aria-hidden="true"></i></button>}
                <button className="btn btn-outline-secondary bg-transparent transparent-input" type="submit"><i className="fa fa-search text-white"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
}
export default Search;