import React from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput } from 'react-native';
import AlertCard from './AlertCard';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Alert = () => {
  const alerts = [
    {
      title: 'Typhoon',
      intensity: 'High Intensity',
      issuedBy: 'Issued by Taiwan Central Weather Bureau',
      location: 'Taiwan Strait, Eastern Coast',
      time: '10:30 IST, 29 Sep 2024',
      intensityStyle: { backgroundColor: '#FDEDED', color: '#FF4747' },
    },
    {
      title: 'Earthquake',
      intensity: 'Severe Intensity',
      issuedBy: 'Issued by Disaster and Emergency Management Authority (AFAD)',
      location: 'Eastern Turkey, Near Erzurum',
      time: '03:20 IST, 28 Sep 2024',
      intensityStyle: { backgroundColor: '#FDE8D0', color: '#FF7900' },
    },
    {
      title: 'Floods',
      intensity: 'Severe Intensity',
      issuedBy: 'Issued by Sudanese Meteorological Authority',
      location: 'Khartoum and Surrounding Areas',
      time: '14:45 IST, 27 Sep 2024',
      intensityStyle: { backgroundColor: '#FDE8D0', color: '#FF7900' },
    },
    {
      title: 'Hurricane',
      intensity: 'Low Intensity',
      issuedBy: 'Issued by U.S. National Hurricane Center',
      location: 'Pacific Coast, Mexico',
      time: '11:00 IST, 25 Sep 2024',
      intensityStyle: { backgroundColor: '#D8F5D8', color: '#28A745' },
    },
    {
      title: 'Landslide',
      intensity: 'High Intensity',
      issuedBy: 'Issued by National Disaster Risk Reduction and Management Authority (NDRRMA)',
      location: 'Western Nepal, Myagdi District',
      time: '08:15 IST, 24 Sep 2024',
      intensityStyle: { backgroundColor: '#FDEDED', color: '#FF4747' },
    },
  ];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>📍 Bhubaneswar</Text>
        <Text style={styles.locationSubText}>Devik Vihar,Tamando</Text>
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
