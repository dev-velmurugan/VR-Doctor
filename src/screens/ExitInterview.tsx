import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormCard from '@components/FormCard';
import { Field } from '@components/Field';
import Segmented from '@components/Segmented';
import Chip from '@components/Chip';
import BottomBar from '@components/BottomBar';
import { Btn } from '@components/Button';

export default function ExitInterview(){
  const [reasons,setReasons]=useState<string[]>([]);
  const [training,setTraining]=useState('Yes');
  const [requirements,setRequirements]=useState('Yes');
  const [future,setFuture]=useState('No');
  const [updates,setUpdates]=useState('No');
  return (
    <>
    <ScrollView className="flex-1 p-4 bg-bg">
      <FormCard icon="PI" title="Exit Interview">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Participant ID" placeholder="e.g., PT-0234"/></View>
          <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD"/></View>
        </View>
      </FormCard>

      <FormCard icon="1" title="Reason for Discontinuation" desc="Select all that apply">
        <Chip items={['Medical reasons','Technical difficulties','Lack of perceived benefit','Time/personal reasons','Difficulty adhering to requirements','Other']} value={reasons} onChange={setReasons}/>
        {reasons.includes('Other') && <View className="mt-2"><Field label="Other (please specify)" placeholder="Describe other reason…"/></View>}
      </FormCard>

      <FormCard icon="2" title="Experience with the VR Sessions">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="What was most helpful?" placeholder="Your notes…"/></View>
          <View className="flex-1"><Field label="What was challenging?" placeholder="Your notes…"/></View>
        </View>
      </FormCard>

      <FormCard icon="3" title="Technical & Usability Issues">
        <Text className="text-xs text-[#4b5f5a] mb-1">Training/support on using the VR system was adequate?</Text>
        <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={training} onChange={setTraining}/>
        {training==='No' && <View className="mt-2"><Field label="Please explain" placeholder="What support was missing?"/></View>}
      </FormCard>

      <FormCard icon="4" title="Study Adherence & Protocol">
        <Text className="text-xs text-[#4b5f5a] mb-1">Were requirements reasonable?</Text>
        <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={requirements} onChange={setRequirements}/>
        {requirements==='No' && <View className="mt-2"><Field label="If no, please explain" placeholder="Explain…"/></View>}
        <View className="mt-3"><Field label="What could have helped you stay engaged?" placeholder="Suggestions…"/></View>
      </FormCard>

      <FormCard icon="5" title="Future Recommendations">
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Would you join a similar study in future?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={future} onChange={setFuture}/>
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#4b5f5a] mb-1">Receive updates on findings/opportunities?</Text>
            <Segmented options={[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]} value={updates} onChange={setUpdates}/>
          </View>
        </View>
        <View className="mt-3"><Field label="Suggestions to improve the study" placeholder="Your suggestions…"/></View>
      </FormCard>

      <FormCard icon="✔︎" title="Acknowledgment & Consent">
        <View className="flex-row gap-3">
          <View className="flex-1"><Field label="Participant Signature (full name)" placeholder="Participant full name"/></View>
          <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD"/></View>
        </View>
        <View className="flex-row gap-3 mt-2">
          <View className="flex-1"><Field label="Interviewer Signature (full name)" placeholder="Interviewer full name"/></View>
          <View className="flex-1"><Field label="Date" placeholder="YYYY-MM-DD"/></View>
        </View>
      </FormCard>
    </ScrollView>

    <BottomBar>
      <Btn variant="light" onPress={()=>{}}>Validate</Btn>
      <Btn onPress={()=>{}}>Save & Close</Btn>
    </BottomBar>
    </>
  );
}
