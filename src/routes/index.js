import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import routes from "./router.config"
import RouterView from "./RouterView"

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={routes.routes} />
      
    </Router>
  );
}

export default RouterConfig;
