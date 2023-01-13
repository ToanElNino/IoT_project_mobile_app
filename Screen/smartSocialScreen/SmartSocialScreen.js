import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SmartSocialBanner} from '../../components/smartSocial/SmartSocialBanner';
import {SmartSocialNearList} from '../../components/smartSocial/NearList/SmartSocialNearList';
import {SmartSocialSaleList} from '../../components/smartSocial/SmartSocialSaleList';
import {SmartSocialSearchInput} from '../../components/smartSocial/SmartSocialSearchInput';

export const SmartSocialScreen = () => {
  return (
    <View style={styles.smartSocialContainer}>
      {/* <View>
        <SmartSocialSearchInput />
      </View>
      <ScrollView>
        <View>
          <SmartSocialBanner />
        </View>
        <View>
          <SmartSocialSaleList />
        </View>
        <View>
          <SmartSocialNearList />
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  smartSocialContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
