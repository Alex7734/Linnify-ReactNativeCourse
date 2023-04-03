/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import  MyButton  from './src/components/button';
import FancyButton from './src/components/fancyButton';
import {MyCard} from './src/components/MyCard';

function App(): JSX.Element {  
  return (
    <MyCard></MyCard>
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
