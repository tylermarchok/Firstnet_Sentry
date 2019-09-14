import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoCameraView } from '@expo/samples';

export default function CameraScreen() {
  return (
    // <ScrollView style={styles.container}>
    // </ScrollView>
    <ExpoCameraView />
  );
}

CameraScreen.navigationOptions = {
  title: 'Camera',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
