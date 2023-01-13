/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Data} from '../../../dataMock/NearList';

export const SmartSocialNearList = () => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <View style={styles.restaurantImage}>
        <Image
          resizeMode="contain"
          source={{uri: `${title.image_url}`}}
          style={{width: 80, height: 50}}></Image>
      </View>
      <View style={styles.restaurantDetail}>
        <Text style={styles.name}>{title.restaurantName}</Text>
        <Text style={styles.address}>{title.restaurantAddress}</Text>
        <Text style={styles.phoneNumber}>{title.restaurantPhoneNumber}</Text>
      </View>
    </View>
  );
  const renderItem = ({item}) => <Item title={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={{fontSize: 14, color: '#191970'}}>Gần tôi</Text>
        <Text style={{fontSize: 14, color: '#00bfff'}}>Xem tất cả</Text>
      </View>
      <View style={styles.itemListContainer}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  itemListContainer: {
    marginHorizontal: 0,
  },
  item: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 10,
  },

  restaurantDetail: {
    marginLeft: 20,
  },
  name: {
    fontSize: 15,
    color: '#00bfff',
  },
  address: {
    fontSize: 13,
  },
  phoneNumber: {
    fontSize: 14,
    color: '#00bfff',
  },
});
