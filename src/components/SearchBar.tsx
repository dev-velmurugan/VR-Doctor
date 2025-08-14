
import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default function SearchBar({ placeholder='Search patient' }: {placeholder?: string}) {
  return (
    <View className="flex-row items-center gap-2 bg-white border border-[#e6eeeb] rounded-xl px-3 py-2">
      <Text className="text-[#618b83]">🔎</Text>
      <TextInput placeholder={placeholder} className="flex-1 text-base" />
      <View className="w-8 h-8 rounded-lg bg-[#f0f6f4] items-center justify-center border border-[#e6eeeb]">
        <Text className="text-[#7a968f]">≡</Text>
      </View>
    </View>
  );
}
