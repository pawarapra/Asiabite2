import React, { useState } from "react";
import { StyleSheet, View, Image,  TextInput,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,} from "react-native";
import { Text, Button, } from '@rneui/themed';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


import { db } from '../FirebaseConfig';
import { ref, set } from 'firebase/database';

export default function SubPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isError, isSetError] = useState(false);

  const goToThx = () => navigation.navigate('Thankyou')

  const dataAdd = () => {
    if (!email || !firstName) {
      console.error("Email and first name are required.");
      isSetError(true);
      return;
    }

    // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email address.");
      isSetError(true);
      return;
    }
    // Post info to Firebase
    set(ref(db, 'posts/' + firstName), {
      name: firstName,
      email: email,
    }).then(() => {
      //once info is succesfully submitted, direct to ThankyouScreen
      setFirstName('')
      setEmail('')
      goToThx()
    });
    
  }

  return (
    <KeyboardAwareScrollView behavior="padding" style={styles.flexkeyboard}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container1}>
      <View style={styles.topsection}>
      <Text style={styles.h1} h1>
        Subscribe To Our Newsletter!
      </Text>
      <Text style={styles.ptext}>
        Subscribe to our newsletter to be the first to know about product launches and exclusive offers!
      </Text>
      </View>
<View style={styles.imgsection}>
        <Image style={styles.titleImage} source={require('../assets/sub.png')} />
</View>
        <View style={styles.middlesection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={isError ? styles.inputError : styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="example@email.com"
            placeholderTextColor="#fbfaee"
          />
          <Text style={styles.inputLabel}>E-MAIL</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={isError ? styles.inputError : styles.input}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
            placeholder="First Name"
            placeholderTextColor="#fbfaee"
          />
          <Text style={styles.inputLabel}>NAME</Text>
        </View>

        <Button
          title="Subscribe"
          onPress={dataAdd}
        />
        <Text style={styles.ptext2}>
        We respect your privacy and will only send you relevant updates about product launches and exclusive offers.
      </Text>
      </View>
</View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  flexkeyboard: {
    flex: 1,
    backgroundColor: "#1e3f8e",
  },
  container1: {
    flex: 1,
    // justifyContent: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: "#f5c94a",
    
  },
    topsection: {
      paddingHorizontal: 20,
      paddingTop: 28,
    },
    imgsection:{
      alignItems: 'center',
    },
  middlesection: {
    alignItems: 'center',
    backgroundColor: "#1e3f8e",
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 28,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  h1: {
    textAlign: 'left',
  },
  titleImage: {
    aspectRatio: 1,
    height: 226,
    width: '100%',
    borderRadius: 10,
    marginVertical: 30,
  },
  input: {
    height: 43,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10 ,
    color: '#fbfaee',
    borderColor: '#fbfaee',
  },
  inputError:{
    height: 43,
    width: '100%',
    marginVertical: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10 ,
    color: '#fbfaee',
    borderColor: '#d13337',
  },
  ptext: {
    fontSize: 15,
    textAlign: 'left',
  },
  ptext2: {
    marginVertical: 12,
    fontSize: 12,
    textAlign: 'center',
    color: '#fbfaee',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',

  },
  inputLabel: {
    fontSize: 15,
    backgroundColor: '#1e3f8e',
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 1,
    color: '#fbfaee',
  },
  

});
