import React from 'react';
import { View, Pressable, Text } from 'react-native';

type Props = {
  items: string[];
  value: string[];
  onChange: (next: string[])=>void;
}
export default function Chip({ items, value, onChange }: Props){
  function toggle(v: string){
    const has = value.includes(v);
    const next = has ? value.filter(x=>x!==v) : [...value, v];
    onChange(next);
  }
  return (
    <View className="flex-row flex-wrap gap-2">
      {items.map(v=>{
        const active = value.includes(v);
        return (
          <Pressable key={v}
            className={`px-3 py-2 rounded-full border border-[#dbe8e3] ${active?'bg-[#e9f7f1] border-[#c7ecdf]':''}`}
            onPress={()=>toggle(v)}>
            <Text className={`${active?'text-[#0a3c31] font-semibold':'text-[#36524c]'}`}>{v}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
