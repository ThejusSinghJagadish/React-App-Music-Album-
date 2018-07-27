// Import lib to creare a component

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Music Library'} />
      <AlbumList />
    </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
