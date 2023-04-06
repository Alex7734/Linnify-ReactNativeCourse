import React, { useState } from 'react';
import {Text, StyleSheet, Pressable, View } from 'react-native';

interface Props{
    value: number,
    onPress: (value: number) => void
}

export default function MathButton(props: Props) {
    
    return (
            <Pressable style={({pressed}) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
                
              ]} onPressIn={() => props.onPress(props.value)}>
            <View style={styles.containerCenterButton}>
                <Text style={styles.text}>{`${props.value > 0 ? '+' : ''}${props.value}`}</Text>
            </View>
        </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      borderRadius: 8,
      padding: 12,
      width: '90%'
    },

    containerCenterButton: {
      width: 50,
      height: 50,
      marginHorizontal: 20,
      borderRadius: 10,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center'
    },

    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
  });