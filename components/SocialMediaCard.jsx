import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const SocialMediaCard = ({ platform, image, title, link }) => {

  // Function to open the URL
  const handlePress = () => {
    Linking.openURL(link).catch((err) => 
      console.error('An error occurred trying to open the URL:', err)
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={{ uri: `${image}` }} style={styles.image} />
        <Text style={styles.link}>{title}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 140,
    margin: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  link: {
    width: 120,
    height: 40,
    marginBottom: 5,
    // color: 'blue',
    // textDecorationLine: 'underline',
    overflow: 'hidden',
    textAlign: 'center',
  },
});

export default SocialMediaCard;
