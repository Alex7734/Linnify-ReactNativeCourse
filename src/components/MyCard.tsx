import React from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable } from 'react-native';

export function MyCard() {

  const handleImagePress = () => {
    Alert.alert("Image pressed!\nNiste frumosi in poza :)");
    // AM INVATAT SA FAC ALERTURI, BOGDAN BE PROUD
  }
  
  const onPressLike = () => {
    console.log('like')
  }

  const onPressComment = () => {
    console.log('comment')
  }

  const onPressShare = () => {
    console.log('share')
  }


  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={require('../assets/person.png')} style={styles.profilePic} />
        <Text style={styles.headerText}>Alex Mihoc</Text>
      </View>
      <Pressable onPress={handleImagePress} >
        <Image source={require('../assets/photo.jpg')} style={styles.postImage} />
      </Pressable>
      <View style={styles.buttons}>
        <Pressable onPressIn={onPressLike} style={styles.button}>
            <Image 
            source={require('../assets/like.png')} 
            style={styles.buttonIcon} 
            />
          <Text style={styles.buttonText}>Like</Text>
        </Pressable>
        <Pressable  onPressIn={onPressComment} style={styles.button}>
            <Image 
            source={require('../assets/message.png')} 
            style={styles.buttonIcon} 
            />
          <Text style={styles.buttonText}>Comment</Text>
        </Pressable>
        <Pressable  onPressIn={onPressShare} style={styles.button}>
            <Image 
            source={require('../assets/share.png')} 
            style={styles.buttonIcon} 
            />
          <Text style={styles.buttonText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 12,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    overflow: 'hidden'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    padding: 12
  },

  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10
  },

  headerText: {
    color: 'grey',
    fontSize: 18,
  },

  postImage: {
    width: '100%',
    height: 200,
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },

  button: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5
  },
  
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center'
  },

  buttonIcon: {
    width: 16,
    height: 16,
  },

});