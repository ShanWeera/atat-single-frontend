import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Results from "./componants/view/results";
import Navigation from "./componants/navigation/AppBar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import {Provider} from "react-redux"
import allReducers from "./reducers"
import { createStore } from  "redux"

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          {store.subscribe(() => console.log(store.getState()))}
      <Navigation />
        <Router>
                <Switch>
                    <Route exact path={"/results/:id"} component={Results}/>
                </Switch>
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
