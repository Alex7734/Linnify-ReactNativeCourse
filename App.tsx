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
import MathButton from './src/components/MathButton';

function App(): JSX.Element {  
 

//   const data:Post[] = [
//     {
//       name: "Alex Mihoc", 
//       image: require('./src/assets/photo.jpg')
//     },
//     {
//       name: "Alt baiat", 
//       image: require('./src/assets/photo.jpg')
//     },
//     {
//       name: "Baiatul ala", 
//       image: require('./src/assets/photo.jpg')
//     },

// ]

  // const onPress = (title: string) => Alert.alert(`${title}`);
  // const renderItem = ({item}: ListRenderItemInfo<Post>) => <Card post={item} handleImagePress={onPress}></Card>

  const handleValueChange = (newValue: number) => {
    setValue(value + newValue);
  }

  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
        <Pressable onPress={(() => setValue(0))} style={{backgroundColor: 'blue', padding: 10, marginTop: 10}}><Text style={{color: 'white'}}>Reset</Text></Pressable>
        <View style={styles.up}>
          <MathButton value={1} onPress={handleValueChange}></MathButton>
          <MathButton value={-2} onPress={handleValueChange}></MathButton> 
        </View>
        <View style={styles.middle}>
          <Text style={styles.text}>Sum: {value}</Text>
        </View>
        <View style={styles.down}>
          <MathButton value={3} onPress={handleValueChange}></MathButton>
          <MathButton value={4} onPress={handleValueChange}></MathButton>
        </View>

      {/* <FlatList
        data = {data}
        renderItem = {renderItem}
        keyExtractor = {(item: Post) => item.name}
        ListEmptyComponent={() => <Text>No data</Text>}
        ListHeaderComponent= {() => <Text style={{textAlign: 'center'}}>Header</Text>}
        ListFooterComponent={() => <Text style={{textAlign: 'center'}}>Footer</Text>}
        ItemSeparatorComponent={() => <View
          style={{
            borderColor: 'red',
            borderWidth: 1,
            marginVertical: 10,
          }}
        />}
      /> */}
      {/* <Card post={post} handleImagePress={onPress}></Card> */}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  up: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  
  middle: {
    flex: 1,
    justifyContent: 'center',
  },

  down: {
    flex: 3,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
},

text: {
  color: 'black',
  fontSize: 24,
  fontWeight: 'bold'
},
});



export default App;
