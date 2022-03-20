import {
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableOpacity,
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
    return (
        <View style={tw`h-full w-full bg-[${backgroundColor}] m-0 p-6`}>
            <View
                style={tw`h-2/3 w-full bg-white flex items-center my-auto p-10 border-4 border-black rounded-2xl shadow-xl overflow-hidden text-center `}
            >
                <Icon
                    onPress={() => {
                        setMenuModal(!menuModal);
                    }}
                    name="close"
                    size={30}
                    color={backgroundColor}
                    style={tw`flex w-18 text-center border-4 border-black items-center p-4 h-18`}
                ></Icon>
            </View>
        </View>
    );
};

export default MenuModal;
