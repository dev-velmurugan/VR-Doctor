
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export type Patient = {
  id: number;
  name: string;
  age: number;
  weightKg: number;
  status?: 'ok'|'pending'|'alert';
};

export default function ListItem({ item, selected, onPress }:{ item: Patient; selected?: boolean; onPress?: ()=>void }){
  const chipBg = item.status === 'alert' ? 'bg-[#fee9e7]' : item.status === 'pending' ? 'bg-[#eaf5ff]' : 'bg-[#eaf7f2]';
  return (
    <Pressable onPress={onPress} className={`flex-row items-center justify-between rounded-xl px-3 py-3 mb-2 ${selected ? 'bg-[#10b981]': 'bg-white'}`}>
      <View className="flex-row items-center gap-3">
        <View className={`w-9 h-9 rounded-full ${selected ? 'bg-white' : chipBg} border border-[#e3ece9]`} />
        <View>
          <Text className={`font-bold ${selected ? 'text-white' : 'text-[#0b1f1c]'}`}>{item.name}</Text>
          <Text className={`${selected ? 'text-white/90' : 'text-[#6b7a77]'} text-xs`}>{item.age} y • {item.weightKg} kg</Text>
        </View>
      </View>
      <Text className={`${selected ? 'text-white' : 'text-[#7aa89e]'}`}>›</Text>
    </Pressable>
  );
}
