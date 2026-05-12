import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'Prepare Daily Report', status: 'Pending', assignedTo: 'Rahul', dueDate: '2026-05-15' },
    { id: 2, title: 'Fix SQL Issue', status: 'In Progress', assignedTo: 'Priya', dueDate: '2026-05-14' }
  ]
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
