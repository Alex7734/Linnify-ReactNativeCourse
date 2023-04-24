import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

type PersonalInfo = {
  firstName: string;
  lastName: string;
};

type StudentInfo = {
  faculty: string;
  year: string;
};

export const ScreenWithState = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ firstName: '', lastName: '' });
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ faculty: '', year: '' });
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const handleSubmit = () => {
    const missing: string[] = [];

    if (!personalInfo.firstName) {
      missing.push('firstName');
    }
    if (!personalInfo.lastName) {
      missing.push('lastName');
    }
    if (!studentInfo.faculty) {
      missing.push('faculty');
    }
    if (!studentInfo.year) {
      missing.push('year');
    }

    if (missing.length > 0) {
      setMissingFields(missing);
      Alert.alert('Please fill in all fields');
      return;
    }

    setMissingFields([])
    Alert.alert('Success');
    console.log('Submitting form with data:', { ...personalInfo, ...studentInfo });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Personal info</Text>
        <TextInput
          value={personalInfo.firstName}
          onChangeText={(text) => setPersonalInfo({ ...personalInfo, firstName: text })}
          placeholder="First name"
          style={[styles.input, missingFields.includes('firstName') && styles.missingInput]}
        />
        <TextInput
          value={personalInfo.lastName}
          onChangeText={(text) => setPersonalInfo({ ...personalInfo, lastName: text })}
          placeholder="Last name"
          style={[styles.input, missingFields.includes('lastName') && styles.missingInput]}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Student info</Text>
        <TextInput
          value={studentInfo.faculty}
          onChangeText={(text) => setStudentInfo({ ...studentInfo, faculty: text })}
          placeholder="Faculty"
          style={[styles.input, missingFields.includes('faculty') && styles.missingInput]}
        />
        <TextInput
          value={studentInfo.year}
          onChangeText={(text) => setStudentInfo({ ...studentInfo, year: text })}
          placeholder="Year"
          style={[styles.input, missingFields.includes('year') && styles.missingInput]}
        />
      </View>
      <View style={[styles.form, { marginBottom: 30 }]}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      height: '80%',
      marginTop: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    form: {
      flex: 2,
      width: '80%',
      justifyContent: 'center',
      marginTop: 30
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      padding: 10,
      marginBottom: 10,
    },
    incompleteInput: {
      borderColor: 'red',
    },
    buttonfrom: {
      flex: 1,
      width: '80%',
      justifyContent: 'center',
    },
    missingInput: {
        borderWidth: 1,
        borderColor: 'red',
      },
  });