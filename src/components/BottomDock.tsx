import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
// Import the icons you need
import { HomeIcon, UserGroupIcon, ChartPieIcon } from 'react-native-heroicons/outline';
import { PlusIcon } from 'react-native-heroicons/solid';

type BottomDockProps = {
  activeScreen: keyof RootStackParamList;
};

export default function BottomDock({ activeScreen }: BottomDockProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  type DockItemProps = {
    label: string;
    active: boolean;
    screenName: keyof RootStackParamList;
    IconComponent: React.ComponentType<{ color: string; size: number }>;
  };

  const Item = ({ label, active, screenName, IconComponent }: DockItemProps) => (
    <Pressable
      className={`flex-1 items-center gap-1 px-3 py-2 ${active ? 'opacity-100' : 'opacity-80'}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <IconComponent size={24} color={active ? 'white' : '#FFFFFFB3'} />
      <Text className={`text-xs ${active ? 'text-white' : 'text-white/80'}`}>
        {label}
      </Text>
    </Pressable>
  );

  return (
    <View className="absolute bottom-4 w-full px-4">
      <View className="bg-[#0e4336] rounded-2xl shadow-2xl flex-row items-center px-2 py-1 w-full max-w-[600px] mx-auto">
        <Item 
          label="HOME" 
          screenName="Home" 
          active={activeScreen === 'Home'} 
          IconComponent={HomeIcon} 
        />
        <Item 
          label="PATIENTS" 
          screenName="Patients" 
          active={activeScreen === 'Patients'} 
          IconComponent={UserGroupIcon} 
        />
        <Item 
          label="REPORTS" 
          screenName="Reports" 
          active={activeScreen === 'Reports'} 
          IconComponent={ChartPieIcon} 
        />
        <Pressable className="w-9 h-9 rounded-full bg-[#0ea06c] items-center justify-center ml-2">
          <PlusIcon size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}