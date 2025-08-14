// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import "./global.css";
// Screens and components
import PatientsScreen from './src/screens/Tabs/patients/PatientAssessmentSplit';
import BottomDock from './src/components/BottomDock';
import HomeScreen from './src/screens/Tabs/home_tab';
import ReportsScreen from './src/screens/Tabs/report_tab';
import { SplashScreen } from './src/screens/SplashScreen';
import DistressThermometerScreen from './src/screens/Tabs/patients/components/assesment/components/DistressThermometerScreen';
 
import EdmontonFactGScreen from './src/screens/Tabs/patients/components/assesment/components/EdmontonFactGScreen';

// Stack type
export type RootStackParamList = {
  Home: undefined;
  Patients: undefined;
  Reports: undefined;
  DistressThermometerScreen: undefined;
  HabitsBeliefsScreen: undefined;
  EdmontonFactGScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [currentRoute, setCurrentRoute] = useState<keyof RootStackParamList>('Home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1, backgroundColor: 'white' }}>
        <NavigationContainer
          onStateChange={(state) => {
            const routeName = state?.routes[state.index]?.name as keyof RootStackParamList;
            if (routeName) setCurrentRoute(routeName);
          }}
        >
          <View style={{ flex: 1 }}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: 'white' },
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Patients" component={PatientsScreen} />
              <Stack.Screen name="Reports" component={ReportsScreen} />
              <Stack.Screen name="DistressThermometerScreen" component={DistressThermometerScreen} />
              {/* Uncomment when ready */}
              {/* <Stack.Screen name="HabitsBeliefsScreen" component={HabitsBeliefsScreen} /> */}
              <Stack.Screen name="EdmontonFactGScreen" component={EdmontonFactGScreen} />
            </Stack.Navigator>
            <BottomDock activeScreen={currentRoute} />
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
 


// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text, SafeAreaView } from 'react-native';
// import PatientsScreen from './src/screens/PatientAssessmentSplit';
// import BottomDock from './src/components/BottomDock';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import HomeScreen from './src/screens/Home/home_tab';
// import './global.css';



// function ReportsScreen() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-lg font-semibold text-gray-800">Reports Screen</Text>
//     </View>
//   );
// }

// export type RootStackParamList = {
//   Home: undefined;
//   Patients: undefined;
//   Reports: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App() {
//   const [currentRoute, setCurrentRoute] = React.useState<keyof RootStackParamList>('Home');

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView className="flex-1 bg-white">
//         <NavigationContainer
//           onStateChange={(state) => {
//             const routeName = state?.routes[state.index]?.name as keyof RootStackParamList;
//             if (routeName) setCurrentRoute(routeName);
//           }}
//         >
//           <View className="flex-1">
//             <Stack.Navigator
//               initialRouteName="Home"
//               screenOptions={{
//                 headerShown: false,
//                 contentStyle: { backgroundColor: 'white' },
//               }}
//             >
//               <Stack.Screen name="Home" component={HomeScreen} />
//               <Stack.Screen name="Patients" component={PatientsScreen} />
//               <Stack.Screen name="Reports" component={ReportsScreen} />
//             </Stack.Navigator>
//             <BottomDock activeScreen={currentRoute} />
//           </View>
//         </NavigationContainer>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// export default App;





// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
// import "./global.css"
// import Home from './src/screens/Home'; 
// import InvestigatorsBrochure from './src/screens/InvestigatorsBrochure';
// import SocioDemographic from './src/screens/SocioDemographic';
// import Screening from './src/screens/Screening';
// import FactG from './src/screens/FactG';
// import PreVR from './src/screens/PreVR';
// import PrePostVR from './src/screens/PrePostVR';
// import PostVRAssessment from './src/screens/PostVRAssessment';
// import StudyObservation from './src/screens/StudyObservation';
// import ExitInterview from './src/screens/ExitInterview';
// import DistressThermometerDemo from './src/screens/DistressThermometerDemo';
// import PatientDashboardScreen from './src/screens/PatientDashboardScreen'; 
// import SetupScreen from './src/screens/SessionSetupScreen'; 
// import SessionControlScreen from './src/screens/SessionControlScreen'; 
// import SessionCompletedScreen from './src/screens/SessionCompletedScreen'; 
// import PatientDatabaseScreen from './src/screens/PatientDatabaseScreen'; 
// import PatientAssessmentSplit from './src/screens/PatientAssessmentSplit'; 
// const Stack = createNativeStackNavigator();

// export default function App(){
//   return (
//     <SafeAreaProvider> 
//     <NavigationContainer>
//       <SafeAreaView className="flex-1 bg-bg">
//         <StatusBar style="dark" />
//         <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
//           <Stack.Screen name="PatientAssessmentSplit" component={PatientAssessmentSplit} />
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="InvestigatorsBrochure" component={InvestigatorsBrochure} options={{ title: "Investigators’ Brochure (B)" }} />
//           <Stack.Screen name="SocioDemographic" component={SocioDemographic} options={{ title: "Socio-Demographic (C)" }} />
//           <Stack.Screen name="Screening" component={Screening} options={{ title: "Patient Screening (D)" }} />
//           <Stack.Screen name="FactG" component={FactG} options={{ title: "FACT-G (G)" }} />
//           <Stack.Screen name="PreVR" component={PreVR} options={{ title: "Pre-VR Assessment (H)" }} />
//           <Stack.Screen name="PrePostVR" component={PrePostVR} options={{ title: "Pre & Post VR (I)" }} />
//           <Stack.Screen name="PostVRAssessment" component={PostVRAssessment} options={{ title: "Post-VR Assessment (J)" }} />
//           <Stack.Screen name="StudyObservation" component={StudyObservation} options={{ title: "Study Observation (K)" }} />
//           <Stack.Screen name="ExitInterview" component={ExitInterview} options={{ title: "Exit Interview" }} />
//           <Stack.Screen name="DistressThermometerDemo" component={DistressThermometerDemo} options={{ title: "Distress Thermometer" }} />
//            <Stack.Screen 
//               name="profile" 
//               component={PatientDatabaseScreen} 
//               options={{ title: "Patient Database" }} 
//             />
//  <Stack.Screen  
//           name="PatientDashboardScreen" 
//           component={PatientDashboardScreen} // Use component reference
//           options={{ title: 'Patient Dashboard' }}
//         /><Stack.Screen 
//               name="Setup" 
//               component={SetupScreen} 
//               options={{ title: "Session Setup" }} 
//             />
// <Stack.Screen 
//               name="Control" 
//               component={SessionControlScreen} 
//               options={{ title: "New Session Setup" }} 
//             />
//             <Stack.Screen 
//               name="Completed" 
//               component={SessionCompletedScreen} 
//               options={{ title: "Complete Session Setup" }} 
//             />
           
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer></SafeAreaProvider>
//   );
// }
 