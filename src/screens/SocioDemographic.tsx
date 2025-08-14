import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import Segmented from '@components/Segmented';
import { Field } from '@components/Field';

export default function SocioDemographic(){
  const [gender,setGender]=useState<string>();
  const [marital,setMarital]=useState<string>();
  const [religion,setReligion]=useState<string>('No');
  return (
    <ScrollView className="flex-1 p-4 bg-bg">
      <FormCard icon="C" title="Socio-Demographic — Annexure C">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Participant ID" placeholder="e.g., PT-0234"/></View>
          <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD"/></View>
        </View>
      </FormCard>

      <FormCard icon="1" title="Personal Information">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Age (years)" keyboardType="number-pad" placeholder="54"/></View>
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Gender</Text>
            <Segmented options={[
              {label:'Male', value:'Male'},{label:'Female', value:'Female'},{label:'Other', value:'Other'}
            ]} value={gender} onChange={setGender} />
            {gender==='Other' && <View className="mt-2"><Field label="Please specify" placeholder="Your gender identity"/></View>}
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-xs text-[#4b5f5a] mb-1">Marital Status</Text>
          <Segmented options={[
            {label:'Single', value:'Single'},{label:'Married', value:'Married'},
            {label:'Divorced', value:'Divorced'},{label:'Widowed', value:'Widowed'}
          ]} value={marital} onChange={setMarital} />
          {marital==='Married' && <View className="mt-2"><Field label="Number of children" keyboardType="number-pad" placeholder="2"/></View>}
        </View>

        <View className="mt-3">
          <Text className="text-xs text-[#4b5f5a] mb-1">Do you practice any religion?</Text>
          <Segmented options={[{label:'Yes', value:'Yes'},{label:'No', value:'No'}]} value={religion} onChange={setReligion}/>
          {religion==='Yes' && <View className="mt-2"><Field label="Please specify (optional)" placeholder="Religion"/></View>}
        </View>
      </FormCard>
    </ScrollView>
  );
}
