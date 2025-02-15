// src/App.js
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {RootStackParamList} from './src/types';

import Attendance from './src/screens/Attendance';
import FaceRecognition from './src/screens/FaceRecognition';
import Registration from './src/screens/Registration';
import {initDatabase} from './src/utils/database'; // Import the database functions

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    // Initialize the database and create the table when the app starts
    initDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="FaceRecognition" component={FaceRecognition} />
        <Stack.Screen name="Attendance" component={Attendance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
