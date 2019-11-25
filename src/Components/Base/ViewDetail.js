import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { useAlert } from 'react-alert'
import { messages, btnDetails } from '../../Config/Constants';

import { Container, CardDetailObject, BtnDetails, NotFound } from '../index';

import LoadingContext from '../../Config/LoadingContext';
import swapi from '../../Config/Api';

const ViewDetail = (props) => {
  const alert = useAlert();
  const { setIsLoading } = useContext(LoadingContext);
  const typeRoute = props.match.url.replace(/[\\/\d+]/g, '');
  const [detail, setDetail] = useState({});
  const [urlAll, setUrlAll] = useState([]);
  const [detailAll, setDetailAll] = useState([]);
  const [typeAll, setTypeAll] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const FetchData = async () => {
      try {
        const res = await swapi.get(props.match.url);
        setDetail(res.data);
        setDetailAll([]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setDetailAll([]);
        alert.error(messages.SEARCH_FAILED);
      }
    };
    FetchData();
  }, [alert, props.match.url, setIsLoading]);

  useEffect(() => {

    const FetchData = async () => {
      setIsLoading(true);
      setDetailAll([]);
      try {
        const res = await axios.all(urlAll);
        const data = res.map(item => item.data);
        setDetailAll(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setDetailAll([]);
        alert.error(messages.SEARCH_FAILED);
      }
    };
    if (urlAll.length > 0) FetchData();
  }, [urlAll, alert, setIsLoading]);


  const back = () => props.history.push(`/${typeRoute}`);
  const getDetails = (type) => {
    const arrayUrls = detail[type].map(url => swapi.get(url));
    if (arrayUrls.length > 0) {
      setUrlAll(arrayUrls);
      const newType = type === 'people' || type === 'residents' ? 'characters' : type;
      setTypeAll(newType);
    }
  }
  return (
    <Container onBack={back}>
      {detail && <CardDetailObject type={typeRoute === 'people' ? 'characters' : typeRoute} data={detail} />}
      {detail && <BtnDetails listBtns={btnDetails[typeRoute]} onDetail={getDetails} />}
      {detailAll.length > 0 && <div className='row mt-4'>
        {detailAll.length > 0 && detailAll.map((item, key) => (
          <div className='col-sm-4' key={`item-${key}`} >
            <CardDetailObject type={typeAll} data={item} history={props.history} />
          </div>
        ))}
      </div>}
      {detailAll.length === 0 && <NotFound />}
    </Container>
  );
};

export default withRouter(ViewDetail);