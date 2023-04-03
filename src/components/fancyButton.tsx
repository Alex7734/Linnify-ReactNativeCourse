import React, { useState } from 'react';
import {Text, Image, StyleSheet, Pressable, View } from 'react-native';


export default function FancyButton() {
    
    // without state idk how to do it
    const [pressed, setPressed] = useState(false);
  
    const handlePressIn = () => {
      setPressed(true);
      console.log('pressed')
    }
  
    const handlePressOut = () => {
      setPressed(false);
    }
  
    return (
      <View style={styles.containerCenterButton}>
        <Pressable 
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut} 
          style={[styles.button, { opacity: pressed ? 0.5 : 1.0 }]}
          >
          <Image 
            source={require('../assets/photo.jpg')} 
            style={styles.icon} 
            />
          <Text style={styles.text}>Press me!</Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007AFF',
      borderRadius: 8,
      padding: 12,
      width: '90%'
    },

    containerCenterButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    text: {
      color: 'white',
      fontSize: 18,
    },
  });