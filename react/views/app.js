import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import testAppReducers from '../reducers/reducers';
import TestApp from './testApp';

const loggerMiddleware = createLogger();
const createStoreWithMiddleWare = applyMiddleware(thunk, loggerMiddleware)(createStore);
const store = createStoreWithMiddleWare(testAppReducers);

export default class App extends Component{
	render(){
		return (
			<Provider store={store}>
				<TestApp/>
      </Provider>
		);
	};
}