import {
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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

const HomeScreen = () => {
    //const tasks = [{}];
    return (
        <>
            <View
                style={tw`h-full w-full bg-[${backgroundColor}] flex items-center m-0 p-2`}
            >
                {/* <StatusBar style="auto" /> */}
                <View
                    style={tw`flex flex-row h-20 top-0 left-0 p-0 rounded-2xl w-full mt-8 justify-between text-center`}
                >
                    <Icon
                        onPress={() => {
                            //Side Menu Component
                            Toast.show("Pressed Menu");
                        }}
                        name="bars"
                        size={30}
                        color={accentColor}
                        style={tw`mt-4 flex p-2 w-2/9 text-center`}
                    />
                    <Icon
                        onPress={() => {
                            //ProfileScreen Component
                            Toast.show("Pressed Profile");
                        }}
                        name="user"
                        size={30}
                        color={accentColor}
                        style={tw`mt-4 flex p-2 w-2/9 text-center`}
                    />
                </View>
                <View
                    style={tw`flex h-2/4 border-2 border-[${secondaryColor}] rounded-lg w-full p-2`}
                >
                    <Text
                        style={tw`font-bold text-white text-xl p-2 text-center tracking-wide mb-1.5`}
                    >
                        Available Tasks
                    </Text>
                    <ScrollView
                        style={tw`flex h-2/4 bg-[${backgroundColor}] p-2 rounded-xl w-full`}
                    >
                        <ListItems task="Smoke a cigarette" />
                        <ListItems task="Get Fucked" />
                        <ListItems task="Be a Cuck" />
                        <ListItems task="Fuck Everybody" />
                        <ListItems task="Fuck your life" />
                    </ScrollView>
                </View>
                <Text>Hello World!</Text>
            </View>
        </>
    );
};

const ListItems = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    setIsChecked(!isChecked);
                }}
            >
                <View
                    style={tw`flex flex-row h-16 bg-[${secondaryColor}] border border-[${textColor}] rounded-xl items-center justify-between w-full mb-4`}
                >
                    <Text
                        style={tw`font-bold text-[${accentColor}] text-xl tracking-tight p-4`}
                    >
                        {props.task}
                    </Text>
                    <Icon
                        name={isChecked ? "check" : ""}
                        size={30}
                        color={accentColor}
                        style={tw`flex w-2/9 text-center`}
                    />
                </View>
            </TouchableOpacity>
        </>
    );
};

export default HomeScreen;
