import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {userDataSelector} from '../../../features/authentication/userSlice';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import RenderEventItem from './EventList';

const Event = () => {
  const userData = useSelector(userDataSelector);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url =
      'http://103.229.41.59/api/services/app/UserCityNotification/GetAllNotificationUserTenant';
    let config = {
      headers: {Authorization: `Bearer ${userData.accessToken}`},
      params: {
        Type: 2,
      },
    };
    async function fetchEvents() {
      const data = await axios
        .get(url, config)
        .then(response => response.request._response)
        .then(responseRequestResponse => {
          return JSON.parse(responseRequestResponse).result.data;
        })
        .catch(error => console.log(error));
      setEvents(data);
    }
    fetchEvents();
  }, [userData.accessToken]);
  return (
    <SafeAreaView style={styles.container}>
      {events.length ? (
        <FlatList
          data={events}
          renderItem={RenderEventItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Event;
