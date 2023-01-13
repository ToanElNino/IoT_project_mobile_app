import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo list',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.count++;
      state.tasks.unshift({
        id: state.count,
        title: action.payload,
        completed: false,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      let {id, title} = action.payload;
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.title = title;
        }
        return task;
      });
    },
    deleteAllTask: (state, action) => {
      return initialState;
    },
  },
});
//reducer
const todoReducer = todoSlice.reducer;

export const todoSelector = state => state.todoReducer.tasks;

// Action
export const {addTask, deleteTask, editTask, deleteAllTask} = todoSlice.actions;

export default todoReducer;
