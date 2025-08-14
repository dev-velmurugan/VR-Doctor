import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { ChevronDownIcon, CalendarDaysIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline';

const patients = [
  { name: 'Veera Raghava', age: 23, weight: 60 },
  { name: 'Mahesh Chandra', age: 23, weight: 60 },
  { name: 'Prashanthi C', age: 23, weight: 60 },
];

const dayNames = ['21', '22', '23', '24', '25', '26', '27', '28', '29'];
const selectedDay = '25';

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="p-4 bg-white">
          {/* Header Section */}
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center">
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/4.jpg' }}
                className="w-10 h-10 rounded-full mr-2"
              />
              <View>
                <Text className="text-lg font-bold">Hello Doctor! 👋</Text>
                <Text className="text-sm text-gray-500">Welcome to Ojaska Labs</Text>
              </View>
            </View>
            <View className="flex-row items-center p-2 rounded-full border border-gray-300">
              <CalendarDaysIcon size={20} color="#6B7280" />
              <Text className="ml-2 mr-1">Jan 15, 2024</Text>
              <ChevronDownIcon size={20} color="#6B7280" />
            </View>
          </View>

          {/* Date Picker Section */}
          <View className="flex-row justify-between mb-6">
            {dayNames.map((day, index) => (
              <TouchableOpacity
                key={index}
                className={`w-10 h-10 rounded-lg items-center justify-center ${day === selectedDay ? 'bg-green-500' : 'bg-gray-200'}`}
              >
                <Text className={`text-sm font-bold ${day === selectedDay ? 'text-white' : 'text-gray-800'}`}>
                  {day}
                </Text>
                {day === selectedDay && <Text className="text-xs text-white">Fri</Text>}
              </TouchableOpacity>
            ))}
          </View>

          {/* Patients Queue Header */}
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <Text className="text-lg font-bold mr-2">Patients queue</Text>
              <View className="bg-green-500 rounded-full px-2 py-1">
                <Text className="text-white font-bold">03</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/5.jpg' }}
                className="w-8 h-8 rounded-full mr-2"
              />
              <Text className="text-gray-800 mr-1">Dr. Bindu</Text>
              <ChevronDownIcon size={20} color="#6B7280" />
            </View>
          </View>

          {/* Search Input */}
          <View className="flex-row items-center p-2 bg-gray-100 rounded-xl mb-4">
            <TextInput
              placeholder="Search patient"
              className="flex-1 text-base text-gray-800"
            />
            <MagnifyingGlassIcon size={20} color="#6B7280" />
          </View>

          {/* Patients List */}
          {patients.map((patient, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between p-4 bg-green-50 rounded-xl mb-3"
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 items-center justify-center mr-3">
                  <UserIcon size={32} color="#10B981" /> 
                </View>
                <View>
                  <Text className="text-lg font-bold">{patient.name}</Text>
                  <Text className="text-sm text-gray-500">
                    {patient.age} Years - <Text className="text-red-500">{patient.weight}</Text> kg
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text className="text-xl text-green-500">›</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;