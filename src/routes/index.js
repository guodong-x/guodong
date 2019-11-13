import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import routes from "./router.config"
import RouterView from "./RouterView"

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
