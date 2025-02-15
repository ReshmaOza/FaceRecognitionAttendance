// src/screens/FaceRecognition.js
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const FaceRecognition = ({navigation}) => {
  const [isCameraReady, setIsCameraReady] = useState(false);

  const handleFaceDetected = ({faces}) => {
    if (faces.length > 0) {
      // Process face recognition here (local database check, mark attendance)
      console.log('Face detected');
      markAttendance();
    }
  };

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  const markAttendance = () => {
    // Save attendance to local database (or sync with a backend)
    console.log('Attendance marked');
    navigation.navigate('Attendance');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Face Recognition</Text>
      <RNCamera
        style={styles.camera}
        onFaceDetected={handleFaceDetected}
        onCameraReady={handleCameraReady}
        type={RNCamera.Constants.Type.front}
      />
      {!isCameraReady && <Text>Initializing camera...</Text>}
      <Button title="Mark Attendance" onPress={markAttendance} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  camera: {width: '100%', height: '100%'},
  title: {fontSize: 24, textAlign: 'center', marginBottom: 20},
});

export default FaceRecognition;
