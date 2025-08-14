import React from 'react';
import { View, ImageBackground, Text } from 'react-native';  
export const SplashScreen: React.FC = () => {
  // Use 'require' to reference the local image file
  const splashImage = require('../../assets/spl.png'); 

  return (
    <View className="flex-1">
  <ImageBackground
    source={splashImage}  
    resizeMode="cover"
    className="flex-1 justify-center items-center"
  >
    <Text className="text-white text-3xl font-bold">
      Loading...
    </Text>
  </ImageBackground>
</View>

  );
};