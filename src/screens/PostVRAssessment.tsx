import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import { Field } from '@components/Field';
import Segmented from '@components/Segmented';
import PillGroup from '@components/PillGroup';
import BottomBar from '@components/BottomBar';
import { Btn } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PostVRAssessment() {
  const [adjust, setAdjust] = useState('No');
  const [av, setAv] = useState('Yes');
  const [techIssue, setTechIssue] = useState('No');
  const [discomfort, setDiscomfort] = useState('No');
  const [complete, setComplete] = useState('Yes');
  const [duration, setDuration] = useState('Just Right');


  const [uxTechIssue, setUxTechIssue] = useState('No');
  const [recommend, setRecommend] = useState('Yes');
  const [usedApp, setUsedApp] = useState('No');
  const [uxDuration, setUxDuration] = useState('Just Right');

  const route = useRoute();
  const navigation = useNavigation();
  const { patientId } = route.params as { patientId: number };
  console.log("patientId", patientId)


  const handleSave = async () => {
    const today = new Date().toISOString().split('T')[0];
    await AsyncStorage.setItem(`postvr-${patientId}-${today}`, 'done');
    navigation.goBack();
  };


  return (
    <>
      <ScrollView className="flex-1 p-4 bg-bg" contentContainerStyle={{ paddingBottom: 80 }}>
        <FormCard icon="J" title="Post‑VR Assessment & Questionnaires — Annexure J">
          <View className="flex-row gap-3">
            <View className="flex-1"><Field label="Participant ID" placeholder="e.g., PT-0234" /></View>
            <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD" /></View>
          </View>
        </FormCard>

        <FormCard icon="A" title="Device & Content Feedback">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Ease-of-Use (1–5)</Text>
              <PillGroup values={[1, 2, 3, 4, 5]} value={undefined} onChange={() => { }} />
            </View>
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Device Comfort (1–5)</Text>
              <PillGroup values={[1, 2, 3, 4, 5]} value={undefined} onChange={() => { }} />
            </View>
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Physical adjustments needed mid‑session?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={adjust} onChange={setAdjust} />
            {adjust === 'Yes' && <View className="mt-2"><Field label="Please describe" placeholder="Describe adjustments…" /></View>}
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Audio/Visual quality satisfactory?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={av} onChange={setAv} />
            {av === 'No' && <View className="mt-2"><Field label="Specify issues" placeholder="Audio lag, low volume, blur, etc." /></View>}
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Technical issues or physical discomfort experienced?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={techIssue} onChange={setTechIssue} />
            {techIssue === 'Yes' && <View className="mt-2"><Field label="Detail the issue" placeholder="Connectivity, app crash, etc." /></View>}
          </View>

          <View className="mt-3"><Field label="Suggestions to enhance device or content" placeholder="Your suggestions…" /></View>
          <View className="mt-3"><Field label="Additional Comments / Observations" placeholder="Any other notes…" /></View>
        </FormCard>

        <FormCard icon="B" title="VR Experience">
          <View className="mt-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Comfort using VR headset</Text>
            <Segmented options={[
              { label: 'Very Comfortable', value: 'Very Comfortable' },
              { label: 'Somewhat Comfortable', value: 'Somewhat Comfortable' },
              { label: 'Neutral', value: 'Neutral' },
              { label: 'Uncomfortable', value: 'Uncomfortable' },
              { label: 'Very Uncomfortable', value: 'Very Uncomfortable' }
            ]} value={'Neutral'} onChange={() => { }} />
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Discomfort during VR (dizziness, nausea, headache)?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={discomfort} onChange={setDiscomfort} />
            {discomfort === 'Yes' && <View className="mt-2"><Field label="Describe discomfort" placeholder="Describe discomfort…" /></View>}
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">How engaging was the guided imagery?</Text>
            <Segmented options={[
              { label: 'Very Engaging', value: 'Very Engaging' },
              { label: 'Somewhat', value: 'Somewhat Engaging' },
              { label: 'Neutral', value: 'Neutral' },
              { label: 'Not Very', value: 'Not Very Engaging' },
              { label: 'Not At All', value: 'Not Engaging at All' },
            ]} value={'Very Engaging'} onChange={() => { }} />
          </View>

          <View className="flex-row gap-3 mt-3">
            <View className="flex-1">
              <Text className="text-xs text-[#4b5f5a] mb-1">Completed full VR session as prescribed?</Text>
              <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={complete} onChange={setComplete} />
            </View>
            {complete === 'No' && <View className="flex-1"><Field label="Reason" placeholder="Reason for not completing…" /></View>}
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Session duration</Text>
            <Segmented options={[{ label: 'Too Long', value: 'Too Long' }, { label: 'Just Right', value: 'Just Right' }, { label: 'Too Short', value: 'Too Short' }]} value={duration} onChange={setDuration} />
            {duration !== 'Just Right' && <View className="mt-2"><Field label="Preferred duration (minutes)" placeholder="e.g., 15" keyboardType="number-pad" /></View>}
          </View>
        </FormCard>


        <FormCard icon="C" title="User Experience & Suggestions">
          <View className="mt-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Was session duration appropriate?</Text>
            <Segmented options={[
              { label: 'Too Long', value: 'Too Long' },
              { label: 'Just Right', value: 'Just Right' },
              { label: 'Too Short', value: 'Too Short' }
            ]} value={uxDuration} onChange={setUxDuration} />
            {uxDuration !== 'Just Right' && <View className="mt-2"><Field label="Preferred duration (minutes)" placeholder="e.g., 15" keyboardType="number-pad" /></View>}
          </View>

          <View className="mt-3"><Field label="What did you like the most?" placeholder="Your favorite aspects…" multiline numberOfLines={4} /></View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Technical issues with VR device or app?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={uxTechIssue} onChange={setUxTechIssue} />
            {uxTechIssue === 'Yes' && <View className="mt-2"><Field label="If yes, please describe" placeholder="Connectivity, app crash, etc." multiline maxLength={4} /></View>}
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Would you recommend VR-guided imagery to other patients?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={recommend} onChange={setRecommend} />
          </View>

          <View className="mt-3">
            <Text className="text-xs text-[#4b5f5a] mb-1">Used phone app for guided imagery at home?</Text>
            <Segmented options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={usedApp} onChange={setUsedApp} />
            {usedApp === 'Yes' && <View className="mt-2"><Field label="Describe overall experience" placeholder="App ease of use, content, reminders…" /></View>}
          </View>

          <View className="mt-3">
            <Field
              label="Any additional comments or suggestions?"
              placeholder="Anything else to improve your VR experience…"
              multiline
              numberOfLines={4}
            />
          </View>

        </FormCard>
      </ScrollView>

      <BottomBar>
        <Btn variant="light" onPress={() => { }}>Validate</Btn>
        <Btn onPress={handleSave}>Save Assessment</Btn>
      </BottomBar>
    </>
  );
}
