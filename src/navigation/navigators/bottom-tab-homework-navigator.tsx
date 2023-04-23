
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouteProps, TabRoutes } from '../routes/bottom-tab-homework-routes';
import { LogBox, StyleSheet, View } from 'react-native';
import { HomeIcon, PersonIcon, SettingsIcon } from '../../assets/icons';
import { Home } from '../../screens/homework4/Home';
import { Settings } from '../../screens/homework4/Settings';
import { Profile } from '../../screens/homework4/Profile';
LogBox.ignoreAllLogs(true);


const Tab = createBottomTabNavigator<TabRouteProps>();

export const BottomTabs = () => {

    return(
        <>
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarStyle: styles.bottomTab
            }}>
                <Tab.Screen name={TabRoutes.Settings} component={() => <Settings />}
                    options={{ 
                        tabBarLabel: 'Settings',
                        tabBarIcon: () => <SettingsIcon width={25} height={25} />
                    }}                  
                 />    
                <Tab.Screen name={TabRoutes.Home} component={() => <Home />}
                    options={{ 
                        tabBarLabel: 'Home',
                        tabBarIcon: () => <HomeIcon width={25} height={25} />
                    }}    
                />
                <Tab.Screen name={TabRoutes.Profile} component={() => <Profile />}
                    options={{ 
                        tabBarLabel: 'Profile',
                        tabBarIcon: () => <PersonIcon width={25} height={25} />
                    }} 
                /> 

            </Tab.Navigator>
        </>
    )
};

const styles = StyleSheet.create({
    bottomTab: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 10,
        backgroundColor: '#d3cae1',
        borderRadius: 50,
        height: 60,
        paddingBottom: 5
    }
})