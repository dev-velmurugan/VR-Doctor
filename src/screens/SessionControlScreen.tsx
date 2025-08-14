
// 1 
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Toggle from '../components/Toggle';
import SliderBar from '../components/SliderBar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function SessionControlScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [cast, setCast] = useState(false);
  const [progress, setProgress] = useState(0.35);
  const [music, setMusic] = useState(0.3);
  const [voice, setVoice] = useState(0.6);

  return (
    <View className="flex-1 bg-[#f3f6f5]">
      <View className="px-4 pt-4"><Header title="Session Control" /></View>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Card className="p-3">
          <View className="flex-row gap-3 items-center">
            <View className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b8e9d5] to-[#7fd4b5]" />
            <View className="flex-1">
              <Text className="font-extrabold">Martin Sangma</Text>
              <Text className="text-xs text-[#6b7a77]">Age: 33</Text>
              <Text className="text-xs text-[#6b7a77]">Address: Laitkor, Shillong</Text>
            </View>
          </View>
        </Card>

        <Card className="p-3">
          <Text className="font-bold mb-2">Session parameters</Text>
          <View className="gap-2">
            <View className="flex-row gap-3">
              <View className="flex-1 bg-[#f7fbf9] border border-[#dbeee6] rounded-xl p-3 items-center"><Text className="font-extrabold">12:36</Text></View>
              <View className="flex-1 bg-[#f7fbf9] border border-[#dbeee6] rounded-xl p-3 items-center"><Text className="text-[#6b7a77]">/ 20:00</Text></View>
            </View>
            <View className="flex-row gap-3">
              <View className="flex-1 bg-[#f6fbf8] border border-[#d7ebe3] rounded-xl p-3"><Text>🧪 Chemotherapy</Text></View>
              <View className="flex-1 bg-[#f6fbf8] border border-[#d7ebe3] rounded-xl p-3"><Text>🎼 Flute</Text></View>
            </View>
            <View className="bg-[#f6fbf8] border border-[#d7ebe3] rounded-xl p-3"><Text>🧘‍♀️ Guided Imagery</Text></View>
          </View>
        </Card>

        <Card className="p-3">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-bold">HMD casting (on / off)</Text>
            <Toggle value={cast} onChange={setCast} />
          </View>
          <View className="rounded-2xl h-40 bg-gradient-to-b from-[#dcefe8] to-white border border-[#e6eeeb]" />
          <View className="flex-row items-center gap-2 mt-3">
            <Pressable className="bg-[#0b362c] px-3 py-2 rounded-lg"><Text className="text-[#d8efe7]">⏮︎</Text></Pressable>
            <Pressable className="bg-[#0b362c] px-3 py-2 rounded-lg"><Text className="text-[#d8efe7]">▶︎</Text></Pressable>
            <Pressable className="bg-[#0b362c] px-3 py-2 rounded-lg"><Text className="text-[#d8efe7]">⏭︎</Text></Pressable>
            <View className="flex-1">
              <SliderBar value={progress} onChange={setProgress} />
            </View>
            <Pressable className="border border-[#e6eeeb] px-3 py-2 rounded-lg"><Text>⛶</Text></Pressable>
          </View>
        </Card>

        <Card className="p-3">
          <Text className="font-bold mb-2">Doctor’s Notes</Text>
          <View className="bg-white border border-[#e6eeeb] rounded-xl px-3 py-2"><Text className="text-[#78938b]">Search notes…</Text></View>
          <View className="gap-2 mt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={i} className="flex-row items-center justify-between bg-[#f7fbf9] border border-[#dbeee6] rounded-xl p-2">
                <Text>Previous Note {String(i+1).padStart(2,'0')}</Text>
                <View className="bg-[#e2f4ec] border border-[#bfe7d9] rounded-full px-3 py-1"><Text className="text-[#0a3c31] font-bold">View</Text></View>
              </View>
            ))}
          </View>
        </Card>

        <Card className="p-3">
          <Text className="font-bold mb-2">Content and media controls</Text>
          <View className="flex-row items-center gap-3">
            <Text className="w-20 text-[#5a7f74] text-xs">Intensity</Text>
            <View className="flex-1"><SliderBar value={0.7} onChange={()=>{}} /></View>
          </View>

          <View className="flex-row items-center gap-3 justify-between mt-3">
            <View className="flex-row gap-2 bg-[#f1f8f5] border border-[#d7ebe3] rounded-xl p-1">
              <Pressable className="bg-white border border-[#d7ebe3] rounded-lg px-3 py-2"><Text>⏮︎</Text></Pressable>
              <Pressable className="bg-[#0ea06c] rounded-lg px-3 py-2"><Text className="text-white">▶︎</Text></Pressable>
              <Pressable className="bg-white border border-[#d7ebe3] rounded-lg px-3 py-2"><Text>⏹︎</Text></Pressable>
            </View>
            <View className="flex-1" />
          </View>

          <View className="flex-row gap-4 mt-3">
            <View className="flex-1 gap-3">
              <View className="flex-row items-center gap-3">
                <Text className="w-20 text-[#5a7f74] text-xs">Music</Text>
                <View className="flex-1"><SliderBar value={music} onChange={setMusic} /></View>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="w-20 text-[#5a7f74] text-xs">Voice</Text>
                <View className="flex-1"><SliderBar value={voice} onChange={setVoice} /></View>
              </View>
            </View>
            <View className="w-40 items-center">
              <View className="w-40 h-40 rounded-full bg-white border-8 border-[#f0f7f4] items-center justify-center shadow-card">
                <View className="w-28 h-28 rounded-full bg-white border border-[#e6eeeb]" />
              </View>
              <View className="flex-row justify-between w-40 mt-2">
                <Text>0</Text><Text>Volume</Text><Text>100</Text>
              </View>
            </View>
          </View>
        </Card>

        <View className="h-16" />
      </ScrollView>

      <View className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0e4336] px-4 py-2 rounded-2xl">
        <Pressable onPress={() => nav.navigate('Completed')}><Text className="text-[#d8efe7] font-extrabold">Session Control</Text></Pressable>
      </View>
    </View>
  );
}
