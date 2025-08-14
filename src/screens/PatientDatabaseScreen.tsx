
// 1 
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import KPI from '../components/KPI';
import PatientCard from '../components/PatientCard';
import BottomBar from '../components/BottomBar';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function PatientDatabaseScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-[#f3f6f5]">
      <View className="px-4 pt-4 pb-2">
        <Header title="Patient Database" />
        <SearchBar />
        <View className="flex-row gap-3 mt-3">
          <Pressable className="flex-1 bg-[#f5fbf8] border border-[#d7ebe3] rounded-xl px-3 py-2">
            <Text className="font-bold text-[#2c4a43]">All Patients</Text>
          </Pressable>
          <Pressable className="flex-1 bg-[#f5fbf8] border border-[#d7ebe3] rounded-xl px-3 py-2">
            <Text className="font-bold text-[#2c4a43]">All Ages</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <View className="gap-3">
          <View className="flex-row gap-3">
            <View className="flex-1"><KPI value="33" label="Total Patients" icon="🧾" /></View>
            <View className="flex-1"><KPI value="8" label="Today’s Sessions" icon="📅" /></View>
          </View>
          <View className="flex-row gap-3">
            <View className="flex-1"><KPI value="16.6%" label="Experience Rate" icon="％" /></View>
            <View className="flex-1"><KPI value="16" label="VR Sessions" icon="🕶️" /></View>
          </View>
        </View>

        <Card className="mt-2 p-3">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-bold">Patients</Text>
            <Pressable><Text className="text-[#0ea06c] font-bold">+ Add patient</Text></Pressable>
          </View>
          <View className="gap-3">
            <PatientCard name="Samantha Ruth" sub="33 y • Female" onStart={() => nav.navigate('Setup')} />
            <PatientCard name="Akram" sub="29 y • Male" onStart={() => nav.navigate('Setup')} />
            <PatientCard name="Prashanthi" sub="45 y • Female" onStart={() => nav.navigate('Setup')} />
          </View>
        </Card>
      </ScrollView>

      <BottomBar label="Total: 33   Today: 8" />
    </View>
  );
}
