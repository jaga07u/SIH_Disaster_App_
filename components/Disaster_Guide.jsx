import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Disaster_Guide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Our App Cover</Text>
      <Image source={require('../public/Images/88.jpg')} style={styles.image} />
      <Text style={styles.homeText}>Real Time Disaster Information across India</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
  },
  homeText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 200,  // You can set the width as needed
    height: 200, // You can set the height as needed
    resizeMode: "contain",
  },
});

export default Disaster_Guide;
