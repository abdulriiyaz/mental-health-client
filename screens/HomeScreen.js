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
import MenuModal from "../components/MenuModal";

const HomeScreen = () => {
    const tasks = [
        "Get Something Done",
        "Do Some Exercies",
        "Do Some Work",
        "Clean The House",
        "Beat up Rohit",
        "Steal Some Money",
        "Say Sorry To GOD",
    ];
    const [menuModal, setMenuModal] = useState(false);
    return (
        <>
            {menuModal ? (
                <MenuModal menuModal={menuModal} setMenuModal={setMenuModal} />
            ) : (
                <>
                    <SafeAreaView
                        style={tw`h-full w-full bg-[${backgroundColor}] flex items-center m-0 p-2`}
                    >
                        {/* <StatusBar style="auto" /> */}

                        <View
                            style={tw`flex flex-row h-1/9 top-0 left-0 p-0 rounded-2xl w-full mt-4 justify-between text-center`}
                        >
                            <Icon
                                onPress={() => {
                                    //Menu Modal Component
                                    setMenuModal(!menuModal);
                                }}
                                name="bars"
                                size={25}
                                color={accentColor}
                                style={tw`mt-4 flex p-2 w-2/9 text-center`}
                            />
                            <Icon
                                onPress={() => {
                                    //ProfileScreen Component
                                    Toast.show("Pressed Profile");
                                }}
                                name="user"
                                size={23}
                                color={accentColor}
                                style={tw`mt-4 flex p-2 w-2/9 text-center`}
                            />
                        </View>
                        <View
                            style={tw`flex h-2/4 border-4 border-[${secondaryColor}] rounded-lg w-full p-2`}
                        >
                            <Text
                                style={tw`text-white text-xl mx-1.5 py-4 rounded-lg bg-[${secondaryColor}] mt-1. text-center tracking-wide mb-1.5`}
                            >
                                Available Tasks
                            </Text>
                            <ScrollView
                                style={tw`flex h-2/4 bg-[${backgroundColor}] p-1.5 mt-1.5 rounded-xl w-full`}
                            >
                                {/* <ListItems task="Smoke a cigarette" />
                        <ListItems task="Get Fucked" />
                        <ListItems task="Be a Cuck" />
                        <ListItems task="Fuck Everybody" />
                        <ListItems task="Fuck your life" /> */}
                                {tasks.map((item, idx) => {
                                    return <ListItems task={item} key={idx} />;
                                })}
                            </ScrollView>
                        </View>
                        <View
                            style={tw`flex mt-4 h-full w-full rounded-lg border-4 border-[${secondaryColor}] p-12 m-2 items-center`}
                        >
                            <MyButton title="TAKE A QUIZ" icon="paperclip" />
                            <MyButton title="GENERATE TASK" icon="pluscircle" />
                        </View>
                    </SafeAreaView>
                </>
            )}
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
                    style={tw`flex flex-row h-16 bg-[${secondaryColor}] border border-[${accentColor}] rounded-xl items-center justify-between w-full mb-2.5 mt-1.5`}
                >
                    <Text
                        style={tw`text-[${textColor}] text-sm tracking-tight p-4`}
                    >
                        {props.task}
                    </Text>
                    <Icon
                        name={isChecked ? "check" : ""}
                        size={20}
                        color={accentColor}
                        style={tw`flex w-2/9 text-center`}
                    />
                </View>
            </TouchableOpacity>
        </>
    );
};

export default HomeScreen;
