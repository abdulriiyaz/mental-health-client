import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    backgroundColor,
    accentColor,
    secondaryColor,
    textColor,
} from '../beautify/colors';

const SettingScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={tw`w-full h-full p-2 bg-[${backgroundColor}] flex items-center justify-center pt-10`}
        >
            <View
                style={tw`flex h-2/4 w-full mt-8 items-center justify-evenly overflow-hidden px-2.5 py-2.5 `}
            >
                <TouchableOpacity
                    style={tw`flex w-full flex-row justify-between h-2/9 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                    onPress={() => {}}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        EXPLORE
                    </Text>
                    <Icon
                        name="search"
                        style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex w-full flex-row justify-between h-2/9 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                    onPress={() => {}}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        ABOUT US
                    </Text>
                    <Icon
                        name="info-circle"
                        style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex w-full flex-row justify-between h-2/9 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                    onPress={() => {}}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        THEME
                    </Text>
                    <Icon
                        name="adjust"
                        style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex w-full flex-row justify-between h-2/9 border-2 border-[${secondaryColor}] p-2 rounded-lg`}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                >
                    <Text
                        style={tw`text-sm text-[${accentColor}] tracking-wide text-center p-4`}
                    >
                        LOG OUT
                    </Text>
                    <Icon
                        name="times-circle"
                        style={tw`text-xl text-[${accentColor}] tracking-wide text-center p-2.5`}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SettingScreen;
