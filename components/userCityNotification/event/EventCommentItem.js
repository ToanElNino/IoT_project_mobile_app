/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

const EventCommentItem = ({commentItem}) => {
  const AVATAR_URL = {uri: `${commentItem.avatar}`};

  return (
    <View style={styles.commentContainer}>
      <View style={styles.userAvatar}>
        {commentItem.avatar === null ? (
          <Image
            source={require('../../../assets/EventComment/NullAvatar.jpg')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              marginHorizontal: 10,
            }}
          />
        ) : (
          <Image
            source={AVATAR_URL}
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              marginHorizontal: 10,
            }}
          />
        )}
      </View>
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{commentItem.fullName}</Text>
        <Text style={styles.userComment}>{commentItem.comment}</Text>
        <Text style={styles.commentTime}>
          {commentItem.creationTime.substring(0, 10)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    display: 'flex',
    marginVertical: 0,
    // padding: 20,
    // paddingHorizontal: ,
    borderRadius: 10,
    paddingVertical: 10,
  },
  userAvatar: {
    // backgroundColor: 'red',
  },
  commentContent: {
    //   backgroundColor:'red',
    borderRadius: 20,
    marginRight: 50,
    paddingRight: 10,
    padding: 10,
    backgroundColor: '#f8f8ff',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userComment: {
    fontSize: 15,
    // fontWeight: '400'
  },
  commentTime: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '400',
  },
});
export default EventCommentItem;
