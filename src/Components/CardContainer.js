import React from 'react';

import { BtnDetails, NotFound, CardDetail } from './index';

const CardContainer = ({ data, typeRender, fields, listBtns, onDetail, onMoreInfo }) => {

  if (typeRender === 'one') {
    return (
      (data ? <>
        <CardDetail data={data} fields={fields} />
        <BtnDetails listBtns={listBtns} onDetail={onDetail} />
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

export default CardContainer;