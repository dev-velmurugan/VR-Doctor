
import React from 'react';
import { View, Pressable, Text } from 'react-native';

type Tab = { key: string; label: string; };
export default function TabPills({ tabs, active, onChange }:{ tabs: Tab[]; active: string; onChange:(k:string)=>void }){
  return (
    <View className="flex-row gap-2 mb-3">
      {tabs.map(t => (
        <Pressable key={t.key} onPress={()=>onChange(t.key)} className={`px-3 py-2 rounded-xl border ${active===t.key?'bg-[#0ea06c] border-[#0ea06c]':'bg-[#f5fbf8] border-[#d7ebe3]'}`}>
          <Text className={`${active===t.key?'text-white font-extrabold':'text-[#2c4a43] font-bold'}`}>{t.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
