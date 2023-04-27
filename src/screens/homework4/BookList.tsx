import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
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
import { getBooks as fetchBooks } from '../../services/book.service';

export function BookList({navigation}: StackScreenProps<HomeworkRouteProps, HomeworkRoutes.BookList> ): JSX.Element {
  const storage = new MMKV();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [favoriteCount, setFavoriteCount] = useState<number>(0);
  const [reachedEnd, setReachedEnd] = useState<boolean>(false);

  const networkStatus = useNetworkStatus();
  const {books, setCurrentBook, getBooks} = useBookStore((state: BookState) => {
    return {books: state.books, setCurrentBook: state.setCurrentBooks, getBooks: state.getBooks}
  });

  networkStatus && console.log('networkStatus', networkStatus);

  useEffect(() => {
    return () => console.log('left screen with return');
  }, [favoriteCount]);

  // const handleFetch = async() => {
  //   const data = await fetchBooks();
  //   getBooks(data);
  // }

  // useEffect(() => {
  //   handleFetch()
  // }, []);
  // same implementation of this useEffect

  const onEndReached = () => {
    if (reachedEnd)
      return
    setPage(prevPage => prevPage + 1);
    setLoadingMore(true);
  }

  useEffect(() => {
    fetchBooks(page).then((data: Post[]) => {
      getBooks([...books, ...data])
      if (data && data.length == 0) {
        setReachedEnd(true);
      }
      setLoading(false);
      setLoadingMore(false);
    }).catch((error: Error) => {
      console.log('error', error);
    });

  }, [page])

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
    <>
      <FlatList
        style={styles.flatListContainer}
        data={books}
        renderItem={renderItem}
        keyExtractor={(item: Post) => item.name}
        ListEmptyComponent={() =>  <>{loading ?  <ActivityIndicator size="large" /> : <Text>No data...</Text>}</>}
        ListFooterComponent={() => <Footer favoriteCount={favoriteCount} />}
        ListHeaderComponent={SearchBar}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
      />
      {loadingMore && <ActivityIndicator size="small" />}
    </>
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

