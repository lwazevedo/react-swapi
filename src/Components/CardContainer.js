import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';

import { BtnDetails, NotFound, CardDetail } from './index';
import 'rc-pagination/assets/index.css';


const CardContainer = ({ data, typeRender, fields, listBtns, onDetail, onMoreInfo, active = '', pagination = { perPage: 3, pageInitial: 0 } }) => {
  const [current, setCurrent] = useState(1);
  const [arrayPage, setArrayPage] = useState([]);

  useEffect(() => {
    if (typeRender === 'multiple') {
      const tot = Math.ceil(data.length / pagination.perPage);
      const arrTemp = []
      let cont = 0;
      let ini = pagination.pageInitial;
      let fim = pagination.perPage;
      while (cont <= tot) {
        arrTemp.push(data.slice(ini, fim));
        ini = fim;
        fim = fim + pagination.perPage;
        cont++;
      }
      setArrayPage(arrTemp);
    }
  }, [data, pagination.pageInitial, pagination.perPage, typeRender]);



  const onChange = (page) => setCurrent(page);

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
      <>
        <div className='row mt-4'>
          <div className='col-sm-12 text-center'>
            <div className='d-flex justify-content-center'>
              <Pagination onChange={onChange} current={current} total={data.length} showTitle={false} pageSize={pagination.perPage} />
            </div>
          </div>
        </div>
        {arrayPage.length > 0 && <div className='row mt-4'>
          {arrayPage[current - 1].map((item, key) => (
            <div className='col-sm-4' key={`item-${key}`} >
              <CardDetail data={item} fields={fields} onMoreInfo={onMoreInfo} />
            </div>
          ))}
        </div>}
      </>
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
  onMoreInfo: PropTypes.func,
  active: PropTypes.string,

}

export default CardContainer;
