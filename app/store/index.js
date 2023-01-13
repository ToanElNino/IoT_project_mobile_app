import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../../features/todolist/todosSlice';
import userReducer from '../../features/authentication/userSlice';

const store = configureStore({
  reducer: {
    todoReducer: todoReducer,
    userReducer: userReducer,
  },
});
//selector

export default store;
