import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: [
    {id: 1, title: 'Note 1', content: 'Content 1'},
    {id: 2, title: 'Note 2', content: 'Content 2'},
    {id: 3, title: 'Note 3', content: 'Content 3'},
  ],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addOrUpdateNote: (state, action) => {
      const {id, title, content} = action.payload;
      const existingNote = state.notes.find(note => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
      } else {
        const newNote = {
          id: state.notes.length + 1,
          title,
          content,
        };
        state.notes.push(newNote);
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  },
});

export const {addOrUpdateNote, deleteNote} = noteSlice.actions;

export default noteSlice.reducer;
