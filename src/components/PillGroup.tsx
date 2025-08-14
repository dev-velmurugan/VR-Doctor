import React from 'react';
import { View, Pressable, Text } from 'react-native';

type Props = {
  values: (string|number)[];
  value?: string|number;
  onChange?: (v: string|number)=>void;
  compact?: boolean;
}
export default function PillGroup({ values, value, onChange, compact }: Props){
  return (
    <View className="flex-row flex-wrap items-center gap-2">
      {values.map(v=>{
        const active = String(value)===String(v);
        return (
          <Pressable key={String(v)}
            className={`px-3 ${compact?'py-1.5':'py-2.5'} rounded-full border border-[#dbe8e3] ${active?'bg-[#e0f3ec] border-[#bfe7d9]':''}`}
            onPress={()=>onChange?.(v)}>
            <Text className={`font-semibold ${active?'text-[#0a3c31]':'text-[#36524c]'}`}>{String(v)}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
