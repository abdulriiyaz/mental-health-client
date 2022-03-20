import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
//import useState from react native
import React, { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import QuestionaireScreen from "./screens/QuestionaireScreen";

export default function App() {
    return (
        <>
            {/* <SplashScreen /> */}
            {/* <LoginScreen /> */}
            {/* <HomeScreen /> */}
            {/* <QuestionaireScreen /> */}
            <StatusBar style="auto" />
        </>
    );
}
