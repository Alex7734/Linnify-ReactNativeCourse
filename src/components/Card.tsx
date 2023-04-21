import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable } from 'react-native';
import { Post } from '../types/Post.interface';
import { HomeIcon } from '../assets/icons';

// TODO: do not depend on the components from this directory, move it to screen components

interface Props{
  post: Post,
  handleFavouriteChange: (isFavourite: boolean) => void
}

export function Card({post, handleFavouriteChange}:Props) {

  const [isFavorite, setIsFavorite] = useState(false);


  const handleFavorite = () => {
    handleFavouriteChange(isFavorite);
    post.isFavorite = !isFavorite;
    setIsFavorite(post.isFavorite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>{post.name}</Text>
      <Pressable onPress={handleFavorite} style={styles.favoriteIcon}>
        <Image style={styles.icon} source={isFavorite ? require('../assets/heart-filled.png') : require('../assets/heart-outline.png')} />
      </Pressable>
      </View>
      <Image  source={post.image} style={styles.image}/>
      <View style={styles.content}>
        <Text numberOfLines={3} style={styles.description}>{post.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7, 
    borderWidth: 0.5
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  favoriteIcon: {
    marginLeft: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 35,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 31,
    height: 28,
  },
  image: {
    width: "100%",
    height: 250,
    marginTop: 5,
    resizeMode: "contain",
  },
  content: {
    padding: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: "bold",
    fontFamily: 'Arial',
    fontSize: 22,
  },
  description: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    padding: 5
  },
});