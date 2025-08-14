
// 1 
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const FEELS = ['Drastic Improvement','Significant Improvement','Some Improvement','No Improvement'];

export default function SessionCompletedScreen() {
  const [feel, setFeel] = useState<string>('Significant Improvement');
  const [note, setNote] = useState('');

  return (
    <View className="flex-1 bg-[#f3f6f5]">
      <View className="px-4 pt-4"><Header title="Session Completed" /></View>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Card className="p-5 items-center">
          <View className="w-16 h-16 rounded-full border-4 border-[#0ea06c] items-center justify-center mb-2">
            <Text className="text-[#0ea06c] text-2xl">✓</Text>
          </View>
          <Text className="text-2xl font-extrabold mb-1">Session Completed</Text>
          <Text className="text-[#7f938e] mb-3">Your Virtual Reality Therapy session has ended</Text>
          <Text className="font-bold text-[#2f5047] mb-2">How do you feel?</Text>

          <View className="w-full max-w-[640px] grid grid-cols-2 gap-4">
            {FEELS.map((f) => (
              <Pressable key={f} onPress={()=>setFeel(f)} className="items-center gap-2 px-2 py-1">
                <View className={'w-18 h-18 rounded-full border-2 ' + (feel===f ? 'bg-[#0ea06c] border-[#0ea06c]' : 'bg-[#eef7f3] border-[#d7ebe3]')} />
                <Text className="text-xs text-[#4c6b63] text-center">{f}</Text>
              </Pressable>
            ))}
          </View>

          <View className="w-full max-w-[680px] mt-4">
            <Text className="text-xs text-[#486a61] mb-1">Your feedback (optional)</Text>
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Add any notes about how you’re feeling…"
              multiline
              className="min-h-[140px] border border-[#cfe3db] rounded-xl p-3"
            />
            <Pressable className="mt-4 rounded-xl bg-[#0ea06c] py-3 items-center">
              <Text className="text-white font-extrabold">Submit Feedback</Text>
            </Pressable>
          </View>
        </Card>
        <View className="h-16" />
      </ScrollView>
    </View>
  );
}
