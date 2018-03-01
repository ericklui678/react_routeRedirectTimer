import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Title from './components/title';
import JavaScript from './components/javascript';
import Haskell from './components/haskell';
import CoffeeScript from './components/coffeescript';

render(
  <BrowserRouter>
    <div>
      <Title />
      <Route path="/javascript" component={JavaScript} />
      <Route path="/haskell" component={Haskell} />
      <Route path="/coffeescript" component={CoffeeScript} />
    </div>
  </BrowserRouter>
  , document.querySelector('.container'));
