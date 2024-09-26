import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const GoogleMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  const coordinates = [
    { lat: 20.2351966, lng: 85.7387387 },
    { lat: 20.222716, lng: 85.735474 },
    { lat: 20.238810, lng: 85.747003 },
    { lat: 27.681692, lng: 80.397461 },
    { lat: 33.235195, lng: 74.412641 },
    { lat: 26.713638, lng: 72.519580 }
  ];

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can access location');
          getLocation();
        } else {
          console.log('Location permission denied');
        }
      } else {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (result === RESULTS.GRANTED) {
          console.log('You can access location');
          getLocation();
        } else {
          console.log('Location permission denied');
        }
      }
    };
//20.232688, 85.752747
    const getLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: 20.232688,
            longitude: 85.752747,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Add more detailed error handling based on error.code
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 2000 }
      );
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {userLocation ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 20.5937, // Center latitude for India
            longitude: 78.9629, // Center longitude for India
            latitudeDelta: 15, // Adjust delta for zoom level (higher is zoomed out)
            longitudeDelta: 15,
          }}
          showsUserLocation
        >
          {coordinates.map((location, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              title="Disaster Icon"
              description="Disaster location"
              image={{
                uri:
                  index % 2 === 0
                    ? 'https://res.cloudinary.com/dzd7dc6w6/image/upload/v1724686625/jplhw8uilwokj7kck7ff.png'
                    : 'https://res.cloudinary.com/dzd7dc6w6/image/upload/v1724685844/qpimlddhcpvl20hg6u0u.png',
              }}
              style={styles.marker}
            />
          ))}
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 40,
    height: 40,
  },
});

export default GoogleMap;
