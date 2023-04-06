import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {Card} from './src/components/Card';
import { Post } from './src/types/Post.interface';

function App(): JSX.Element {  
 
  const post:Post = {
    name: "Alex Mihoc", 
    image: require('./src/assets/photo.jpg')
  } 

  const onPress = (title: string) => Alert.alert(`${title}`);
  
  return (
    <SafeAreaView>
      <Card post={post} handleImagePress={onPress}></Card>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});



export default App;
