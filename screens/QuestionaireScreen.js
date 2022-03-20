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
                style={tw`flex w-full h-5/6 border-4 border-[${secondaryColor}] p-6 items-center justify-evenly rounded-2xl shadow-sm`}
            >
                <Text
                    style={tw`w-full h-42 border-4 border-[${accentColor}] text-center py-4 my-4 text-white text-xl rounded-lg bg-[${backgroundColor}]`}
                >
                    Are you depressed?
                </Text>
                <MyButton title="Yes" icon="checkcircle" />
                <MyButton title="No" icon="closecircle" />
                <MyButton title="Maybe" icon="meh" />
                <MyButton title="Not Sure" icon="warning" />
            </View>
        </SafeAreaView>
    );
};

export default QuestionaireScreen;
