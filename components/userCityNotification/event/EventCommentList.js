import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import EventCommentItem from './EventCommentItem';

const EventCommentList = ({comments}) => {
  return (
    <View style={styles.notificationListContainer}>
      <ScrollView>
        {comments.map((comment, index) => {
          return <EventCommentItem commentItem={comment} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationListContainer: {
    maxHeight: 372,
    marginVertical: 20,
  },
});
export default EventCommentList;
