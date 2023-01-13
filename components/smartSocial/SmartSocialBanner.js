import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const SmartSocialBanner = () => {
  return (
    <View>
      <Image
        style={styles.bannerImage}
        source={{
          uri: 'https://halotravel.vn/wp-content/uploads/2021/10/san-sale-shopee.png',
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bannerImage: {
    resizeMode: 'contain',
    height: 175,
    width: 350,
  },
});
