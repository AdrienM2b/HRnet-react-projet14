import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';

const savedState = localStorage.getItem('employees')
  ? JSON.parse(localStorage.getItem('employees'))
  : [];

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  preloadedState: {
    employee: savedState,
  },
});

store.subscribe(() => {
  localStorage.setItem('employees', JSON.stringify(store.getState().employee));
});

export default store;
