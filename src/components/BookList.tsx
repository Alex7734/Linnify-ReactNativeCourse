import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Card} from './Card';
import { Post } from '../types/Post.interface';

const Footer = ({ favoriteCount }: any) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{favoriteCount} Favorites</Text>
    </View>
  );
};

function BookList(): JSX.Element {  
 
    const data:Post[] = [
        {
          name: "Title book 1", 
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum cum quod obcaecati dignissimos laborum, omnis neque accusantium nisi, autem mollitia ullam eum dolore tempora nihil molestiae impedit saepe nobis",
          image: require('../assets/photo.jpg')
        },
        {
          name: "Title book 2", 
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum cum quod obcaecati dignissimos laborum, omnis neque accusantium nisi, autem mollitia ullam eum dolore tempora nihil molestiae impedit saepe nobis",
          image: require('../assets/photo.jpg')
        },
        {
          name: "Title book 3", 
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum cum quod obcaecati dignissimos laborum, omnis neque accusantium nisi, autem mollitia ullam eum dolore tempora nihil molestiae impedit saepe nobis",
          image: require('../assets/photo.jpg')
        },
    ]
 
    const [favoriteCount, setFavoriteCount] = useState<number>(0);

    const handleFavouriteChange = (isFavourite: boolean) => {
      if (isFavourite) {
        return setFavoriteCount((prevCount) => prevCount - 1);
      } 
        return setFavoriteCount((prevCount) => prevCount + 1);
    };

  const renderItem = ({item}: ListRenderItemInfo<Post>) => 
  <View>
    <Card post={item} handleFavouriteChange={handleFavouriteChange}/>
  </View>

  return (
      <FlatList
        style={{padding: 12, backgroundColor: "#F7F7F0"}}
        data = {data}
        renderItem = {renderItem}
        keyExtractor = {(item: Post) => item.name}
        ListEmptyComponent={() => <Text>No data</Text>}
        ListFooterComponent={() => <Footer favoriteCount={favoriteCount} />}
        ItemSeparatorComponent={() => <View
          style={{
            marginVertical: 10,
          }}
        />}
      />
    );
}
const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    textAlign: "center",
  },

  headerContainer: {
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});



export default BookList;
