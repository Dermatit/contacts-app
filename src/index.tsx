import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App/App';

import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Dispatch } from 'redux';
import { rootReducer } from './Redux/reducer';
import { ContactAction } from './Redux/types';

const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = Dispatch<ContactAction> & ThunkDispatch<typeof store, null, ContactAction>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
