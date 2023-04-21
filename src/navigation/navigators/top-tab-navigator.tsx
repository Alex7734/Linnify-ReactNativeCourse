import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LogBox, View } from "react-native";
LogBox.ignoreAllLogs(true) // for interviews

const TopTab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Home" component={
                () => <View style ={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}></View>}
            />
            <TopTab.Screen name="Settings" component={
                () => <View style ={{flex: 1, backgroundColor: 'yellow'}}></View>}
            />
        </TopTab.Navigator>
    );
};
