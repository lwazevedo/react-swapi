import React from 'react';
import PropTypes from 'prop-types';

import { BtnDetails, NotFound, CardDetail } from './index';

const CardContainer = ({ data, typeRender, fields, listBtns, onDetail, onMoreInfo, active }) => {

  if (typeRender === 'one') {
    return (
      (data ? <>
        <CardDetail data={data} fields={fields} />
        <BtnDetails listBtns={listBtns} onDetail={onDetail} active={active} />
      </> : <NotFound />)
    );
  }

  if (typeRender === 'multiple') {
    return (
      (data.length > 0 && <div className='row mt-4'>
        {data.map((item, key) => (
          <div className='col-sm-4' key={`item-${key}`} >
            <CardDetail data={item} fields={fields} onMoreInfo={onMoreInfo} />
          </div>
        ))}
      </div>)
    );
  }
};

CardContainer.propTypes = {
  typeRender: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  data: (props, propName, componentName) => {
    if ((props['typeRender'] === 'one' && (props[propName] === undefined || typeof (props[propName]) != 'object'))) {
      return new Error('Please provide a object data!');
    }
    if ((props['typeRender'] === 'multiple' && (props[propName] === undefined || !Array.isArray(props[propName])))) {
      return new Error('Please provide a array data!');
    }
  },
  listBtns: (props, propName, componentName) => {
    if ((props['typeRender'] === 'one' && (props[propName] === undefined || !Array.isArray(props[propName])))) {
      return new Error('Please provide a array data!');
    }
  },
  onDetail: PropTypes.func,
  onMoreInfo: PropTypes.func
}

export default CardContainer;
