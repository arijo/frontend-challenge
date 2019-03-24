import React from 'react';
import {Provider} from 'react-redux';
import store, {history} from './store';
import Routes from './router';
import '../css/Main.scss';

export default class Main extends React.Component {
 render() {
     return (
         <Provider store={store}>
             <Routes history={history} />
         </Provider>
     )
 }
}