import { StackScreenProps } from '@react-navigation/stack';
import {View, Text, StyleSheet, Image} from 'react-native';
import { HomeworkRouteProps, HomeworkRoutes } from '../../navigation/routes/homework-routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';

export const BookDetail = (props : StackScreenProps<HomeworkRouteProps, HomeworkRoutes.BookDetail>) => {
    const book = props.route.params;
    
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.name}>{book.name}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <Image  source={book.image} style={styles.photo}/>
      <View style={styles.content}>
        <Text style={styles.description}>{book.description}</Text>
      </View>
      <Image
        source={book.isFavorite ? require('../../assets/heart-filled.png') :  require('../../assets/heart-outline.png')}
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
    marginBottom: 2,
  },
  author: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 33,
    height: 30,
  },
});