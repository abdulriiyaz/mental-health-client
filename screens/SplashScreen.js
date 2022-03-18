import { Text, View, StatusBar, Image } from "react-native";
import React, { Component } from "react";
import {
    accentColor,
    textColor,
    secondaryColor,
    backgroundColor,
} from "../beautify/colors.js";

import tw from "twrnc";

export const SplashScreen = () => {
    return (
        <View
            style={tw`bg-[${backgroundColor}] h-full w-full flex justify-center items-center p-0 m-0`}
        >
            <StatusBar style="auto" />
            <View style={tw`h-full w-full justify-center p-5 m-5 items-center`}>
                <View
                    style={tw`bg-[${secondaryColor}] h-80 w-80 justify-center rounded-full p-0 m-0 justify-center items-center`}
                >
                    <View
                        style={tw`bg-[${secondaryColor}] h-96 w-96 justify-center items-center rounded-full p-0 m-0`}
                    >
                        <Image
                            style={tw`h-48 w-48 p-8 mb-2`}
                            source={require("../assets/icon.png")}
                        ></Image>
                        <Text
                            style={tw`text-[${textColor}] text-center text-4xl font-bold mt-5`}
                        >
                            MENTALLY
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;
