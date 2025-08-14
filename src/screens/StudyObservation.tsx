import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import { Field } from '@components/Field';
import Segmented from '@components/Segmented';
import Chip from '@components/Chip';
import BottomBar from '@components/BottomBar';
import { Btn } from '@components/Button';

export default function StudyObservation(){
  const [completed,setCompleted]=useState('Yes');
  const [tech,setTech]=useState('No');
  const [discomfort,setDiscomfort]=useState('No');
  const [deviation,setDeviation]=useState('No');
  const [resp,setResp]=useState<string[]>([]);

  const flag = useMemo(()=> completed==='No' || tech==='Yes' || discomfort==='Yes' || deviation==='Yes', [completed,tech,discomfort,deviation]);

  return (
    <>
    <ScrollView className="flex-1 p-4 bg-bg">
      <FormCard icon="K" title="Study Observation — Annexure K">
        <View className="flex-row flex-wrap gap-3">
          <View className="w-full md:w-[48%]"><Field label="Date & Time" placeholder="YYYY-MM-DD HH:mm"/></View>
          <View className="w-full md:w-[48%]"><Field label="Participant ID" placeholder="e.g., PT-0234"/></View>
          <View className="w-full md:w-[48%]"><Field label="Device ID" placeholder="e.g., VR-1029"/></View>
          <View className="w-full md:w-[48%]"><Field label="Observer Name" placeholder="Counselor / Social Worker"/></View>
          <View className="w-full md:w-[48%]"><Field label="Session Number" placeholder="3"/></View>
          <View className="w-full md:w-[48%]"><Field label="Session Name" placeholder="Chemotherapy / Radiation / Inner Healing"/></View>
        </View>
      </FormCard>

      <FormCard icon="1" title="Baseline Assessment">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="FACT-G Score" placeholder="0–108"/></View>
          <View className="flex-1"><Field label="Distress Thermometer" placeholder="0–10"/></View>
        </View>
      </FormCard>

      <FormCard icon="2" title="Session Details">
        <View className="mb-3">
          <Text className="text-xs text-[#4b5f5a] mb-1">Was the session completed?</Text>
          <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={completed} onChange={setCompleted}/>
          {completed==='No' && <View className="mt-2"><Field label="If No, specify reason" placeholder="Reason for not completing…"/></View>}
        </View>

        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Start Time" placeholder="HH:mm"/></View>
          <View className="flex-1"><Field label="End Time" placeholder="HH:mm"/></View>
        </View>

        <View className="mt-3">
          <Text className="text-xs text-[#4b5f5a] mb-1">Patient Response During Session</Text>
          <Chip items={['Calm','Anxious','Sleepy','Distracted','Other']} value={resp} onChange={setResp}/>
          {resp.includes('Other') && <View className="mt-2"><Field label="Describe other response" placeholder="..."/></View>}
        </View>

        <View className="flex-row gap-3 mt-3">
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Any Technical Issues?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={tech} onChange={setTech}/>
            {tech==='Yes' && <View className="mt-2"><Field label="If Yes, describe" placeholder="Connectivity, blur, audio lag, etc."/></View>}
          </View>
          <View className="flex-1"/>
        </View>
      </FormCard>

      <FormCard icon="3" title="Counselor / Social Worker Compliance">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Pre-VR Assessment completed?" placeholder="Yes/No"/></View>
          <View className="flex-1"><Field label="Post-VR Assessment completed?" placeholder="Yes/No"/></View>
        </View>
        <View className="mt-3"><Field label="If the session was stopped midway, reason" placeholder="Reason…"/></View>
        <View className="mt-3">
          <Text className="text-xs text-[#4b5f5a] mb-1">Was the patient able to follow instructions?</Text>
          <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={'Yes'} onChange={()=>{}}/>
        </View>
      </FormCard>

      <FormCard icon="4" title="Additional Observations & Side Effects">
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Visible signs of discomfort?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={discomfort} onChange={setDiscomfort}/>
            {discomfort==='Yes' && <View className="mt-2"><Field label="Describe" placeholder="Observed symptoms…"/></View>}
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Any deviations from protocol?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={deviation} onChange={setDeviation}/>
            {deviation==='Yes' && <View className="mt-2"><Field label="Explain" placeholder="What deviated and why…"/></View>}
          </View>
        </View>
        <View className="mt-3"><Field label="Other Observations" placeholder="Any other relevant observations…"/></View>
      </FormCard>
    </ScrollView>

    <BottomBar>
      {flag && <Text className="px-3 py-2 rounded-xl bg-[#0b362c] text-white font-bold">⚠︎ Needs review</Text>}
      <Btn variant="light" onPress={()=>{}}>Validate</Btn>
      <Btn onPress={()=>{}}>Save Observation</Btn>
    </BottomBar>
    </>
  );
}
