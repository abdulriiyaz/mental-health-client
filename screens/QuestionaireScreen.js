import {
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import React, { useState, createContext } from "react";
import tw from "twrnc";
import {
    accentColor,
    backgroundColor,
    secondaryColor,
    textColor,
} from "../beautify/colors";
//import { FaBrain } from "react-icons/fa";
import Icon from "react-native-vector-icons/AntDesign";
import Toast from "react-native-simple-toast";
import MyButton from "../components/MyButton";

const QuestionaireScreen = () => {
    return (
        <SafeAreaView
            style={tw`h-full w-full bg-[${backgroundColor}] m-0 py-4 px-1.5 flex justify-center items-center shadow-xl`}
        >
            <View
                style={tw`flex w-full h-2/3 bg-[${secondaryColor}] p-4 items-center justify-center rounded-2xl`}
            >
                <Text
                    style={tw`w-full h-25 text-center py-4 text-white my-4 text-2xl rounded-lg bg-[${backgroundColor}]`}
                >
                    Are you depressed?
                </Text>
                <MyButton title="Yes" icon="checkcircle" />
                <MyButton title="No" icon="closecircle" />
            </View>
        </SafeAreaView>
    );
};

export default QuestionaireScreen;
