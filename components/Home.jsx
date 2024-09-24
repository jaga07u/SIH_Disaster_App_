import React from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput } from 'react-native';
import AlertCard from './AlertCard';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = () => {
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
    <View style={style.container}>
      <Text style={style.homeText}>Home</Text>
    </View>
  )
}
 const style=StyleSheet.create({
     container:{
      width:"100%",
      height:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:40
     },
     homeText:{
      color:"black",
      fontSize:50
     }
 })

export default Home;
