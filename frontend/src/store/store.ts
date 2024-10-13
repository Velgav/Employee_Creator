// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';
import employeeReducer from './employeeslice';

const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  preloadedState,
});

// Subscribe to store changes and save state to localStorage whenever it updates
store.subscribe(() => {
  saveState({
    employees: store.getState().employees, // Save only the employees slice of state
  });
});
// Define RootState and AppDispatch for typed usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
