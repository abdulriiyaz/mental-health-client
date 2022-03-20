import {
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import React, { useState, useContext } from "react";
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

const MenuModal = (props) => {
    const menuModal = props.menuModal;
    const setMenuModal = props.setMenuModal;

    const toggleMenu = () => {
        setMenuModal(!menuModal);
    };

    return (
        <SafeAreaView style={tw`h-full w-full bg-[${backgroundColor}] m-0 p-2 py-10`}>
            <View
                style={tw`h-full w-full bg-[${secondaryColor}] flex my-auto p-4 rounded-2xl shadow-xl overflow-hidden justify-center text-center `}
            >
                <TouchableOpacity
                    onPress={() => {
                        //props.toggleMenu();
                    }}
                    style={tw`flex w-full flex-row justify-between py-1.5 px-4 mt-4 h-1/9 border-2 border-[${backgroundColor}] rounded-lg`}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        PROFILE
                    </Text>
                    <Icon
                        name="user"
                        style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        //props.toggleMenu();
                    }}
                    style={tw`flex w-full flex-row py-1.5 justify-between px-4 mt-4 h-1/9 border-2 border-[${backgroundColor}] rounded-lg`}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        SETTINGS
                    </Text>
                    <Icon
                        name="setting"
                        style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        //props.toggleMenu();
                    }}
                    style={tw`flex w-full flex-row justify-between py-1.5 px-4 mt-4 h-1/9 border-2 border-[${backgroundColor}] rounded-lg`}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        SUPPORT
                    </Text>
                    <Icon
                        name="question"
                        style={tw`text-xl text-[${accentColor}] text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        toggleMenu();
                    }}
                    style={tw`flex flex-row justify-between px-4 py-1.5 w-full mt-4 h-1/9 border-2 border-[${backgroundColor}] rounded-lg`}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        CLOSE
                    </Text>
                    <Icon
                        name="logout"
                        style={tw`text-xl text-[${accentColor}] p-2.5`}
                        size={2}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MenuModal;
