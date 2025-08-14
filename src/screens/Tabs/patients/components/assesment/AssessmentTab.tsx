// AssessmentTab.tsx
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AssessItem from '../../../../../components/AssessItem';
import { RootStackParamList } from '../../../../../../App'; // Adjust path as needed

type AssessmentTabNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AssessmentTab = () => {
  const navigation = useNavigation<AssessmentTabNavigationProp>();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <AssessItem
        icon="📊"
        title="Distress Thermometer"
        subtitle="Distress thermometer"
        onPress={() => navigation.navigate('DistressThermometerScreen')}
      /> 
    <AssessItem
        icon="🧠"
        title="Habits & Personal Beliefs"
        subtitle="Spiritual / Belief"
        onPress={() => navigation.navigate('HabitsBeliefsScreen')}
      />
      <AssessItem 
        icon="📁"
        title="Edmonton & FACT G27"
        subtitle="Edmonton & Fact-G"
        onPress={() => navigation.navigate('EdmontonFactGScreen')}
      /> 
       

      <Text className="mt-1 mb-1 text-xs text-[#6b7a77]">Notes</Text>
      <View className="bg-white border border-[#e6eeeb] rounded-xl p-3 h-32">
        <TextInput placeholder="Write notes…" multiline className="flex-1" />
      </View>
      <View className="h-24" />
    </ScrollView>
  );
};

export default AssessmentTab;



// import React, { useState, useMemo } from 'react';
// import { View, Text, ScrollView } from 'react-native'; 
// import FormCard from '@components/FormCard';
// import PillGroup from '@components/PillGroup';
// import BottomBar from '@components/BottomBar';
// import { Btn } from '@components/Button';
// import { subscales } from '@data/factg';
// import { Field } from '@components/Field';

// interface ScoreResults {
//   PWB: number;
//   SWB: number;
//   EWB: number;
//   FWB: number;
//   TOTAL: number;
// }

// // Helper function to calculate subscale scores
// const calculateSubscaleScore = (answers: Record<string, number | null>, itemCodes: string[]) => {
//   return itemCodes.reduce((sum, code) => {
//     const value = answers[code];
//     return sum + (value !== null ? value : 0);
//   }, 0);
// };

// // Main score computation function
// const computeScores = (answers: Record<string, number | null>): ScoreResults => {
//   // Define which items belong to each subscale
//   const PWB_ITEMS = ['GP1', 'GP2', 'GP3', 'GP4', 'GP5', 'GP6', 'GP7'];
//   const SWB_ITEMS = ['GS1', 'GS2', 'GS3', 'GS4', 'GS5', 'GS6'];
//   const EWB_ITEMS = ['GE1', 'GE2', 'GE3', 'GE4', 'GE5', 'GE6'];
//   const FWB_ITEMS = ['GF1', 'GF2', 'GF3', 'GF4', 'GF5', 'GF6', 'GF7'];

//   const PWB = calculateSubscaleScore(answers, PWB_ITEMS);
//   const SWB = calculateSubscaleScore(answers, SWB_ITEMS);
//   const EWB = calculateSubscaleScore(answers, EWB_ITEMS);
//   const FWB = calculateSubscaleScore(answers, FWB_ITEMS);
//   const TOTAL = PWB + SWB + EWB + FWB;

//   return { PWB, SWB, EWB, FWB, TOTAL };
// };

// export default function AssessmentTab() {
//   const [answers, setAnswers] = useState<Record<string, number | null>>({});
//   const score: ScoreResults = useMemo(() => computeScores(answers), [answers]);

//   function setAnswer(code: string, value: number) {
//     setAnswers(prev => ({ ...prev, [code]: value }));
//   }

//   function handleClear() {
//     setAnswers({});
//   }

//   function handleSave() {
//     // Implement save functionality here
//     console.log('Saving answers:', answers);
//     console.log('Calculated scores:', score);
//   }

//   return (
//     <>
//       <ScrollView className="flex-1 p-4 bg-bg">
//         <FormCard 
//           icon="FG" 
//           title="FACT-G (Version 4) — Annexure G" 
//           desc="Considering the past 7 days, choose one number per line. 0=Not at all ... 4=Very much."
//         >
//           <View className="flex-row gap-3">
//             <View className="flex-1">
//               <Field label="Participant ID" placeholder="e.g., PT-0234" />
//             </View>
//             <View className="flex-1">
//               <Field label="Assessed On" placeholder="YYYY-MM-DD" />
//             </View>
//             <View className="flex-1">
//               <Field label="Assessed By" placeholder="Name & role" />
//             </View>
//           </View>
//         </FormCard>

//         {subscales.map(scale => (
//           <FormCard key={scale.key} icon={scale.key[0]} title={scale.label}>
//             {scale.items.map(item => (
//               <View key={item.code} className="flex-row items-center gap-3 mb-2">
//                 <Text className="w-16 text-ink font-bold">{item.code}</Text>
//                 <Text className="flex-1 text-sm">{item.text}</Text>
//                 <PillGroup 
//                   values={[0, 1, 2, 3, 4]} 
//                   value={answers[item.code] ?? undefined} 
//                   onChange={(v) => setAnswer(item.code, Number(v))} 
//                 />
//                 {item.optional && (
//                   <Text className="text-xs text-muted ml-2">Optional</Text>
//                 )}
//               </View>
//             ))}
//           </FormCard>
//         ))}
//       </ScrollView>

//       <BottomBar>
//         <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">
//           PWB {score.PWB}
//         </Text>
//         <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">
//           SWB {score.SWB}
//         </Text>
//         <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">
//           EWB {score.EWB}
//         </Text>
//         <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">
//           FWB {score.FWB}
//         </Text>
//         <Text className="px-3 py-2 rounded-xl bg-[#134b3b] text-white font-extrabold">
//           TOTAL {score.TOTAL}
//         </Text>
//         <Btn variant="light" onPress={handleClear}>
//           Clear
//         </Btn>
//         <Btn onPress={handleSave}>
//           Save
//         </Btn>
//       </BottomBar>
//     </>
//   );
// }