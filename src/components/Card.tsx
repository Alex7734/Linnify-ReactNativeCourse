import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable } from 'react-native';
import { Post } from '../types/Post.interface';

interface Props{
  post: Post,
  handleFavouriteChange: (isFavourite: boolean) => void
}

export function Card({post, handleFavouriteChange}:Props) {

  const [isFavorite, setIsFavorite] = useState(false);


  const handleFavorite = () => {
    handleFavouriteChange(isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>{post.name}</Text>
      <Pressable onPress={handleFavorite} style={styles.favoriteIcon}>
        <Image style={styles.icon} source={isFavorite ? require('../assets/heart-filled.jpg') : require('../assets/heart-outline.jpg')} />
      </Pressable>
      </View>
      <Image  source={post.image} style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
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
    width: 25,
    height: 25,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    color: "#333333",
  },
  description: {
    fontSize: 16,
    color: "#555555",
    lineHeight: 20,
  },
});