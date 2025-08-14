import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const items = [
  ['InvestigatorsBrochure','Investigators’ Brochure (B)'],
  ['SocioDemographic','Socio-Demographic (C)'],
  ['Screening','Patient Screening (D)'],
  ['FactG','FACT-G (G)'],
  ['PreVR','Pre-VR Assessment (H)'],
  ['PrePostVR','Pre & Post VR (I)'],
  ['PostVRAssessment','Post-VR Assessment (J)'],
  ['StudyObservation','Study Observation (K)'],
  ['ExitInterview','Exit Interview'],
  ['DistressThermometerDemo','Distress Thermometer'], 
  ['Patient Database','Patient Database']
] as const;

export default function Home({ navigation }: NativeStackScreenProps<any>['navigation'] | any){
  return (
    <ScrollView className="flex-1 p-4 bg-bg">
      <Text className="text-2xl font-bold mb-3">VR QOL — Screens</Text>
      <View className="flex-row flex-wrap gap-3">
        {items.map(([route, title])=> (
          <Pressable key={route}
            className="bg-white border border-border rounded-xl px-4 py-3 shadow-card"
            onPress={()=>navigation.navigate(route as any)}>
            <Text className="font-semibold">{title}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-xs text-muted mt-6">Tip: Run on iPad or tablet for best two-column layout.</Text>
    </ScrollView>
  );
}
