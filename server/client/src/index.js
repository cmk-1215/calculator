import React from 'react';
import ReactDOM from 'react-dom';
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import './index.css';
import Header from'./components/header';
import Calculator from './components/calculator';
import RecentList from './components/recentList';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Header />
    <div className="container root-container">
      
      <Calculator />
      <RecentList />
    </div>
  </Provider>,
  document.getElementById('root')
);


