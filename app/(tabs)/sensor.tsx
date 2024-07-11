import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


interface StatItemProps {
    icon: React.ReactNode;
    percentage: string;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, percentage, label }) => (
    <View style={{ alignItems: 'center', flex: 1 }}>
        {icon}
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 8 }}>{percentage}</Text>
        <Text style={{ fontSize: 12, color: 'gray', textAlign: 'center' }}>
            {percentage !== '0%' ? 'of reference value' : 'of reference value'}
        </Text>
        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 4 }}>{label}</Text>
    </View>
);

interface NavItemProps {
    icon: keyof typeof Feather.glyphMap;
    label: string;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => (
    <TouchableOpacity style={{ alignItems: 'center' }}>
        <Feather name={icon} size={24} color={active ? "#3b82f6" : "gray"} />
        <Text style={{ color: active ? "#3b82f6" : "gray" }}>{label}</Text>
    </TouchableOpacity>
);

const data = [
    { icon: <MaterialCommunityIcons name="leaf" size={24} color="#22c55e" />, percentage: "40%", label: "Plant's health" },
    { icon: <MaterialCommunityIcons name="water" size={24} color="#3b82f6" />, percentage: "72%", label: "Water depth" },
    { icon: <Feather name="sun" size={24} color="#eab308" />, percentage: "53%", label: "Photosynthesis" },
    { icon: <MaterialCommunityIcons name="tractor" size={24} color="#f97316" />, percentage: "28%", label: "Soil Respiration" },
    { icon: <MaterialCommunityIcons name="rabbit" size={24} color="#ec4899" />, percentage: "0%", label: "" }
];

const MeadowStatsPage: React.FC = () => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="light" />
                <View style={{ backgroundColor: '#34D399', paddingTop: 8, paddingBottom: 48, paddingHorizontal: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <Feather name="more-horizontal" size={24} color="white" />
                        <Feather name="plus" size={24} color="white" />
                    </View>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Long Meadow</Text>
                    <Text style={{ color: 'white', fontSize: 14, marginBottom: 16 }}>50°05'32.7"N 20°06'26.8"E</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#EF4444', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 4, marginRight: 8 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>LIVE</Text>
                        </View>
                        <View style={{ width: 32, height: 4, backgroundColor: 'white', borderRadius: 999 }} />
                        <Feather name="chevron-right" size={20} color="white" />
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24, marginTop: -32, paddingTop: 16, paddingHorizontal: 16, flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Vegetations index</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: 4, fontWeight: '600', color: '#3b82f6' }}>NDVI</Text>
                            <Feather name="chevron-down" size={20} color="#3b82f6" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default MeadowStatsPage;
