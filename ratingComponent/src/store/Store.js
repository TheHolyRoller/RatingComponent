import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer'; // import your reducer from somewhere

import reducer from '../reducers/reducer';

// Create a store by passing the reducer function to configureStore
const store = configureStore({
  reducer: reducer,
});

// Export the store so that other files can import it
export default store;
