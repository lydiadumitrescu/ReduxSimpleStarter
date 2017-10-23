import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import App from './components/app';
import ListItems from './components/list-items';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     <BrowserRouter>
      <div>
        <Switch>
          <Route path='/list/:type' component={ListItems} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));