import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
    backgroundColor,
    secondaryColor,
    accentColor,
} from "../beautify/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProfileScreen = () => {
    return (
        <SafeAreaView
            style={tw`w-full h-full p-2 bg-[${backgroundColor}] flex items-center justify-center`}
        >
            <View
                style={tw`flex mt-10 items-center p-4 w-full h-full rounded-2xl`}
            >
                <Image
                    style={tw`w-44 h-44 rounded-full border-2 border-[${secondaryColor}] mt-8 `}
                    source={require("../assets/profile.jpeg")}
                />
                <Text
                    style={tw`text-center text-xl text-white mt-2 tracking-wide font-bold`}
                >
                    Username
                </Text>

                <View
                    style={tw`flex h-2/4 w-full items-center justify-center p-2 overflow-hidden`}
                >
                    <TouchableOpacity
                        style={tw`flex w-full flex-row justify-between mt-2 h-2/9 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                        onPress={() => {}}
                    >
                        <Text
                            style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                        >
                            Privacy
                        </Text>
                        <Icon
                            name="key"
                            style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex w-full border-4 border-[${accentColor}] mt-4 flex-row justify-between h-2/9 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                        onPress={() => {}}
                    >
                        <Text
                            style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                        >
                            Security
                        </Text>
                        <Icon
                            name="eye"
                            style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex w-full flex-row justify-between h-2/9 mt-4 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                        onPress={() => {}}
                    >
                        <Text
                            style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                        >
                            Close
                        </Text>
                        <Icon
                            name="times-circle"
                            style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
