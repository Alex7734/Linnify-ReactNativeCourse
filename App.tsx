import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,

} from 'react-native';

import BookList from './src/components/BookList';
import { LoginForm } from './src/components/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/navigators/app-navigator';

function App(): JSX.Element {  
  
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
       {/* <BookList></BookList> */}
       {/* <LoginForm></LoginForm>≥ */}
        <AppNavigator></AppNavigator>
      </SafeAreaView>
    </NavigationContainer>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
},

});

export default App;
