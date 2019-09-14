import React from 'react';
import { PostQRView } from '@expo/samples';

export default function PostQRScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <PostQRView />;
}

PostQRScreen.navigationOptions = {
  title: 'app.json',
};