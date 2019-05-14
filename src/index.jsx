import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import createStore from './store.js';

import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Loadable from 'react-loadable';

//import IndexPage from 'pages/IndexPage'; //т.к. используем Loadable
//import ProductPage from 'pages/ProductPage';

const theme = {
	
};

const store = createStore();

ReactDOM.render(<ThemeProvider theme={theme}>
	<BrowserRouter>
		<Provider store={store}>
			<Route 
				path="/" 
				component={Loadable({
					loader: () => import(`pages/IndexPage`),
					loading: () => <div>Loading!</div>
				})} />
			<Route 
				path="/product/:id" 
				component={Loadable({
					loader: () => import(`pages/ProductPage`),
					loading: () => <div>Loading!</div>
				})} />
			<Route 
				path="/products" 
				component={Loadable({
					loader: () => import(`pages/ProductsPage`),
					loading: () => <div>Loading!</div>
				})} />
			<Route 
				path="/order" 
				component={Loadable({
					loader: () => import(`pages/OrderPage`),
					loading: () => <div>Loading!</div>
				})} />
		</Provider>
	</BrowserRouter>
</ThemeProvider>, document.getElementById('root'));