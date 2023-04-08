import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Card} from './src/components/Card';
import { Post } from './src/types/Post.interface';
import BookList from './src/components/BookList';

function App(): JSX.Element {  
  
  return (
    <SafeAreaView style={styles.container}>
      <BookList></BookList>
      

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
},

});



export default App;
