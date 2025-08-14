import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import { Field } from '@components/Field';
import PillGroup from '@components/PillGroup';
import Segmented from '@components/Segmented';
import BottomBar from '@components/BottomBar';
import { Btn } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function PreVR() {
  const [effect, setEffect] = useState<number | undefined>();
  const [clarity, setClarity] = useState<number | undefined>();
  const [confidence, setConfidence] = useState<number | undefined>();
  const [demo, setDemo] = useState('No');
  const [controls, setControls] = useState('No');
  const [guidance, setGuidance] = useState('No');
  const [wear, setWear] = useState('No');
  const [pref, setPref] = useState('No');
  const [qa, setQa] = useState('Yes');

  const navigation = useNavigation<any>();
  const route = useRoute();
  const { patientId } = route.params as { patientId: number };
  console.log("PATIENTID", patientId)

  const ready = (() => {
    const base = (effect && clarity && confidence) ? Math.round(((effect || 0) + (clarity || 0) + (confidence || 0)) / 3) : '—';
    const extras = (demo === 'Yes') + (controls === 'Yes') + (guidance === 'No');
    return base === '—' ? '—' : `${base}${extras ? ` (+${extras})` : ''}`;
  })();

  const handleSave = async () => {
    const today = new Date().toISOString().split('T')[0];
    await AsyncStorage.setItem(`prevr-${patientId}-${today}`, 'done');
    navigation.goBack();
  };


  return (
    <>
      <ScrollView className="flex-1 p-4 bg-bg" contentContainerStyle={{ paddingBottom: 80 }}>
        <FormCard icon="H" title="Pre-VR Assessment — Annexure H">
          <View className="flex-row gap-3">
            <View className="flex-1"><Field label="Participant ID" placeholder="e.g., PT-0234" /></View>
            <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD" /></View>
          </View>
        </FormCard>

        <FormCard icon="A" title="Orientation Quality">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Effectiveness (1–5)</Text>
              <PillGroup values={[1, 2, 3, 4, 5]} value={effect} onChange={v => setEffect(Number(v))} />
            </View>
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Clarity (1–5)</Text>
              <PillGroup values={[1, 2, 3, 4, 5]} value={clarity} onChange={v => setClarity(Number(v))} />
            </View>
          </View>
        </FormCard>

        <FormCard icon="B" title="Demonstration & Confidence">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Demonstration provided?</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={demo} onChange={setDemo} />
            </View>
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Confidence (1–5)</Text>
              <PillGroup values={[1, 2, 3, 4, 5]} value={confidence} onChange={v => setConfidence(Number(v))} />
              <Text className="text-xs text-muted mt-1">1=Not confident • 5=Very confident</Text>
            </View>
          </View>
        </FormCard>

        <FormCard icon="C" title="Controls & Guidance">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Confident with controls?</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={controls} onChange={setControls} />
            </View>
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Need additional guidance?</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={guidance} onChange={setGuidance} />
            </View>
          </View>
        </FormCard>

        <FormCard icon="D" title="Fit, Adjustment & Wear">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Any concerns about wearing the device?</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={wear} onChange={setWear} />
              {wear === 'Yes' && <View className="mt-2"><Field label="Comments" placeholder="Discomfort, hygiene, duration limits…" /></View>}
            </View>
            <View className="flex-1" />
          </View>
        </FormCard>

        <FormCard icon="E" title="Guided Imagery Content">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Preferences or concerns?</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={pref} onChange={setPref} />
              {pref === 'Yes' && <View className="mt-2"><Field label="Response" placeholder="e.g., avoid fast motion, prefer beach scenes…" /></View>}
            </View>
            <View className="flex-1" />
          </View>
        </FormCard>

        <FormCard icon="F" title="Questions & Concerns">
          <Text className="text-xs text-[#4b5f5a] mb-1">Were your questions addressed?</Text>
          <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={qa} onChange={setQa} />
          {qa === 'No' && <View className="mt-2"><Field label="Comments / Questions" placeholder="List any unresolved questions…" /></View>}
        </FormCard>
      </ScrollView>

      <BottomBar>
        <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">Readiness: {String(ready)}</Text>
        <Btn variant="light" onPress={() => { }}>Validate</Btn>
        <Btn onPress={handleSave}>Save Pre‑VR</Btn>
      </BottomBar>
    </>
  );
}
