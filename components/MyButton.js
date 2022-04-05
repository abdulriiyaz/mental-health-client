import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {
    backgroundColor,
    accentColor,
    textColor,
    secondaryColor,
} from '../beautify/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const MyButton = (props) => {
    return (
        <>
            <TouchableOpacity
                style={tw`flex flex-row h-14 w-full p-2 pl-6 pr-0 mb-4 bg-[${accentColor}] rounded-2xl font-bold text-center items-center justify-between`}
                onPress={() => {
                    //Auth and navigate to Home/QuestionaireScreen
                    switch (props.name) {
                        case 'task':
                            props.navigation.navigate('Splash');
                            break;

                        case 'quiz':
                            props.navigation.navigate('Questionaire');
                            break;

                        case 'otp':
                            props.navigation.navigate('Home');
                            break;
                        default:
                            break;
                    }
                }}
            >
                <Text
                    style={tw`tracking-wide text-[${textColor}] text-sm text-center p-0 m-0 items-center justify-center`}
                >
                    {props.title}
                </Text>
                <Icon
                    name={props.icon}
                    size={20}
                    color={secondaryColor}
                    style={tw`flex w-18 text-center justify-center items-center p-4 h-14`}
                ></Icon>
            </TouchableOpacity>
        </>
    );
};

export default MyButton;
