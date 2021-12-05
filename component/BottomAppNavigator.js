import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ride from '../screens/Ride';
import RideHistory from '../screens/RideHIstory';

const Tab = createBottomTabNavigator();

export default class BottomAppNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Ride" component={Ride}/>
                    <Tab.Screen name="RideHistory" component={RideHistory}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}