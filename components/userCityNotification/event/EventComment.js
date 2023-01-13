import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {userDataSelector} from '../../../features/authentication/userSlice';
import EventCommentList from './EventCommentList';

const EventComment = ({eventId}) => {
  const userData = useSelector(userDataSelector);
  const [modalVisible, setModalVisible] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url =
      'http://103.229.41.59/api/services/app/UserCityNotification/GetAllComment';
    let config = {
      headers: {Authorization: `Bearer ${userData.accessToken}`},
      params: {
        NotifiactionId: eventId,
      },
    };
    axios
      .get(url, config)
      .then(response => response.request._response)
      .then(responseRequestResponse => {
        // console.log(JSON.parse(responseRequestResponse).result.data);
        setComments(JSON.parse(responseRequestResponse).result.data);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Comments about this event:</Text>
            {comments.length ? (
              <EventCommentList comments={comments} />
            ) : (
              <ActivityIndicator size="large" />
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide comments</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show comments</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 12,
    elevation: 2,
  },
  buttonOpen: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    width: 120,
    backgroundColor: '#3A5BB3',
  },
  buttonClose: {
    backgroundColor: '#3A5BB3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
  },
});

export default EventComment;
