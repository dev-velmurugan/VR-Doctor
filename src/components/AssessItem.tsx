
import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

export default function AssessItem({ icon='📄', title, subtitle }:{ icon?: string; title: string; subtitle: string }){
  return (
    <Card className="p-3 mb-3">
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 rounded-xl bg-[#eaf7f2] items-center justify-center">
          <Text className="text-[#0b6b52]">{icon}</Text>
        </View>
        <View className="flex-1">
          <Text className="font-extrabold">{title}</Text>
          <Text className="text-xs text-[#6b7a77]">{subtitle}</Text>
        </View>
        <Text className="text-[#7a988f]">›</Text>
      </View>
    </Card>
  );
}
