// BottomNav navigator

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouteProps, TabRoutes } from '../routes/tab-routes';
import { LogBox, Pressable, View } from 'react-native';
import { HomeIcon, ListIcon, PersonIcon } from '../../assets/icons';
import { AppNavigator } from './app-navigator';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../routes/app-routes';
LogBox.ignoreAllLogs(true) // for interviews


const Tab = createBottomTabNavigator<TabRouteProps>();

export const BottomTabs = () => {

    const navigation = useNavigation();
    
    return(
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen name={TabRoutes.Books} component={
                    () => <View style ={{flex: 1, backgroundColor: 'red'}}></View>
                }
                    options={{ 
                        tabBarIcon: () => <ListIcon width={25} height={25} />
                    }}                  
                 />    
                <Tab.Screen name={TabRoutes.Home} component={
                    () => <View style ={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                        <Pressable 
                            onPress={() => navigation.navigate(AppRoutes.Home)}
                            style={{width: 50, height: 50, backgroundColor: 'red'}}></Pressable>
                    </View>}
                    options={{ 
                        tabBarLabel: 'Home',
                        tabBarIcon: () => <HomeIcon width={25} height={25} />
                    }}    
                />
                <Tab.Screen name={TabRoutes.Login} component={() => <View style ={{flex: 1, backgroundColor: 'green'}}></View>}
                    options={{ 
                        tabBarLabel: 'Profile',
                        tabBarIcon: () => <PersonIcon width={25} height={25} />
                    }} 
                /> 

            </Tab.Navigator>
        </>
    )
};
