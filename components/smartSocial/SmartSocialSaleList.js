/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Data} from '../../dataMock/NearList';

export const SmartSocialSaleList = () => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <View style={styles.restaurantImage}>
        <Image
          resizeMode="contain"
          source={{uri: `${title.image_url}`}}
          style={styles.restaurantImage}></Image>
      </View>
    </View>
  );
  const renderItem = ({item}) => <Item title={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={{fontSize: 14, color: '#191970'}}>Khuyến mãi</Text>
        <Text style={{fontSize: 14, color: '#00bfff'}}>Xem tất cả</Text>
      </View>
      <View style={styles.itemListContainer}>
        <FlatList
          horizontal={true}
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
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  restaurantImage: {
    width: 130,
    height: 90,
    borderRadius: 15,
  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  itemListContainer: {
    paddingVertical: 5,
    borderRadius: 10,
  },
  item: {
    marginHorizontal: 5,
  },
});
