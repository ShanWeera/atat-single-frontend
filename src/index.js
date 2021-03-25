import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reportWebVitals from './reportWebVitals';
import Navigation from './componants/navigation/AppBar';
import ViewResultsCompare from './componants/view/results/Compare';
import ViewResultsMotifs from './componants/view/results/Motifs';
import allReducers from './reducers';
import ViewSubmit from "./componants/view/submit/Submit";

require('bootstrap/dist/css/bootstrap.min.css');

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {store.subscribe(() => console.log(store.getState()))}
      <Router>
        <Navigation />
        <Switch>
            <Route exact path="/" component={ViewSubmit} />
          <Route exact path="/results/:id" component={ViewResultsCompare} />
          <Route exact path="/results/:id/motifs" component={ViewResultsMotifs} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
