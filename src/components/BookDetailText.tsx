import { StackScreenProps } from '@react-navigation/stack';
import {View, Text, StyleSheet, Image} from 'react-native';
import { HomeworkRouteProps, HomeworkRoutes } from '../navigation/routes/homework-routes';
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import { BookDetailsRef } from '../types/BookDetailsRef';
import { BookState, useBookStore } from '../store/useBookStore';

export const BookDetailText = forwardRef(( props : StackScreenProps<HomeworkRouteProps, HomeworkRoutes.BookDetail>, ref: ForwardedRef<BookDetailsRef>) => {
    const {book} = useBookStore((state: BookState) => {
      return {book: state.book}
    });
      const [color, setColor] = useState('white');

      useImperativeHandle(ref, ():BookDetailsRef => ({
        handleChangeBackground: (value: string) => {
          setColor(value);
        }
      }));

      return (
        <View style={[styles.content, {backgroundColor: color}]}>
          <Text style={styles.description}>{book?.description}</Text>
        </View>
    );
  }
)
const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Arial',
    fontSize: 16,
    lineHeight: 24,
    padding: 3,
    color: '#666',
  },
});