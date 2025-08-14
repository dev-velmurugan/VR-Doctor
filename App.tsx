import React, { useEffect, useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import "./global.css";

import PatientsScreen from './src/screens/Tabs/patients/PatientAssessmentSplit';
import BottomDock from './src/components/BottomDock';
import HomeScreen from './src/screens/Tabs/home_tab';
import ReportsScreen from './src/screens/Tabs/report_tab';
import { SplashScreen } from './src/screens/SplashScreen';
import Login from '@screens/Login';
import PreVR from '@screens/PreVR';
import PrePostVR from '@screens/PreAndPostVR';
import PostVRAssessment from '@screens/PostVRAssessment';
import PreAndPostVR from '@screens/PreAndPostVR';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Patients: undefined;
  Reports: undefined;
  PreVR:undefined;
  PostVRAssessment:undefined;
  PreAndPostVR:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Splash({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return <SplashScreen />;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<keyof RootStackParamList>('Splash');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <NavigationContainer
          onStateChange={(state) => {
            const route = state?.routes[state.index];
            const routeName = route?.name as keyof RootStackParamList;
            setCurrentRoute(routeName);
          }}
        >
          <View style={{ flex: 1 }}>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Patients" component={PatientsScreen} />
              <Stack.Screen name="Reports" component={ReportsScreen} />
             <Stack.Screen 
              name="PreVR" 
              component={PreVR} 
             options={{ headerShown: true, title: "Pre VR Form" }} 
/>
            <Stack.Screen 
              name="PostVRAssessment" 
              component={PostVRAssessment} 
             options={{ headerShown: true, title: "Post VR Form" }} 
/>
           <Stack.Screen name="PreAndPostVR" component={PreAndPostVR}
            options={{headerShown:true,title:"Pre & Post "}} />
            </Stack.Navigator>

           
            {['Home', 'Patients', 'Reports'].includes(currentRoute) && (
              <BottomDock activeScreen={currentRoute} />
            )}
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


 


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
 