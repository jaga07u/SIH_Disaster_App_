import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Profile = ({ icon }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileCircle}>
        <Image source={icon} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#f2f2f2', // Change background color as needed
  },
  profileImage: {
    width: 32,
    height: 30,
    borderRadius: 40,
  },
});

export default Profile;