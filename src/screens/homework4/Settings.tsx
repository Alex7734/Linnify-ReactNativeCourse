import {StackScreenProps} from '@react-navigation/stack';
import {
  TabRouteProps,
  TabRoutes,
} from '../../navigation/routes/bottom-tab-homework-routes';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useImperativeHandle} from 'react';

type PersonalInfo = {
  firstName: string;
  lastName: string;
};

type StudentInfo = {
  faculty: string;
  year: string;
};

type PersonalInfoRef = {
  getValues: () => PersonalInfo | null;
};

type StudentInfoRef = {
  getValues: () => StudentInfo | null;
};

const PersonalInfoForm = React.forwardRef<PersonalInfoRef>((props, ref) => {
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  useImperativeHandle(ref, () => ({
    getValues: () => {
      if (!firstName || !lastName) {
        Alert.alert('Please fill in all fields');
        return null;
      }

      return {
        firstName,
        lastName,
      };
    },
  }));

  return (
    <View style={styles.form}>
      <Text style={styles.text}>Personal info</Text>
      <TextInput 
        ref={firstNameRef}
        value={firstName} 
        onChangeText={setFirstName} 
        placeholder="First name" 
        style={styles.input} />
      <TextInput 
        ref={lastNameRef} 
        value={lastName} 
        onChangeText={setLastName} 
        placeholder="Last name" 
        style={styles.input} />
    </View>
  );
});

const StudentInfoForm = React.forwardRef<StudentInfoRef>((props, ref) => {
  const facultyRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);
  const [faculty, setFaculty] = React.useState('');
  const [year, setYear] = React.useState('');

  useImperativeHandle(ref, () => ({
    getValues: () => {
      if (!faculty || !year) {
        Alert.alert('Please fill in all fields');
        return null;
      }

      return {
        faculty,
        year,
      };
    },
  }));

  return (
    <View style={styles.form}>
      <Text style={styles.text}>Student info</Text>
      <TextInput 
        ref={facultyRef} 
        value={faculty} 
        onChangeText={setFaculty} 
        placeholder="Faculty" 
        style={styles.input} />
      <TextInput 
        ref={yearRef} 
        value={year} 
        onChangeText={setYear} 
        placeholder="Year" 
        style={styles.input} />
    </View>
  );
});

export const ScreenWithUseImperativeHandle = () => {
  const personalInfoRef = useRef<PersonalInfoRef>({getValues: () => null});
  const studentInfoRef = useRef<StudentInfoRef>({getValues: () => null});

  const handleSubmit = () => {
    const personalInfo = personalInfoRef.current?.getValues();
    const studentInfo = studentInfoRef.current?.getValues();

    if (personalInfo && studentInfo) {
      console.log('Submitting form with data:', {
        ...personalInfo,
        ...studentInfo,
      });
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <PersonalInfoForm ref={personalInfoRef} />
      <StudentInfoForm ref={studentInfoRef} />
      <View style={[styles.buttonfrom, {'marginBottom': 30}]}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    marginTop: 50,
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
    marginTop: 10,
  },
  buttonfrom: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
});
