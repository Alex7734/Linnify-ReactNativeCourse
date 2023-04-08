import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MathButton from './MathButton';

function MathGame(): JSX.Element {  
 
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



export default MathGame;
