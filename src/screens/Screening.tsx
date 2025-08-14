import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import Thermometer from '@components/Thermometer';
import { Field } from '@components/Field';
import Segmented from '@components/Segmented';
import Chip from '@components/Chip';
import BottomBar from '@components/BottomBar';
import { Btn } from '@components/Button';

export default function Screening(){
  const [dt,setDt]=useState(0);
  const [implants,setImplants]=useState('No');
  const [prosthetics,setProsthetics]=useState('No');
  const [conds,setConds]=useState<string[]>([]);
  return (
    <>
    <ScrollView className="flex-1 p-4 bg-bg">
      <FormCard icon="D" title="Patient Screening — Annexure D">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Participant ID" placeholder="e.g., PT-0234"/></View>
          <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD"/></View>
        </View>
      </FormCard>

      <FormCard icon="I" title="Medical Details">
        <Text className="text-xs text-muted mb-2">Distress Thermometer (0–10)</Text>
        <Thermometer value={dt} onChange={setDt} />
        <View className="flex-row gap-3 mt-3">
          <View className="flex-1"><Field label="FACT-G Total Score" keyboardType="number-pad" placeholder="0–108"/></View>
        </View>
        <View className="flex-row gap-3 mt-3">
          <View className="flex-1"><Field label="Pulse Rate (bpm)" placeholder="76"/></View>
          <View className="flex-1"><Field label="Blood Pressure (mmHg)" placeholder="120/80"/></View>
          <View className="flex-1"><Field label="Temperature (°C)" placeholder="36.8"/></View>
          <View className="flex-1"><Field label="BMI" placeholder="22.5"/></View>
        </View>
      </FormCard>

      <FormCard icon="⚙️" title="Devices">
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Any electronic implants?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={implants} onChange={setImplants}/>
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Any prosthetics or orthotics device?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={prosthetics} onChange={setProsthetics}/>
          </View>
        </View>
      </FormCard>

      <FormCard icon="✔︎" title="Clinical Checklist">
        <Chip items={['Vertigo / Dizziness','Tinnitus','Migraine','Diplopia','Blurred Vision','Any discomfort / uneasiness','Brain Tumors','Advanced stage of cancer','Brain Metastasis','Psychiatric illnesses','Surgical complications','Progressive disease on treatment (Not responsive)','Cognitive impairment','Hearing or sight problems']} value={conds} onChange={setConds}/>
        <View className="mt-3"><Field label="Notes (optional)" placeholder="Add any clarifications…"/></View>
      </FormCard>
    </ScrollView>

    <BottomBar>
      <Btn variant="light" onPress={()=>{}} >Validate</Btn>
      <Btn onPress={()=>{}}>Save Screening</Btn>
    </BottomBar>
    </>
  );
}
