import React from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput } from 'react-native';
import AlertCard from './AlertCard';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Alert = () => {
  const alerts = [
    {
      title: 'Hurricane Alert',
      intensity: 'Low Intensity',
      issuedBy: 'Issued by Karnataka Government',
      location: 'MV Extension Hoskote',
      time: '09:12 IST, 24 Aug 2023',
      intensityStyle: { backgroundColor: '#D8F5D8', color: '#28A745' },
    },
    {
      title: 'Flood Alert',
      intensity: 'Severe Intensity',
      issuedBy: 'Issued by Karnataka Government',
      location: 'MV Extension Hoskote',
      time: '09:12 IST, 24 Aug 2023',
      intensityStyle: { backgroundColor: '#FDE8D0', color: '#FF7900' },
    },
    {
      title: 'Earthquake Alert',
      intensity: 'High Intensity',
      issuedBy: 'Issued by Karnataka Government',
      location: 'MV Extension Hoskote',
      time: '09:12 IST, 24 Aug 2023',
      intensityStyle: { backgroundColor: '#FDEDED', color: '#FF4747' },
    },
    {
      title: 'Earthquake Alert',
      intensity: 'Severe Intensity',
      issuedBy: 'Issued by Karnataka Government',
      location: 'MV Extension Hoskote',
      time: '09:12 IST, 24 Aug 2023',
      intensityStyle: { backgroundColor: 'white', color: 'black' },
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>📍 Bengaluru</Text>
        <Text style={styles.locationSubText}>Nesladi Road, Electronic City</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search location"
        placeholderTextColor="#999"
      />
      <MaterialCommunityIcons name="circle-double" size={30} color="black" />
      </View>

      {/* Active Alerts */}
      <Text style={styles.activeAlertsTitle}>Active Alerts</Text>

      {/* Use map to render alert cards */}
      {alerts.map((alert, index) => (
        <AlertCard
          key={index}
          title={alert.title}
          intensity={alert.intensity}
          issuedBy={alert.issuedBy}
          location={alert.location}
          time={alert.time}
          intensityStyle={alert.intensityStyle}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  locationContainer: {
    marginBottom: 20,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationSubText: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  searchInput: {
    width:310,
    height:40,
    backgroundColor: 'white',
    paddingVertical: 0,  // Adjusted vertical padding for reduced height
    paddingHorizontal: 0, 
    borderRadius: 8,
    marginBottom: 0,
    fontSize: 16,
    color: '#333',
    overflow:"hidden",
    height: 25,  // Setting height to a more reasonable value
  },
  searchPlaceholder: {
    color: '#999',
      // Keeping small font size for the placeholder
  },
  
  activeAlertsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Alert;
