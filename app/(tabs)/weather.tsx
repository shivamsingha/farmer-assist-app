import { Text, Image, StyleSheet, Platform, TouchableOpacity, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="px-4 py-2">
        <View className="flex-row justify-between items-center mt-8">
          <View className="flex-row items-center">
            <Image
                source={{ uri: 'https://via.placeholder.com/40' }}
                className="w-10 h-10 rounded-full mr-2"
            />
            <View className="flex-col">
              <Text className="text-sm">Good morning👋</Text>
              <Text className="text-lg font-semibold">User</Text>
            </View>
          </View>
          <View className="flex-row gap-4">
            <TouchableOpacity className="mr-4">
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-xl font-bold mb-2">Todays Weather</Text>
          <View className="bg-blue-500 rounded-lg p-4">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-white text-lg">Location, 27 Nov 2023</Text>
                <Text className="text-white text-4xl font-bold">28°C</Text>
                <Text className="text-white">Humidity 82%</Text>
              </View>
              <View className="items-center">
                <MaterialCommunityIcons name="weather-cloudy" size={48} color="white" />
                <Text className="text-white">Cloudy</Text>
              </View>
            </View>
            <Text className="text-white mt-2">Today is a good day to apply pesticides.</Text>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-xl font-bold mb-2">Todays buyer demand</Text>
          <View className="bg-gray-100 rounded-lg p-4 flex-row items-center">
            <MaterialCommunityIcons name="target" size={24} color="red" />
            <Text className="ml-2">Total demand 4.450 product</Text>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-xl font-bold mb-2">Commodities and Food</Text>
          <View className="flex-row justify-between">
            {['Chicken', 'Rice', 'Corn', 'Other'].map((item, index) => (
                <View key={index} className="items-center">
                  <View className="bg-gray-200 w-16 h-16 rounded-full items-center justify-center mb-1">
                    <Text>{index < 3 ? '🐔🌾🌽'[index] : '•••'}</Text>
                  </View>
                  <Text>{item}</Text>
                </View>
            ))}
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-xl font-bold mb-2">Community</Text>
          {['Farming Community', 'Agriculture Community'].map((item, index) => (
              <View key={index} className="flex-row justify-between items-center bg-gray-100 rounded-lg p-4 mb-2">
                <View className="flex-row items-center">
                  <View className="bg-green-500 w-10 h-10 rounded-full mr-2" />
                  <View>
                    <Text className="font-semibold">{item}</Text>
                    <Text className="text-gray-500">Public Group • {index === 0 ? '128' : '256'} Members</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
                  <Text className="text-white">Gabung</Text>
                </TouchableOpacity>
              </View>
          ))}
        </View>
      </View>
    {/*</ScrollView>
  <View className="flex-row justify-around py-2 bg-white border-t border-gray-200">
    {['home', 'cloud', 'message-square', 'user'].map((icon, index) => (
        <TouchableOpacity key={index} className="items-center">
          <Feather name={icon} size={24} color={index === 0 ? "blue" : "gray"} />
          <Text className={index === 0 ? "text-blue-500" : "text-gray-500"}>
            {['Homepage', 'Weather', 'Community', 'Profile'][index]}
          </Text>
        </TouchableOpacity>
    ))}
  </View>*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
