import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SensorsPage = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView className="bg-white">
      <View
        className="p-4 bg-[#a4c389] rounded-b-3xl"
        style={{ paddingTop: Math.max(insets.top, 16) }}
      >
        <View className="flex-row justify-between mb-2">
          <TouchableOpacity>
            <Text className="text-white text-2xl">...</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white text-2xl">+</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white text-3xl font-bold mb-1">Sensors</Text>
        <Text className="text-white text-sm mb-4">
          50°05'32.7"N 20°06'26.8"E
        </Text>
        <View className="bg-red-500 self-start rounded-full px-3 py-1 mb-4">
          <Text className="text-white font-bold">Connected</Text>
        </View>
      </View>

      <View className="p-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Soil Parameters</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {[
            {
              icon: "🌿",
              color: "bg-[#c8e6c9]",
              title: "Plant's health",
              value: "40%",
            },
            {
              icon: "💧",
              color: "bg-[#e3f2fd]",
              title: "Water depth",
              value: "72%",
            },
            {
              icon: "☀️",
              color: "bg-[#fff3e0]",
              title: "Photosynthesis",
              value: "53%",
            },
            {
              icon: "🚜",
              color: "bg-[#ffe0b2]",
              title: "Soil Respiration",
              value: "28%",
            },
            {
              icon: "🐰",
              color: "bg-[#f8bbd0]",
              title: "Nitrogen",
              value: "1",
            },
            {
              icon: "🐰",
              color: "bg-[#c8e6c9]",
              title: "Phosporous",
              value: "2",
            },
            {
              icon: "🐰",
              color: "bg-[#e3f2fd]",
              title: "Potassium",
              value: "3",
            },
            { icon: "🐰", color: "bg-[#fff3e0]", title: "EC", value: "4" },
            { icon: "🐰", color: "bg-[#ffe0b2]", title: "pH", value: "7" },
            {
              icon: "🐰",
              color: "bg-[#f8bbd0]",
              title: "Moisture",
              value: "30%",
            },
          ].map((item, index) => (
            <View
              key={index}
              className={`${item.color} rounded-2xl p-4 mb-4 w-[48%] h-32 justify-between`}
            >
              <Text className="text-2xl">{item.icon}</Text>
              <View>
                <Text className="text-2xl font-bold">{item.value}</Text>
                <Text className="text-xs text-gray-600">
                  of reference value
                </Text>
                <Text className="text-sm">{item.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default SensorsPage;
