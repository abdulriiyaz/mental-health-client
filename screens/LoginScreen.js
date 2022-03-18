import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { backgroundColor, accentColor, textColor } from "../beautify/colors";

const LoginScreen = () => {
    return (
        <>
            <View
                style={tw`h-full w-full bg-[${backgroundColor}] flex justify-center items-center`}
            >
                <StatusBar style="auto" />
                <View style={tw`flex h-8 w-50 items-center justify-center`}>
                    <Text
                        style={tw`tracking-wide text-[${textColor}] text-3xl text-center`}
                    >
                        Phone Number
                    </Text>
                    <TextInput
                        style={tw`h-12 w-54 text-xl tracking-wide rounded-xl m-5 pl-5 items-center border-2 border-[${accentColor}] font-bold text-[${textColor}]`}
                    ></TextInput>
                    <TouchableOpacity
                        style={tw`flex h-12 w-54 bg-[${accentColor}] rounded-2xl font-bold text-[${textColor}] text-center items-center justify-center`}
                    >
                        <Text
                            style={tw`tracking-tight text-[${textColor}] text-xl text-center items-center justify-center`}
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
