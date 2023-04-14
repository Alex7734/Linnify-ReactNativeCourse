import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Pressable, Text, View} from 'react-native';
import {Login} from '../../screens/Login';
import {HomeworkRoutes, HomeworkRouteProps} from '../routes/homework-routes';
import {BottomTabs} from './bottom-tab-homework-navigator';
import {getHeaderTitle} from '@react-navigation/elements';
import {GithubIcon, GoBack, ListIcon} from '../../assets/icons';
import {MyHeader} from './navigator-components/MyHeader';
import {MyBackButton} from './navigator-components/MyBackButton';
import {MyListButton} from './navigator-components/MyListButton';
import {BookList} from '../../screens/homework4/BookList';
import { BookDetail} from '../../screens/homework4/BookDetail';

const Stack = createStackNavigator<HomeworkRouteProps>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeworkRoutes.App}
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          return (
            <>
              <MyHeader
                leftButton={
                  back ? (
                    <MyBackButton onPress={navigation.goBack} />
                  ) : (
                    <View // this inline view is a hacky way to center the icon
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                      }}></View>
                  )
                }
                rightButton={
                  <MyListButton
                    onPress={() => navigation.navigate(HomeworkRoutes.BookList)}
                  />
                }
                style={options.headerStyle}
              />
            </>
          );
        },
      }}>
      <Stack.Screen name={HomeworkRoutes.App} component={BottomTabs} />

      <Stack.Screen
        name={HomeworkRoutes.BookList}
        component={BookList}
      />

      <Stack.Screen
        name={HomeworkRoutes.BookDetail}
        component={BookDetail}
      />
    </Stack.Navigator>
  );
};
