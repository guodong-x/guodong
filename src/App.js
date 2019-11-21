import React from 'react';

// 引入路由
import {BrowserRouter} from 'react-router-dom'
import router from './router/router'
import RouterView from './router/routerView'

// 引入store
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterView routes={router.routes}></RouterView>
      </BrowserRouter>
    </Provider>
  );
}

export default App;