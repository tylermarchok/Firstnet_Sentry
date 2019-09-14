import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PostQRView } from '@expo/samples';

export default function PostQRScreen() {
    return (
        <View>
        {
        /**
         * Go ahead and delete ExpoConfigView and replace it with your content;
         * we just wanted to give you a quick view of your config.
         */
        }
            <PostQRView />
        </View>);
}

PostQRScreen.navigationOptions = {
  title: 'Door Lock/Unlock',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });