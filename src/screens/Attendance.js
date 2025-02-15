// src/screens/Attendance.js
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const db = SQLite.openDatabase({
      name: 'attendance.db',
      location: 'default',
    });
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM attendance', [], (tx, results) => {
        const rows = results.rows.raw();
        setAttendanceData(rows);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <FlatList
        data={attendanceData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.record}>
            <Text>
              {item.userId} - {new Date(item.timestamp).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {fontSize: 24, textAlign: 'center', marginBottom: 20},
  record: {padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'},
});

export default Attendance;
