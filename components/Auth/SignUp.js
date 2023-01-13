/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
// import {Picker} from '@react-native-picker/picker';
import {authenAPI} from '../../features/authentication/authenAPI';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function SignUpLayout({navigation}) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [captchaResponse, setCaptchaResponse] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isCitizen, setIsCitizen] = useState(true);

  const handleSubmitEvent = (
    name,
    surname,
    userName,
    emailAddress,
    password,
    captchaResponse,
    isCitizen,
    phoneNumber,
    address,
    gender,
    dateOfBirth,
  ) => {
    // console.log(name);
    // console.log(surname);
    // console.log(userName);
    // console.log(emailAddress);
    // console.log(password);
    // console.log(captchaResponse);
    // console.log(isCitizen);
    // console.log(phoneNumber);
    // console.log(address);
    // console.log(gender);
    // console.log(dateOfBirth);
    authenAPI
      .registerAPI({
        name: name,
        surname: surname,
        userName: userName,
        emailAddress: emailAddress,
        password: password,
        captchaResponse: captchaResponse,
        isCitizen: isCitizen,
        phoneNumber: phoneNumber,
        address: address,
        gender: gender,
        dateOfBirth: dateOfBirth,
      })
      .then(response => response)
      .then(responseJson => {
        if (responseJson.data.result.canLogin === true) {
          console.log(responseJson.data.result.canLogin);
          Alert.alert('Sign up success');
          navigation.navigate('Sign in', {name: 'Sign in'});
        } else {
          Alert.alert('Sign up unsuccess');
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Sign up unsuccess');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="First name"
            placeholderTextColor="#003f5c"
            onChangeText={nameInput => setName(nameInput)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Last name"
            placeholderTextColor="#003f5c"
            onChangeText={surnameInput => setSurname(surnameInput)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="User name"
            placeholderTextColor="#003f5c"
            onChangeText={userNameInput => setUserName(userNameInput)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Email address"
            placeholderTextColor="#003f5c"
            onChangeText={emailInput => setEmailAddress(emailInput)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#003f5c"
            onChangeText={passwordInput => setPassword(passwordInput)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone number"
            placeholderTextColor="#003f5c"
            onChangeText={phoneNumberInput => setPhoneNumber(phoneNumberInput)}
          />
        </View>
        <View style={styles.inputView}>
          {/* <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
            <Picker.Item
              label="Gender: male"
              value="male"
              style={{color: '#003f5c'}}
            />
            <Picker.Item
              label="Gender: female"
              value="female"
              style={{color: '#003f5c'}}
            />
            <Picker.Item
              label="Gender: other"
              value="other"
              style={{color: '#003f5c'}}
            />
          </Picker> */}
        </View>
        <View style={styles.inputView}>
          {/* <Picker
            selectedValue={isCitizen}
            onValueChange={(itemValue, itemIndex) => setIsCitizen(itemValue)}>
            <Picker.Item
              label="Is citizen"
              value={true}
              style={{color: '#003f5c'}}
            />
            <Picker.Item
              label="Not citizen"
              value={false}
              style={{color: '#003f5c'}}
            />
          </Picker> */}
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Address"
            placeholderTextColor="#003f5c"
            onChangeText={addressInput => setAddress(addressInput)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Captcha"
            placeholderTextColor="#003f5c"
            onChangeText={captchaResponseInput =>
              setCaptchaResponse(captchaResponseInput)
            }
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Date of birth"
            placeholderTextColor="#003f5c"
            onChangeText={dateOfBirthInput => setDateOfBirth(dateOfBirthInput)}
          />
        </View>

        <View style={styles.inputView}>{/* <CheckBox /> */}</View>
      </ScrollView>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() =>
          handleSubmitEvent(
            name,
            surname,
            userName,
            emailAddress,
            password,
            captchaResponse,
            isCitizen,
            phoneNumber,
            address,
            gender,
            dateOfBirth,
          )
        }>
        <Text style={{color: 'white'}}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEA1B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '85%',
    paddingHorizontal: 20,
  },
  image: {
    height: '50%',
    resizeMode: 'contain',
  },
  inputView: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textInput: {
    marginLeft: 8,
    width: 250,
    fontSize: 15,
    padding: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpButton: {
    width: 250,
    backgroundColor: '#3A5BB3',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 10,
  },
});
