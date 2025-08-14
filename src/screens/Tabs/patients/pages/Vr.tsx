import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";

type VRProps = {
    patientId: number;
};

type RootStackParamList = {
    VR: { patientId: number };
    PreVR: { patientId: number };
    PostVRAssessment: { patientId: number };
    PreAndPostVR: { patientId: number };
    AdverseEventForm: { patientId: number };
};

type VRScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VR'
>;

const Vr: React.FC<VRProps> = ({ patientId }) => {
    const navigation = useNavigation<VRScreenNavigationProp>();

    const [sessionStage, setSessionStage] = useState<'pre' | 'post' | 'pre & post'>('pre');

    useEffect(() => {
        const checkStage = async () => {
            // Reset to avoid previous patient’s data
            setSessionStage('pre');

            const today = new Date().toISOString().split("T")[0];
            const preDone = await AsyncStorage.getItem(`prevr-${patientId}-${today}`);
            const postDone = await AsyncStorage.getItem(`postvr-${patientId}-${today}`);

            if (preDone && !postDone) {
                setSessionStage("post");
            } else if (preDone && postDone) {
                setSessionStage("pre & post");
            } else {
                setSessionStage("pre");
            }
        };

        checkStage();
        const unsubscribe = navigation.addListener("focus", checkStage);
        return unsubscribe;
    }, [navigation, patientId]);



    const cards = [
        { id: 1, title: "Pre/Post VR Session", icon: "insert-drive-file" },
        { id: 2, title: "Adverse Event Reporting Form", icon: "insert-drive-file" },
    ];

    const handleCardPress = (id: number) => {
        if (id === 1) {
            if (sessionStage === "pre") {
                navigation.navigate("PreVR", { patientId });
            } else if (sessionStage === "post") {
                navigation.navigate("PostVRAssessment", { patientId });
            } else {
                navigation.navigate("PreAndPostVR", { patientId });
            }
        } else if (id === 2) {
            navigation.navigate("AdverseEventForm", { patientId });
        }
    };

    return (
        <View className="flex-1 bg-[#f3f6f5] py-5">
            {cards.map((card) => (
                <TouchableOpacity
                    key={card.id}
                    activeOpacity={0.8}
                    onPress={() => handleCardPress(card.id)}
                    className="h-[88px] bg-white rounded-[25px] flex-row items-center justify-between px-6 mx-5 mb-4 shadow-md shadow-black/10"
                >
                    <View className="flex-row items-center">
                        <MaterialIcons name={card.icon as any} size={32} color="#4B5563" />
                        <View className="ml-3">
                            <Text
                                className="text-[16px] font-bold"
                                style={{
                                    fontFamily: "Zen Kaku Gothic Antique",
                                    color: "#173430",
                                }}
                            >
                                {card.title}
                            </Text>
                            {card.id === 1 && (
                                <Text style={{ color: "#888" }}>
                                    {sessionStage === "pre" ? "Start Pre VR" : "Start Post VR"}
                                </Text>
                            )}
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={28} color="#4B5563" />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Vr;
