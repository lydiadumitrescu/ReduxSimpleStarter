import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import App from './components/app';
import ListItems from './components/list-items';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/list/:type' component={ListItems} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  , document.querySelector('.container'));
