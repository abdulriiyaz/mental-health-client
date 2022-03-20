import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import {
    backgroundColor,
    accentColor,
    textColor,
    secondaryColor,
} from "../beautify/colors";
import Icon from "react-native-vector-icons/AntDesign";

const MyButton = (props) => {
    return (
        <>
            <TouchableOpacity
                style={tw`flex flex-row border border-white h-14 w-full p-2 pl-6 pr-6 mb-4 bg-[${accentColor}] rounded-2xl font-bold text-center items-center justify-between`}
                onPress={() => {
                    //Auth and navigate to Home/QuestionaireScreen
                }}
            >
                <Text
                    style={tw`tracking-tight text-[${textColor}] text-lg text-center p-0 m-0 items-center justify-center`}
                >
                    {props.title}
                </Text>
                <Icon
                    name="heart"
                    size={20}
                    color={secondaryColor}
                    style={tw`flex w-18 text-center justify-center border border-white items-center p-4 h-14`}
                ></Icon>
            </TouchableOpacity>
        </>
    );
};

export default MyButton;
