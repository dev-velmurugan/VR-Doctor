import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import { Field } from '@components/Field';
import Segmented from '@components/Segmented';
import BottomBar from '@components/BottomBar';
import { Btn } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PreAndPostVR() {
  const [preHead, setPreHead] = useState('No');
  const [preDiz, setPreDiz] = useState('No');
  const [preBlur, setPreBlur] = useState('No');
  const [preVert, setPreVert] = useState('No');
  const [preGood, setPreGood] = useState('No');

  const [postGood, setPostGood] = useState('Yes');
  const [postDisc, setPostDisc] = useState('No');
  const [postHelp, setPostHelp] = useState('Yes');
  const [postLike, setPostLike] = useState('Yes');

  const navigation = useNavigation();



  const delta = useMemo(() => (postGood === 'Yes' ? 1 : 0) - (preGood === 'Yes' ? 1 : 0), [preGood, postGood]);
  const flag = (preHead === 'Yes') || (preDiz === 'Yes') || (preBlur === 'Yes') || (preVert === 'Yes') || (postDisc === 'Yes');

  return (
    <>
      <ScrollView className="flex-1 p-4 bg-bg" contentContainerStyle={{ paddingBottom: 60 }}>
        <FormCard icon="I" title="Pre & Post VR — Annexure I">
          <View className="flex-row gap-3">
            <View className="flex-1"><Field label="Participant ID" placeholder="e.g., PT-0234" /></View>
            <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD" /></View>
          </View>
        </FormCard>

        <FormCard icon="A" title="Pre Virtual Reality Questions">
          {[
            ['Headache & Aura', preHead, setPreHead],
            ['Dizziness', preDiz, setPreDiz],
            ['Blurred Vision', preBlur, setPreBlur],
            ['Vertigo', preVert, setPreVert],
            ['Do you feel good?', preGood, setPreGood],
          ].map(([label, val, setter]: any) => (
            <View key={String(label)} className="mb-3">
              <Text className="text-xs text-[#4b5f5a] mb-1">{label}</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={val} onChange={setter} />
              {val === 'Yes' && label !== 'Do you feel good?' && <View className="mt-2"><Field label="Notes (optional)" placeholder="Add details…" /></View>}
            </View>
          ))}
        </FormCard>

        <FormCard icon="B" title="Post Virtual Reality Questions">
          {[
            ['Do you feel good?', postGood, setPostGood],
            ['Any discomfort?', postDisc, setPostDisc],
            ['Helped you relax / feel good?', postHelp, setPostHelp],
            ['Like audio & visual content?', postLike, setPostLike],
          ].map(([label, val, setter]: any) => (
            <View key={String(label)} className="mb-3">
              <Text className="text-xs text-[#4b5f5a] mb-1">{label}</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={val} onChange={setter} />
              {val === 'No' && label !== 'Any discomfort?' && <View className="mt-2"><Field label="Please specify" placeholder="e.g., audio low, visuals blurry…" /></View>}
              {label === 'Any discomfort?' && val === 'Yes' && <View className="mt-2"><Field label="Please describe" placeholder="Dizziness, nausea, etc." /></View>}
            </View>
          ))}
        </FormCard>
      </ScrollView>

      <BottomBar>
        <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">Mood Δ: {delta > 0 ? '+1' : delta < 0 ? '-1' : '0'}</Text>
        {flag && <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">⚠︎ Review symptoms</Text>}
        <Btn variant="light" onPress={() => { }}>Validate</Btn>
        <Btn onPress={() => { navigation.goBack() }}>Save</Btn>
      </BottomBar>
    </>
  );
}



