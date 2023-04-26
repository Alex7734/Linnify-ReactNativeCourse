import { StackScreenProps } from '@react-navigation/stack';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { HomeworkRouteProps, HomeworkRoutes } from '../../navigation/routes/homework-routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { BookDetailText } from '../../components/BookDetailText';
import { useEffect, useRef } from 'react';
import { BookDetailsRef } from '../../types/BookDetailsRef';
import { BookState, useBookStore } from '../../store/useBookStore';
import { MMKV } from 'react-native-mmkv';

export const BookDetail = (props : StackScreenProps<HomeworkRouteProps, HomeworkRoutes.BookDetail>) => {
    const storage = new MMKV();
    const detailTextRef = useRef<BookDetailsRef>(null);
    const randomColor = (): string => {
      let result = '';
      for (let i = 0; i < 6; ++i) {
        const value = Math.floor(16 * Math.random());
        result += value.toString();
      }
      return '#' + result;
    };

    const {book} = useBookStore((state: BookState) => {
      return {book: state.book}
    });

    useEffect(() => {
      const bookChosen = storage.getString('book');
      console.log('book', bookChosen);
    })


    return (
      <ScrollView style={styles.container}>
      <Text style={styles.name}>{book?.name}</Text>
      <Text style={styles.author}>{book?.author}</Text>
      <Pressable onPress={() => detailTextRef.current?.handleChangeBackground(randomColor())}>
        {book?.image && <Image source={book?.image} style={styles.photo}/>}
      </Pressable>
      <BookDetailText ref={detailTextRef} {...props}></BookDetailText>
      <Image 
        source={book?.isFavorite ? require('../../assets/heart-filled.png') :  require('../../assets/heart-outline.png')}
        style={styles.favoriteIcon}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  photo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  content: {
    flex: 1,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginBottom: 2,
  },
  author: {
    fontSize: 16,
    marginBottom: 8,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 33,
    height: 30,
  },
});