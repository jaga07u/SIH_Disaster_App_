import React from 'react';
import {
  useColorScheme,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Disaster from './components/Disaster_Guide';
import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Alert from './components/Alert';
import Volunteer from './components/Volunteer';

// Create the Tab Navigator outside of the App component
const TabNav = createBottomTabNavigator();

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>
        {title}
      </Text>
      <Text
        style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <TabNav.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 10,
            paddingBottom: 5,
            fontWeight: "600" // Should be a string
          },
          tabBarStyle: {
            paddingHorizontal: 20,  // Padding on the left and right
           paddingTop:5
          },
        }}
      >
        <TabNav.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={23} color={focused ? "red" : "black"} />
            ),
          }}
        />
        <TabNav.Screen
          name="Disaster Guide"
          component={Disaster}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="logo-youtube" size={22} color={focused ? "red" : "black"} />
            ),
          }}
        />
        <TabNav.Screen
          name="Alerts"
          component={Alert}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather name="alert-triangle" size={22} color={focused ? "red" : "black"} />
            ),
          }}
        />
        <TabNav.Screen
          name="Volunteer"
          component={Volunteer}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="logo-instagram" size={22} color={focused ? "red" : "black"} />
            ),
          }}
        />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
