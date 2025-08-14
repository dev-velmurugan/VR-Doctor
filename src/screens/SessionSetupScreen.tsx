
// 1 
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import RadioTile from '../components/RadioTile';
import PillChip from '../components/PillChip';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function SessionSetupScreen() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [cat, setCat] = useState('Guided Meditation');
  const [instr, setInstr] = useState('Flute');
  const [lang, setLang] = useState('English');
  const [sess, setSess] = useState('Relaxation');

  const ready = !!cat && !!instr && !!lang && !!sess;

  return (
    <View className="flex-1 bg-[#f3f6f5]">
      <View className="px-4 pt-4"><Header title="Session Setup" /></View>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Card className="p-3">
          <Text className="font-bold mb-2">Select Therapy Category</Text>
          <View className="gap-3">
            <RadioTile title="Guided Meditation" subtitle="Calm & relax" selected={cat==='Guided Meditation'} onPress={()=>setCat('Guided Meditation')} emoji="🧘‍♀️" />
            <RadioTile title="Side Effects" subtitle="Manage symptoms" selected={cat==='Side Effects'} onPress={()=>setCat('Side Effects')} emoji="⛑️" />
          </View>
        </Card>

        <Card className="p-3">
          <Text className="font-bold mb-2">Select Background Instrument</Text>
          <View className="gap-3">
            <RadioTile title="Flute" selected={instr==='Flute'} onPress={()=>setInstr('Flute')} emoji="🎼" />
            <RadioTile title="Piano" selected={instr==='Piano'} onPress={()=>setInstr('Piano')} emoji="🎹" />
          </View>
        </Card>

        <Card className="p-3">
          <Text className="font-bold mb-2">Select Language</Text>
          <View className="flex-row flex-wrap gap-2">
            {['English','Hindi','Khasi','Telugu'].map(l => (
              <PillChip key={l} label={l} selected={lang===l} onPress={()=>setLang(l)} />
            ))}
          </View>
        </Card>

        <Card className="p-3">
          <Text className="font-bold mb-3">Select Therapy Session</Text>
          <View className="gap-3">
            {['Chemotherapy','Inner Healing','Radiation','Relaxation','Inner Healing'].map(s=> (
              <Pressable key={s} onPress={()=>setSess(s)} className="flex-row items-center gap-3">
                <View className={'w-6 h-6 rounded-full border ' + (sess===s ? 'bg-[#0ea06c] border-[#0ea06c]' : 'bg-[#eef7f3] border-[#e6eeeb]')} />
                <Text className="font-extrabold">{s}</Text>
              </Pressable>
            ))}
          </View>
          <Text className="mt-3 text-xs text-[#466d62]">Selected: {cat} • {sess} • {instr} • {lang}</Text>
        </Card>

        <Card className="p-4 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="w-14 h-14 rounded-full bg-white border border-[#e6eeeb] items-center justify-center shadow">
              <Text className="text-[#0ea06c]">▶︎</Text>
            </View>
            <View>
              <Text className="font-extrabold">Start Session</Text>
              <Text className="text-xs text-[#6c8881]">Begin a new VR Therapy Session</Text>
            </View>
          </View>
          <Pressable disabled={!ready} onPress={()=>nav.navigate('Control')} className={'px-4 py-2 rounded-xl ' + (ready ? 'bg-[#0ea06c]' : 'bg-[#a7cfc2]')}>
            <Text className="text-white font-extrabold">Start</Text>
          </Pressable>
        </Card>
      </ScrollView>

      <View className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0e4336] px-4 py-2 rounded-2xl">
        <Text className="text-[#d8efe7] font-extrabold">Session Setup</Text>
      </View>
    </View>
  );
}
