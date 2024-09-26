import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import AlertCard from './AlertCard'; // Make sure the path is correct
import GoogleMap from './GoogleMap'; // Import the GoogleMap component
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Profile from './Profile';

const Home = () => {
  const alerts = [
    {
      title: 'Hurricane Alert',
      intensity: 'Low Intensity',
      issuedBy: 'Issued by Karnataka Government',
      location: 'MV Extension, Hoskote',
      time: '09:12 IST, 24 Aug 2023',
      intensityStyle: { backgroundColor: '#FFF7E6' }, // Pass different styles based on intensity
    },
    // Add more alert objects here
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Location Section */}
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.locationText}>📍 Bengaluru</Text>
          <Text style={styles.locationSubText}>Nesladi Road, Electronic City</Text>
        </View>

        {/* Profile and Icon Section with Flexbox */}
        <View style={styles.profileLan}>
          <FontAwesome name="language" size={25} color="gray" />
          <Profile icon={require("../public/Images/Profile.jpg")} />
        </View>
      </View>

      {/* Active Alerts */}
      <Text style={styles.activeAlertsTitle}>Active Alerts</Text>

      {/* Render Alert Cards */}
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

      {/* Render GoogleMap Component */}
      <View style={styles.mapContainer}>
        <GoogleMap />
      </View>

      {/* SOS Call Button */}
      <View style={styles.sosContainer}>
        <Text style={styles.sosText}>SOS Call</Text>
      </View>
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
    flex: 1,
    flexDirection: 'row', // Use row for horizontal layout
    justifyContent: 'space-between', // Distribute evenly
    alignItems: 'center', // Align vertically in the center
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationSubText: {
    fontSize: 14,
    color: '#666',
  },
  profileLan: {
    flex: 1, // Make this section take up half the space
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'flex-end', // Align items to the right end
    gap:10
  },searchContainer: {
    backgroundColor: '#EDEDED',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 20,
    },
   searchInput: {
    fontSize: 16,
    color: '#333',
    },
  activeAlertsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mapContainer: {
   height: 300, // Adjust map height as needed
   marginVertical: 20,
 },
  sosContainer: {
   backgroundColor: '#FF6666',
   padding: 16,
   borderRadius: 8,
   alignItems: 'center',
   marginTop: 20,
 },
 sosText: {
  color: '#FFF',
   fontWeight: 'bold',
   fontSize: 16,
    },
  // ... other styles
});

export default Home;