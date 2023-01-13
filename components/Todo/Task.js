/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import EditTaskModal from './EditTaskModal';

const Task = props => {
  const getNewTask = (indexEdit, newTask) => {
    props.handleEditTask(indexEdit, newTask);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{props.title}</Text>
      <View style={styles.buttons}>
        <EditTaskModal
          getNewTask={getNewTask}
          title={props.title}
          taskIndex={props.taskIndex}
        />
        <TouchableOpacity
          style={styles.itemDeleteButton}
          onPress={() => {
            props.handleDeleteTask(props.taskIndex);
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#B4B5F1',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  itemTitle: {
    marginLeft: 30,
    fontSize: 20,
    color: '#6D1D3A',
  },
  buttons: {
    marginRight: 0,
    flexDirection: 'row',
  },
  itemDeleteButton: {
    borderRadius: 20,
    marginLeft: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
});

export default Task;
