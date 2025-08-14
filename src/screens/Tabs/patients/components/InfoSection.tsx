import React from 'react';
import { ScrollView, Text } from 'react-native';
import Card from '..//../../../components/Card';
import { Patient } from '..//../../../components/ListItem';

const InfoSection = ({ patient }: { patient: Patient | undefined }) => (
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <Text className="font-bold mb-2">Patient Information</Text>
    <Card>
      <Text>Name: {patient?.name}</Text>
      <Text>Age: {patient?.age}</Text>
      <Text>Weight: {patient?.weightKg} kg</Text>
      <Text>Status: {patient?.status}</Text>
    </Card>
    <Text className="mt-4 mb-2 text-xs text-[#6b7a77]">Medical History</Text>
    <Card>
      <Text>No significant medical history recorded.</Text>
    </Card>
  </ScrollView>
);

export default InfoSection;