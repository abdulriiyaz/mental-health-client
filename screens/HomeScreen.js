import { View, Text, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
    return (
        <>
            <View
                style={tw`h-full w-full bg-[${backgroundColor}] flex justify-center items-center`}
            >
                <StatusBar style="auto" />
                <View
                    style={tw`flex h-8 w-50 items-center justify-center`}
                ></View>
            </View>
        </>
    );
};

export default HomeScreen;
