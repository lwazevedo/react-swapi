import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { View, ViewDetail } from '../Components';

const Routes = ({ list }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const components = [];
    list.forEach(item => {
      if (item.route) components.push(<Route key={`r-${item.id}`} exact path={item.route} component={View} />)
      if (item.routeId) components.push(<Route exact key={`r-${item.id}`} path={item.routeId} component={ViewDetail} />)
    });
    setRoutes(components);
  }, [list]);

  return (
    <Switch>
      {routes.length > 0 && routes.map(item => item)}
      <Redirect to='/films' />
    </Switch>
  )
};

export default Routes;