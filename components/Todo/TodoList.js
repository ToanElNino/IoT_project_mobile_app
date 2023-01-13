/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Task from './Task.js';
import {todoSelector} from '../../features/todolist/todosSlice.js';
import {
  addTask,
  deleteTask,
  editTask,
  deleteAllTask,
} from '../../features/todolist/todosSlice.js';
import {useDispatch} from 'react-redux';

export default function TodoList() {
  const [task, setTask] = useState(null);
  const tasksStore = useSelector(todoSelector);
  const dispatch = useDispatch();
  const handleAddTask = () => {
    if (task != null) {
      dispatch(addTask(task));
      setTask(null);
    }
  };

  const handleDeleteTask = index => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (indexEdit, newTask) => {
    dispatch(editTask({id: indexEdit, title: newTask}));
  };

  const handleDeleteAllTask = () => {
    dispatch(deleteAllTask());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.tasksContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>My Todo List</Text>
            {tasksStore.length === 0 ? (
              <Text style={styles.emptyTitle}>Your list is empty!</Text>
            ) : (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => handleDeleteAllTask()}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Clear list X
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.items}>
            {tasksStore.map((taskItem, index) => {
              return (
                <Task
                  title={taskItem.title}
                  key={taskItem.id}
                  taskIndex={taskItem.id}
                  handleDeleteTask={handleDeleteTask}
                  handleEditTask={handleEditTask}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.itemInputContainer}>
        <TextInput
          style={styles.itemInput}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          onPress={() => handleAddTask()}
          style={styles.addButton}>
          <Text>Add task</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEA1B1',
    justifyContent: 'space-between',
  },
  headerContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  tasksContainer: {
    justifyContent: 'center',
    paddingTop: 20,
    marginHorizontal: 15,
    marginBottom: 90,
  },
  title: {
    color: '#242A53',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  emptyTitle: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: '400',
  },
  clearButton: {
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 210,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    // backgroundColor: '#F194FF',
  },
  itemInputContainer: {
    backgroundColor: '#3A5BB3',
    paddingVertical: 5,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 5,
    paddingTop: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemInput: {
    width: '65%',
    height: '85%',
    marginLeft: 15,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ffff',
  },
  addButton: {
    backgroundColor: '#B4B5F1',
    padding: 10,
    marginRight: 15,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
