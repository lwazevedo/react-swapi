import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { useAlert } from 'react-alert'
import { messages, btnDetails, identifyType, identifyLabelField } from '../Config/Constants';

import { Container, CardContainer, NotFound } from './index';

import LoadingContext from '../Config/LoadingContext';
import swapi from '../Config/Api';

const ViewDetail = (props) => {
  const alert = useAlert();
  const { setIsLoading, isLoading, setViewSubHeader } = useContext(LoadingContext);
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
    setDetailAll([]);
    const FetchData = async () => {
      setIsLoading(true);
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


  const back = () => {
    setViewSubHeader(true);
    props.history.push(`/${typeRoute}`)
  };
  const getDetails = (type) => {
    const arrayUrls = detail[type].map(url => swapi.get(url));
    setUrlAll(arrayUrls);
    setTypeAll(type);
    
  }
  const onMoreInfo = value => props.history.push(value);

  return (
    (Object.keys(detail).length > 0 && <Container onBack={back}>
      <CardContainer typeRender='one' data={detail} fields={identifyLabelField[identifyType[typeRoute]]} listBtns={btnDetails[typeRoute]} onDetail={getDetails} active={identifyType[typeAll]}/>
      {!isLoading && detailAll.length > 0 && <CardContainer typeRender='multiple' data={detailAll} fields={identifyLabelField[identifyType[typeAll]]} onMoreInfo={onMoreInfo}  pagination={{perPage: 3, pageInitial: 0}} />}
      {urlAll.length === 0 && typeAll && <NotFound />}
    </Container>)
  );
};

export default withRouter(ViewDetail);