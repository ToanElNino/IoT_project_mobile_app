/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import EventComment from '../components/userCityNotification/event/EventComment';
import NotificationImage from '../components/userCityNotification/notification/NotificationImage';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
const ItemTest = ({title}) => {
  console.log(title);
  const [showEvent, setShowEvent] = useState(false);
  return (
    <View style={styles.itemContainer}>
      {/* <Text>{title.countComment}</Text> */}
      <View style={styles.item}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setShowEvent(true)}>
          <Text style={styles.name}>{1 + ' - ' + title.name}</Text>
          <Text>{'   -Time: ' + title.creationTime.substring(0, 10)}</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showEvent}
        onRequestClose={() => {
          setShowEvent(!showEvent);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text
              style={{
                ...styles.modalText,
                color: '#242A53',
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Detail:
            </Text>
            <ScrollView style={{maxHeight: 300}}>
              <Text>{'- Notification: ' + title.name}</Text>
              <Text>{'- Content: ' + title.data}</Text>
              {title.fileUrl && <NotificationImage url={title.fileUrl} />}
              <Text style={styles.modalText}>
                {'- Time: ' + title.creationTime.substring(0, 10)}
              </Text>
              {/* <Text>{'- Time: ' + title.substring(0, 10)}</Text> */}
            </ScrollView>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <EventComment eventId={title.id} />
              <Pressable
                style={styles.hideDetailBtn}
                onPress={() => setShowEvent(!showEvent)}>
                <Text style={styles.textStyle}>Hide detail</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ItemTest;
const styles = StyleSheet.create({
  itemContainer: {
    maxHeight: 120,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#3A5BB3',
    marginTop: 10,
    paddingVertical: 10,
    width: 150,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hideDetailBtn: {
    marginTop: 60,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    paddingVertical: 12,
    paddingHorizontal: 5,
    width: 120,
    backgroundColor: '#3A5BB3',
  },
});
