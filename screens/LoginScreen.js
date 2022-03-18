import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
    backgroundColor,
    accentColor,
    textColor,
    secondaryColor,
} from "../beautify/colors";
import Icon from "react-native-vector-icons/AntDesign";

const LoginScreen = () => {
    return (
        <>
            <View
                style={tw`h-full w-full bg-[${backgroundColor}] flex justify-center items-center m-0 p-0`}
            >
                {/* <StatusBar style="auto" /> */}
                <View
                    style={tw`flex h-8 w-full p-4 items-center justify-center`}
                >
                    <Icon
                        name="phone"
                        size={50}
                        color={accentColor}
                        style={tw`flex w-18 text-center items-center p-2 h-18`}
                    ></Icon>
                    <TextInput
                        //set keyboard type to number
                        placeholder="Enter Phone"
                        placeholderTextColor={secondaryColor}
                        maxLength={10}
                        keyboardType="number-pad"
                        style={tw`h-14 w-full text-xl tracking-tight rounded-xl m-5 pl-5 items-center border-2 border-[${secondaryColor}] font-bold text-[${textColor}]`}
                    ></TextInput>
                    <TouchableOpacity
                        style={tw`flex h-14 w-full p-4 bg-[${accentColor}] rounded-2xl font-bold text-[${textColor}] text-center items-center justify-center`}
                        onPress={() => {
                            //Auth and navigate to Home/QuestionaireScreen
                        }}
                    >
                        <Text
                            style={tw`tracking-tight text-[${textColor}] text-lg text-center items-center justify-center`}
                        >
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default LoginScreen;
