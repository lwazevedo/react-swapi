import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert'

import { Container, CardContainer } from './index';
import { messages, identifyLabelField } from '../Config/Constants';

import swapi from '../Config/Api';
import LoadingContext from '../Config/LoadingContext';

const View = (props) => {
  const alert = useAlert();
  const path = props.location.pathname.replace(/[\\/]/g, '');
  const { setIsLoading, isLoading } = useContext(LoadingContext);
  const [listView, setListView] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      setIsLoading(true);

      try {
        const url = search ? search : path;
        const res = await swapi.get(url);
        setListView(res.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        alert.error(messages.SEARCH_FAILED);
      }
    };
    FetchData();
  }, [props.location.pathname, search, alert, path, setIsLoading]);


  const onSearch = value => setSearch(`${path}/?search=${value}`);
  const onMoreInfo = value => props.history.push(value);

  return (
    <>
      {!isLoading && listView.length > 0 && <Container onSearch={onSearch}>
        <CardContainer typeRender='multiple' data={listView} fields={identifyLabelField[path]} onMoreInfo={onMoreInfo} />
      </Container>}
    </>
  )
};

export default withRouter(View);