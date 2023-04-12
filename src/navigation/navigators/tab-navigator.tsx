// BottomNav navigator

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouteProps, TabRoutes } from '../routes/tab-routes';
import { LogBox, View } from 'react-native';
import { HomeIcon, ListIcon, PersonIcon } from '../../assets/icons';
LogBox.ignoreAllLogs(true) // for interviews


const Tab = createBottomTabNavigator<TabRouteProps>();

export const BottomTabs = () => {
    return(
        <>
            <Tab.Navigator screenOptions={{
                headerTitle: 'Alex Mihoc',
            }}>
                <Tab.Screen name={TabRoutes.Books} component={
                    () => <View style ={{flex: 1, backgroundColor: 'red'}}></View>}
                    options={{ 
                        tabBarIcon: () => <ListIcon width={25} height={25} />
                    }}                  
                 />    
                <Tab.Screen name={TabRoutes.Home} component={
                    () => <View style ={{flex: 1, backgroundColor: 'blue'}}></View>}
                    options={{ 
                        tabBarIcon: () => <HomeIcon width={25} height={25} />
                    }}    
                />
                <Tab.Screen name={TabRoutes.Login} component={
                    () => <View style ={{flex: 1, backgroundColor: 'yellow'}}></View>}
                    options={{ 
                        tabBarIcon: () => <PersonIcon width={25} height={25} />
                    }} 
                /> 

            </Tab.Navigator>
        </>
    )
};
