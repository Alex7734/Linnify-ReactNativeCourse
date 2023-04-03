import React from 'react';
import { Button, View } from 'react-native';

export default function MyButton() {

  const handlePress = () => {
    console.log("Button pressed!");
  }

  return (
    <View>
      <Button 
        title="Press me!" 
        onPress={handlePress} 
      />
    </View>
  );
}
