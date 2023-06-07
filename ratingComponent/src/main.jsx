import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import Store from './store/Store.js'; 

import './index.css'
import store from './store/Store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
  {/* Add in the Redux Provider here  */}
    <App />
  </Provider>
  </React.StrictMode>,
)
