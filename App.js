import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
//import useState from react native
import React, { useState } from 'react';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionaireScreen from './screens/QuestionaireScreen';
import { accentColor } from './beautify/colors';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* <SplahScreen /> */}
            {/* <LoginScreen /> */}
            {/* <HomeScreen /> */}
            {/* <QuestionaireScreen /> */}
            {/* <ProfileScreen /> */}
            {/* <SettingScreen /> */}
            <StatusBar style="light" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Questionaire"
                    component={QuestionaireScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
