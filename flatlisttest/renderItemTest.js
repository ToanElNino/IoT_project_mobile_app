import React, {useState} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import ItemTest from './ItemTest';

const RenderItemTest = ({item}) => {
  console.log('-');
  return <ItemTest title={item} />;
};
export default RenderItemTest;
