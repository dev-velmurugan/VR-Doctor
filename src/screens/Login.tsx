import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from '@expo/vector-icons/AntDesign';



const Login = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        // navigation.navigate("PatientAssessmentSplit" as never);
        navigation.navigate("Home" as never)
    };

    return (
        <View className="flex-1 bg-white px-6 pt-[35px] rounded-[24px] overflow-hidden">

            <View className="items-center mb-2">
                <Image
                    source={require("../../assets/LoginLogo.png")}
                    style={{ width: 264, height: 264 }}

                    resizeMode="contain"
                />

                <Text className="font-zen text-[22px] font-bold text-[#173430] text-center leading-[100%] tracking-[-1%] mt-4">
                    Welcome Back 👋
                </Text>

                <Text
                    className="text-[14px] font-medium leading-[100%] tracking-[-0.01em] m-2 pb-[30px]"
                    style={{ fontFamily: "ZenKakuGothicAntique-Medium", color: "#617D79" }}
                >
                    Hi there, you’ve been missed
                </Text>

            </View>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#617D79CC"
                className="border border-gray-300 rounded-lg p-3 mb-4 w-full max-w-md self-center text-xs font-medium font-zen tracking-tight leading-none"
                keyboardType="email-address"
            />


            <TextInput
                placeholder="Password"
                placeholderTextColor="#617D79CC"
                secureTextEntry
                className="border border-gray-300 rounded-lg p-3 mb-4 w-full max-w-md self-center text-xs font-medium font-zen tracking-tight leading-none"
            />


            <TouchableOpacity
                onPress={handleLogin}
                activeOpacity={0.8}
                className="w-[327px] h-[60px] self-center mt-40"
            >
                <LinearGradient
                    colors={["#2F005A", "#2F005A"]}
                    className="w-full h-full rounded-[25px] flex-row items-center justify-between px-6"
                >
                    <Text
                        className="text-white font-medium"
                        style={{
                            fontFamily: "ZenKakuGothicAntique-Medium",
                            fontSize: 12
                        }}
                    >
                        Login
                    </Text>
                    <AntDesign name="right" size={20} color="white" />
                </LinearGradient>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={handleLogin}
                activeOpacity={0.8}
                className="w-[327px] h-[60px] self-center mt-4"
            >
                <LinearGradient
                    colors={["#EDE7F6", "#EDE7F6"]}
                    className="w-full h-full rounded-[25px] flex-row items-center justify-between px-6"
                >
                    <Text
                        className="font-500"
                        style={{
                            fontFamily: "ZenKakuGothicAntique-Medium",
                            fontSize: 14,
                            color: "#173430"
                        }}
                    >
                        Login with MS Office 365
                    </Text>
                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }}
                        style={{ width: 24, height: 24 }}
                        resizeMode="contain"
                    />
                </LinearGradient>
            </TouchableOpacity>

            {/* 
            <TouchableOpacity className="mt-4">
                <Text className="text-center text-blue-500">
                    Don’t have an account? Sign Up
                </Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default Login;
