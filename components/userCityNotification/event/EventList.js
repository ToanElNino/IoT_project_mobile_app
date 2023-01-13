import React, {useState} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import EventItem from './EventItem';

const RenderEventItem = ({item}) => {
  return <EventItem title={item} />;
};
export default RenderEventItem;
