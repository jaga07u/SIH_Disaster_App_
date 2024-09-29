import React from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput } from 'react-native';
import AlertCard from './AlertCard';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Alert = () => {
  const alerts = [
    {
      title: 'Cyclone',
      intensity: 'High Intensity',
      issuedBy: 'Issued by Indian Meteorological Department (IMD)',
      location: 'Odisha, Coastal Areas',
      time: '12:00 IST, 29 Sep 2024',
      intensityStyle: { backgroundColor: '#FDEDED', color: '#FF4747' },
      link:"https://www.youtube.com/watch?v=0iWa9hmB7ag"
    },
    {
      title: 'Earthquake',
      intensity: 'Severe Intensity',
      issuedBy: 'Issued by National Disaster Management Authority (NDMA)',
      location: 'Himachal Pradesh, Near Kangra',
      time: '02:30 IST, 28 Sep 2024',
      intensityStyle: { backgroundColor: '#FDE8D0', color: '#FF7900' },
      link:"https://www.youtube.com/watch?v=jvhl2OQdFwo"
    },
    {
      title: 'Floods',
      intensity: 'Severe Intensity',
      issuedBy: 'Issued by Bihar State Disaster Management Authority',
      location: 'Patna and Surrounding Areas',
      time: '16:45 IST, 27 Sep 2024',
      intensityStyle: { backgroundColor: '#FDE8D0', color: '#FF7900' },
       link:"https://www.youtube.com/watch?v=XXOkJDy32F8"
    },
    {
      title: 'Heatwave',
      intensity: 'Low Intensity',
      issuedBy: 'Issued by Indian Meteorological Department (IMD)',
      location: 'Northern India, Rajasthan',
      time: '13:00 IST, 25 Sep 2024',
      intensityStyle: { backgroundColor: '#D8F5D8', color: '#28A745' },
       link:"https://www.youtube.com/watch?v=t0Nd0p-kNSc"
    },
    {
      title: 'Landslide',
      intensity: 'High Intensity',
      issuedBy: 'Issued by Uttarakhand Disaster Management Authority',
      location: 'Chamoli District, Uttarakhand',
      time: '09:30 IST, 24 Sep 2024',
      intensityStyle: { backgroundColor: '#FDEDED', color: '#FF4747' },
       link:"https://www.youtube.com/watch?v=wSUpbx9V8xc"
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
          link={alert.link}
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
