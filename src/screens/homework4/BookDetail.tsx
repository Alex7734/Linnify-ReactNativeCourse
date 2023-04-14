import { StackScreenProps } from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';
import { HomeworkRouteProps, HomeworkRoutes } from '../../navigation/routes/homework-routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const BookDetail = (props : StackScreenProps<HomeworkRouteProps, HomeworkRoutes.BookDetail>) => {
    {console.log(props.route.params)}

    return (
    <View style={styles.container}>
      <Text style={styles.text}>Book Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})