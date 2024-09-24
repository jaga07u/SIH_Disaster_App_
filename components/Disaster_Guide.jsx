import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Disaster_Guide = () => {
  return (
    <View style={style.container}>
      <Text style={style.homeText}>Disaster Guide</Text>
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

export default Disaster_Guide