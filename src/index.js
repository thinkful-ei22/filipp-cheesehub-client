import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';

import CheeseList from './components/cheese-list';

ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
