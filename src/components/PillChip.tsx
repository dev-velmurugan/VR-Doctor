
import React from 'react';
import { Text, Pressable } from 'react-native';

export default function PillChip({ label, selected, onPress }: { label: string; selected?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} className={'px-3 py-2 rounded-xl border ' + (selected ? 'bg-[#e2f4ec] border-[#bfe7d9]' : 'bg-[#f2faf6] border-[#d7ebe3]')}>
      <Text className={(selected ? 'text-[#0a3c31] font-extrabold' : 'text-[#3e665c] font-bold')}>{label}</Text>
    </Pressable>
  );
}
