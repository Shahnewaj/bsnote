import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './features/NotesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
