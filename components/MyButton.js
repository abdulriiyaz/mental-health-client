import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import {
    backgroundColor,
    accentColor,
    textColor,
    secondaryColor,
} from "../beautify/colors";

const MyButton = (props) => {
    return (
        <>
            <TouchableOpacity
                style={tw`flex h-14 w-full p-4 bg-[${accentColor}] rounded-2xl font-bold text-[${textColor}] text-center items-center justify-center`}
                onPress={() => {
                    //Auth and navigate to Home/QuestionaireScreen
                }}
            >
                <Text
                    style={tw`tracking-tight text-[${textColor}] text-lg text-center items-center justify-center`}
                >
                    {props.title}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default MyButton;
