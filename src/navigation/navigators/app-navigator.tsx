import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable } from 'react-native';
import { Login } from '../../screens/Login';
import { Home } from '../../screens/Home';
import { AppRouteProps, AppRoutes } from '../routes/app-routes';
import { BottomTabs } from './tab-navigator';

// headerTitle to overwrite the title
// headerLeft to add a component to the left of the title
// headerRight to add a component to the right of the title
// headerStyle to overwrite the style of the header
// headerTitleStyle to overwrite the style of the title
// headerBackTitle to overwrite the title of the back button
// headerBackButton to overwrite the back button
// headerTranparent to make the header transparent
// header to overwrite the header


// when passing props to a component you do props = {}
// if i have an object { id: 1, ... }

const Stack = createStackNavigator<AppRouteProps>();

export const AppNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName={AppRoutes.Login}
        screenOptions={
            {
                headerStyle: {backgroundColor:'blue'}
            }
        }>
            <Stack.Screen 
            name = {AppRoutes.Home} 
            // options = {{
            //     title: 'Home Screen', 
            //     headerTitle: () => <Text>Something</Text>,
            //     headerLeft: () => <Text>Left</Text>,
            //     headerRight: () => <Text>Right</Text>,
            //     headerTransparent: false,
            // }} 
            options= {({navigation, route}) => {
                return {
                    title : route.params?.title,
                    headerRight: () => <Pressable 
                    style={{width: 50, height: 50, backgroundColor: 'pink'}}
                    onPress={() => navigation.navigate('Login', {
                        title: 'Test',
                    })}>       
                    </Pressable>,        
                }
            }}
            component={Home} 
            />
           
            <Stack.Screen name = {AppRoutes.Login} 
                options= {({navigation, route}) => {

                    return {
                        headerLeft: () => <Pressable 
                        style={{width: 50, height: 50, backgroundColor: 'pink'}}
                        onPress={() => {navigation.goBack()}}>       
                        </Pressable>,        
                    }
                }}
             component={BottomTabs} />
        </Stack.Navigator>
    )
}
