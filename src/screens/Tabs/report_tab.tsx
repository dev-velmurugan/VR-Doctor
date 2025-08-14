import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ["5:00", "6:00", "7:00", "8:00", "9:00", "10:00"],
  datasets: [
    {
      data: [20, 45, 60, 40, 50, 40],
      color: (opacity = 1) => `rgba(90, 150, 255, ${opacity})`,
      strokeWidth: 2
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
};

const ReportsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        
        {/* Header Section */}
        <View className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200">
          <View>
            <Text className="text-2xl font-bold">Reports</Text>
            <Text className="text-gray-500">List of patients (2925)</Text>
          </View>
          <Image
                          source={{ uri: 'https://randomuser.me/api/portraits/women/4.jpg' }}
                          className="w-10 h-10 rounded-full mr-2"
                        />
          {/* <View className="w-10 h-10 rounded-full bg-green-500"></View> */}
        </View>

        {/* User Info */}
        <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
          <View className="flex-1">
            <Text className="text-lg font-semibold">Surender Kumar</Text>
            <Text className="text-sm text-gray-500">ID: 10025863258652</Text>
          </View>
        </View>

        {/* Video Performance & Chemotherapy Stats Section */}
        {/* This is the new, combined section */}
        <View className="flex-row mx-4 mt-4">
          
          {/* Today video performance (Left side) */}
          <View className="flex-1 bg-white p-4 rounded-lg shadow-sm mr-2">
            <Text className="text-lg font-semibold mb-2">Today video performance</Text>
            <View className="h-64 items-center">
              <LineChart
                data={data}
                width={screenWidth * 0.45} // Adjusted width to fit side-by-side
                height={200}
                chartConfig={chartConfig}
                bezier
                withShadow={false}
                withInnerLines={false}
                withOuterLines={false}
                withHorizontalLabels={true}
                withVerticalLabels={true}
              />
              {/* Custom tooltip-like view */}
              <View className="absolute top-1/2 left-1/2 -ml-16 mt-20 p-2 bg-black rounded-lg opacity-80">
                <Text className="text-white text-sm">7:00</Text>
                <Text className="text-white text-lg font-bold">20min</Text>
              </View>
            </View>
            <Text className="text-sm text-gray-500 mt-4">Most viewers stopped at step-3</Text>
          </View>

          {/* Chemotherapy Statistics (Right side) */}
          <View className="flex-1 bg-white p-4 rounded-lg ml-2 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-base font-semibold">Chemotherapy</Text>
              <Text className="text-gray-500">▼</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-500">Total play time</Text>
              <Text className="font-semibold">0h:15m:5s</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-500">Average watch time</Text>
              <Text className="font-semibold">0h:11m:03s</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-500">Watched full video</Text>
              <Text className="font-semibold">34%</Text>
            </View>
          </View>

        </View>

        {/* Patient Details & Cancer Info Section */}
        <View className="mx-4 mt-4">
          
          {/* Patient Details Section */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-green-100 rounded-lg">
            <View className="flex-row items-center">
              <View className="w-8 h-8 mr-2"></View>
              <View>
                <Text className="text-base font-semibold">Patient Details</Text>
                <Text className="text-sm text-green-700">Physician app basic info</Text>
              </View>
            </View>
            <Text className="text-xl font-bold text-green-700">-</Text>
          </TouchableOpacity>

          <View className="bg-white p-4 rounded-b-lg">
            <View className="flex-row flex-wrap justify-between">
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Full name</Text>
                <Text className="text-sm font-semibold">Samantha ruth</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Patient ID</Text>
                <Text className="text-sm font-semibold">102548695869569</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Gender</Text>
                <Text className="text-sm font-semibold">Female</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Mobile</Text>
                <Text className="text-sm font-semibold">+91 97033 636952</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Caregiver number</Text>
                <Text className="text-sm font-semibold">+91 23858 32589</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Smartphone</Text>
                <Text className="text-sm font-semibold">Yes</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Mobile Model</Text>
                <Text className="text-sm font-semibold">MI A3</Text>
              </View>
            </View>
            <View className="mt-2">
              <Text className="text-xs text-gray-500">Address</Text>
              <Text className="text-sm font-semibold">9-13-11/1, Avanthi nagar, mothi nagar, near vijetha vidyalaya, hyderabad, 500018</Text>
            </View>
          </View>
          
          {/* Cancer & Stage Section */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-green-100 rounded-lg mt-4">
            <View className="flex-row items-center">
              <View className="w-8 h-8 mr-2"></View>
              <View>
                <Text className="text-base font-semibold">Cancer & Stage</Text>
                <Text className="text-sm text-green-700">Medical details</Text>
              </View>
            </View>
            <Text className="text-xl font-bold text-green-700">-</Text>
          </TouchableOpacity>

          <View className="bg-white p-4 rounded-b-lg">
            <View className="flex-row flex-wrap justify-between">
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Cancer type</Text>
                <Text className="text-sm font-semibold">Ovarian</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Cancer Stage</Text>
                <Text className="text-sm font-semibold">03</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Grade</Text>
                <Text className="text-sm font-semibold">03</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Treatment history</Text>
                <Text className="text-sm font-semibold">Chemotherapy</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Date of surgery</Text>
                <Text className="text-sm font-semibold">More than 6 weeks</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Current treatment plan</Text>
                <Text className="text-sm font-semibold">Chemotherapy</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Electronic Implants</Text>
                <Text className="text-sm font-semibold">No</Text>
              </View>
              <View className="w-1/2 mb-2">
                <Text className="text-xs text-gray-500">Prosthetics & Orthotics device</Text>
                <Text className="text-sm font-semibold">No</Text>
              </View>
            </View>
          </View>

        </View>

      </ScrollView>
       
      
    </SafeAreaView>
  );
};

export default ReportsScreen;