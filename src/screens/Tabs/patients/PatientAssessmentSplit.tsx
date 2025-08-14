import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import ListItem, { Patient } from '../../../components/ListItem';
import TabPills from '../../../components/TabPills';
import BottomDock from '../../../components/BottomDock';
import InfoSection from './components/InfoSection';
import AssessmentTab from './components/assesment/AssessmentTab';
import VRTab from './components/VRTab';
import OrientationTab from './components/OrientationTab';
import VR from './pages/Vr';
// import UpcomingTab from './components/UpcomingTab';

const patients: Patient[] = [
  { id:1, name:'Mani sharma', age:23, weightKg:60, status:'ok' },
  { id:2, name:'Raghavender', age:23, weightKg:60, status:'ok' },
  { id:3, name:'Vijaya kumar', age:23, weightKg:60, status:'pending' },
  { id:4, name:'Prashanthi', age:23, weightKg:60, status:'ok' },
  { id:5, name:'Akram', age:23, weightKg:60, status:'ok' },
  { id:6, name:'Kiran', age:23, weightKg:60, status:'ok' },
  { id:7, name:'Kishore', age:23, weightKg:60, status:'ok' },
  { id:8, name:'Santhosh', age:23, weightKg:60, status:'pending' },
  { id:9, name:'Sudheer kumar', age:23, weightKg:60, status:'ok' },
  { id:10, name:'Prem kumar', age:23, weightKg:60, status:'alert' },
  { id:11, name:'Prakash', age:23, weightKg:60, status:'ok' },
];

export default function PatientAssessmentSplit() {
  const [selId, setSelId] = useState(2);
  const [tab, setTab] = useState('assessment');
  const sel = patients.find(p => p.id === selId);

  const renderTabContent = () => {
    switch (tab) { 
      case 'info':
        return <InfoSection patient={sel} />;
      case 'assessment':
        return <AssessmentTab />;
      case ' VR':
          return <VR patientId={sel?.id} />;

      case 'orientation':
        return <OrientationTab />;
      // case 'upcoming':
      //   return <UpcomingTab />;
      default:
        return <AssessmentTab />;
    }
  };

  return (
    <View className="flex-1 bg-[#f3f6f5]">
      <View className="flex-row flex-1">
        {/* Left Pane - Patient List */}
        <View style={{ width: 320 }} className="border-r border-[#e6eeeb] bg-white/60">
          <View className="px-4 pt-4 pb-2">
            <View className="flex-row items-center justify-between mb-2">
              <View className="flex-row items-center gap-2">
                <Text className="font-extrabold">Patients List</Text>
                <Text className="text-[#21c57e]">●</Text>
              </View>
              <Text className="text-xs text-[#6b7a77]">List of patients (112)</Text>
            </View>
            <View className="flex-row items-center gap-2 bg-white border border-[#e6eeeb] rounded-xl px-3 py-2">
              <Text>🔎</Text>
              <TextInput placeholder="Search patient" className="flex-1" />
              <Text>🔘</Text>
              <Text>🔽</Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ padding: 12 }}>
            {patients.map(p => (
              <ListItem key={p.id} item={p} selected={p.id === selId} onPress={() => setSelId(p.id)} />
            ))}
          </ScrollView>
        </View>

        {/* Right Pane - Patient Details */}
        <View className="flex-1">
          <View className="px-6 pt-4 pb-2 flex-row items-center justify-between">
            <View>
              <Text className="font-extrabold">{sel?.name ?? 'Client'}</Text>
              <Text className="text-xs text-[#6b7a77]">Patient setup</Text>
            </View>
            <View className="w-10 h-10 rounded-xl bg-white border border-[#e6eeeb] items-center justify-center">
              <Text>⋯</Text>
            </View>
          </View>

          <View className="px-6">
            <TabPills
              tabs={[
                { key: 'info', label: 'Info Section' },
                { key: 'assessment', label: 'Assessment' },
                { key: ' VR', label: ' VR' },
                { key: 'orientation', label: 'Orientation' },
                // { key: 'upcoming', label: 'Upcoming' },
              ]}
              active={tab}
              onChange={setTab}
            />
          </View>

          {renderTabContent()}
        </View>
      </View> 
    </View>
  );
}