import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import StatTile from '../components/StatTile';
import SessionListItem from '../components/SessionListItem';
import BottomBar from '../components/BottomBar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type PatientDashboardScreenProps = {
  // Add any props if needed
};

export default function PatientDashboardScreen({}: PatientDashboardScreenProps) {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-[#f3f6f5]">
      {/* Header */}
      <View className="px-4 pt-4">
        <Header 
          title="Patient Dashboard" 
          right={<Text className='text-[#0aa76d] font-extrabold'>ID</Text>} 
        />
      </View>

      {/* Main Content with padding for BottomBar */}
      <ScrollView 
        contentContainerStyle={{ 
          padding: 16, 
          gap: 12,
          paddingBottom: 80 // Space for BottomBar
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Patient Info Row */}
       <View className="flex-row gap-3">
  <Pressable onPress={() => nav.navigate('profile')} className="flex-1">
    <Card className="flex-1 p-3">
      <View className="flex-row gap-3 items-center">
        <View className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b8e9d5] to-[#7fd4b5]" />
        <View className="flex-1">
          <Text className="font-extrabold">Martin Sangma</Text>
          <Text className="text-xs text-[#6b7a77]">Age: 38</Text>
          <Text className="text-xs text-[#6b7a77]">Address: Laitkor, Shillong</Text>
        </View>
      </View>
    </Card>
  </Pressable>

  <Card className="flex-1 p-3">
    <Text className="font-extrabold mb-2">Start New Session</Text>
    <Pressable 
      onPress={() => nav.navigate('Setup')} 
      className="self-start bg-[#0ea06c] px-4 py-2 rounded-xl"
    >
      <Text className="text-white font-extrabold">Begin</Text>
    </Pressable>
  </Card>
</View>
        {/* Stats Row 1 */}
        <View className="flex-row gap-3">
          <View className="flex-1"><StatTile label="Hemoglobin" value="16.6" unit="g/dL" /></View>
          <View className="flex-1"><StatTile label="Heart Rate" value="89" unit="bpm" /></View>
          <View className="flex-1"><StatTile label="Blood Pressure" value="118/76" unit="mmHg" /></View>
          <View className="flex-1"><StatTile label="Weight" value="68" unit="kg" /></View>
        </View>

        {/* Stats Row 2 */}
        <View className="flex-row gap-3">
          <View className="flex-1"><StatTile label="Temperature" value="45.6" unit="°C" spark /></View>
          <View className="flex-1"><StatTile label="SpO₂" value="91" unit="%" spark /></View>
        </View>

        {/* Session Info Cards */}
        <View className="flex-row gap-3">
          <Card className="flex-1 p-3 items-center">
            <Text className="text-xs text-[#6b7a77]">Sessions</Text>
            <Text className="text-2xl font-extrabold">12</Text>
          </Card>
          <Card className="flex-1 p-3 items-center">
            <Text className="text-xs text-[#6b7a77]">Last Session</Text>
            <Text className="text-2xl font-extrabold">15 Jan 2025</Text>
          </Card>
          <Card className="flex-1 p-3 items-center">
            <Text className="text-xs text-[#6b7a77]">Avg Duration</Text>
            <Text className="text-2xl font-extrabold">20m</Text>
          </Card>
        </View>

        {/* Recent Sessions */}
        <Card className="p-3">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-bold">Recent Sessions</Text>
            <Pressable onPress={() => console.log('View all pressed')}>
              <Text className="text-[#537a6f]">View all →</Text>
            </Pressable>
          </View>
          <View className="gap-3">
            <SessionListItem title="Guided Imagery – Flute – Chemotherapy" date="Jan 15, 2025" minutes={20} stars={5} />
            <SessionListItem title="Guided Imagery – Flute – Chemotherapy" date="Jan 15, 2025" minutes={20} stars={4} />
            <SessionListItem title="Guided Imagery – Flute – Chemotherapy" date="Jan 15, 2025" minutes={20} stars={5} />
          </View>
        </Card>
      </ScrollView>

      {/* Bottom Bar */}
      <BottomBar 
        label="Patient Dashboard" 
        onPrimary={() => nav.navigate('Setup')}
      />
    </View>
  );
}