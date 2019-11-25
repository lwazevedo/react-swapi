import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import PulseLoader from 'react-spinners/PulseLoader';

import './App.css';

import { Header, SubHeader } from './Components';
import { title, subTitle, listTypes } from './Config/Constants';
import LoadingContext from './Config/LoadingContext';
import RoutesList from './Config/Routes';

function App(props) {
  console.log(props);
  const { isLoading } = useContext(LoadingContext);
  return (
    <div className='container-fluid'>
      <LoadingOverlay
        active={isLoading}
        styles={{
          overlay: (base) => ({
            ...base,
            height: '100vh',
          })
        }}
        spinner={<PulseLoader color={'#ffe43b'} />}
        text='Loading....'
      >
        <Header title={title} subTitle={subTitle} />
        <Router>
          <SubHeader list={listTypes} />
          <RoutesList list={listTypes} />
        </Router>
      </LoadingOverlay>
    </div>
  );
}

export default App;
