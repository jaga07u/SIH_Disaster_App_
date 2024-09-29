import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Linking } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const AlertCard = ({ title, intensity, issuedBy, location, time }) => {
  const link="https://www.youtube.com/watch?v=MhDqKhJJF_w"
  const handlePress = () => {
    Linking.openURL(link).catch((err) => 
      console.error('An error occurred trying to open the URL:', err)
    );
  };
  // Determine background color based on intensity
  const getBackgroundColor = () => {
    switch (intensity) {
      case 'High Intensity':
        return styles.bgHigh;
      case 'Severe Intensity':
        return styles.bgSevere;
      case 'Low Intensity':
        return styles.bgLow;
      default:
        return styles.defaultBg;
    }
  };
  const getTextBackgroundColor = () => {
    switch (intensity) {
      case 'High Intensity':
        return styles.bgWhite;
      case 'Severe Intensity':
        return styles.bgOrange;
      case 'Low Intensity':
        return styles.bgYellow;
      default:
        return styles.defaultBg;
    }
  };

  return (
    <View style={[styles.alertCard, getBackgroundColor()]}>
      <View style={styles.alertHeader}>
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={[styles.intensity,getTextBackgroundColor()]}>{intensity}</Text>
      </View>
      <Text style={styles.alertSubText}>{issuedBy}</Text>
      <View style={styles.alertDetails}>
      <Ionicons name="location" size={20} color={`${intensity == "High Intensity"?"white":"black"}`} />
        <Text>{location}</Text></View>
        <View style={styles.alertDetails}>
      <Ionicons name="time" size={20} color={`${intensity == "High Intensity"?"white":"black"}`} />
        <Text>{time}</Text></View>

      <View style={styles.actions}>
        <TouchableOpacity>
          <View style={styles.actionText}>
          <MaterialCommunityIcons name="share-outline" size={25} color={`${intensity == "High Intensity"?"white":"black"}`} />
           <Text>Share</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionText}>
          <FontAwesome5 name="assistive-listening-systems" size={25} color={`${intensity == "High Intensity"?"white":"black"}`} />
            <Text>Listen</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.actionText}>
          <Ionicons name="logo-youtube" size={25} color={`${intensity == "High Intensity"?"white":"black"}`} />
           <Text>News</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    alertCard: {
      padding: 16,
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    alertHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    alertTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    intensity: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 12,
      fontWeight: '600',
      textAlign:"center"
    },
    alertSubText: {
      fontSize: 14,
      marginBottom: 5,
    },
    alertDetails: {
      marginVertical:2,
      fontSize: 12,
      color: '#555',
      flex:1,
      flexDirection:"row",
      gap:2
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    actionText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#007BFF',
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },
  
    // Lighter Background Colors
    bgHigh: {
      backgroundColor: '#FFA07A', // Light Orange-Red for High Intensity (unchanged)
    },
    bgSevere: {
      backgroundColor: '#FFE8B2', // Lighter Orange for Severe Intensity
    },
    bgLow: {
        backgroundColor: '#FFFBF2', // Extremely light orange, almost white
      },      
    defaultBg: {
      backgroundColor: '#FFF', // Default background color if no intensity is provided
    },
    bgYellow: {
        backgroundColor: 'yellow', // Light Orange-Red for High Intensity (unchanged)
      },
    bgOrange: {
        backgroundColor: 'orange', // Lighter Orange for Severe Intensity
      },
    bgWhite: {
          backgroundColor: 'white', // Extremely light orange, almost white
        },   
  });
  

export default AlertCard;
