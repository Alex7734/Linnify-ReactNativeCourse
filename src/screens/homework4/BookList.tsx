import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';

import {Card} from '../../components/Card';
import {Post} from '../../types/Post.interface';
import {Footer} from './homework4-components/FooterBookList';
import { HomeworkRoutes, HomeworkRouteProps } from '../../navigation/routes/homework-routes';
import { StackScreenProps } from '@react-navigation/stack';
import { SearchBar } from '../../components/SearchBar';
import { useNetworkStatus } from '../../hooks/use-network-status.hook';
import { BookState, useBookStore } from '../../store/useBookStore';
import { MMKV } from 'react-native-mmkv';

export function BookList({navigation}: StackScreenProps<HomeworkRouteProps, HomeworkRoutes.BookList> ): JSX.Element {
  const storage = new MMKV();
  const [favoriteCount, setFavoriteCount] = useState<number>(0);
  const networkStatus = useNetworkStatus();
  const {books, setCurrentBook} = useBookStore((state: BookState) => {
    return {books: state.books, setCurrentBook: state.setCurrentBooks}
  });

  networkStatus && console.log('networkStatus', networkStatus);

  useEffect(() => {
    console.log('Favorite count: ', favoriteCount);
    return () => console.log('left screen with return');
  }, [favoriteCount]);


  useEffect(() => {
    const bookChosen = storage.set('book', "A book");
    console.log('book', bookChosen);
  })

  const handleFavouriteChange = (isFavourite: boolean) => {
    if (isFavourite) {
      return setFavoriteCount(prevCount => prevCount - 1);
    }
    return setFavoriteCount(prevCount => prevCount + 1);
  };

  const handleNavigation = (item: Post) => {
    setCurrentBook(item);
    navigation.navigate(HomeworkRoutes.BookDetail);
  };

  const renderItem = ({item}: ListRenderItemInfo<Post>) => (
    <Pressable onPress={() => handleNavigation(item)}>
      <Card post={item} handleFavouriteChange={handleFavouriteChange} />
    </Pressable>
  );

  return (
    <FlatList
      style={styles.flatListContainer}
      data={books}
      renderItem={renderItem}
      keyExtractor={(item: Post) => item.name}
      ListEmptyComponent={() => <Text>No data</Text>}
      ListFooterComponent={() => <Footer favoriteCount={favoriteCount} />}
      ListHeaderComponent={SearchBar}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },

  flatListContainer: {
    padding: 12,
    backgroundColor: '#F7F7F0',
  },
});

