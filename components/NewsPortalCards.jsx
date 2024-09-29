import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NewsPortalCards = ({ title, source, image, link }) => {
  const handlePress = () => {
    Linking.openURL(link).catch((err) => 
      console.error('An error occurred trying to open the URL:', err)
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.source}>{source}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    width: '100%',
  },
  image: {
    width: 70,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  source: {
    color: '#888',
    fontSize: 14,
    marginBottom: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewsPortalCards;
