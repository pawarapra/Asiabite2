import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Image,  
  TextInput,  
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
} from "react-native";
import { Text, Button, } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { db } from '../FirebaseConfig';
import { ref, set } from 'firebase/database';

export default function SubPage({ navigation }) {

  navigation.setOptions({
    headerStyle: {
    backgroundColor:'#f5c94a',}
  });

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [isError, isSetError] = useState(false);
  const [error, setError] = useState('')

  const goToThx = () => navigation.navigate('Thankyou')

  const dataAdd = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!firstName) {
    setError("First name is required.");
    console.error("First name is required.");
    isSetError(true);
    return;
    }

    if (!email && !phone) {
      setError("Either email or phone is required.");
      isSetError(true);
      return;
    }

    // If email is provided, validate email format
    if (email && !emailRegex.test(email)) {
      setError("Invalid email format.");
      isSetError(true);
      return;
    }

    // If phone is provided, validate phone format
    if (phone && !phoneRegex.test(phone)) {
      setError("Invalid phone number format.");
      console.error("Invalid phone number format.");
      isSetError(true);
      return;
    }

    // Post info to Firebase
    set(ref(db, 'posts/' + firstName), {
      name: firstName,
      email: email || null,
      phone: phone || null,
    }).then(() => {
      //once info is succesfully submitted, direct to ThankyouScreen
      setFirstName('')
      setEmail('')
      setPhone('')
      goToThx()
      
    });
    
  }

  return (
    <KeyboardAwareScrollView behavior="padding" style={styles.flexkeyboard}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container1}>
      <View style={styles.topsection}>
      <Text h1 >
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
            placeholder={isError ? error : "example@email.com"}
            placeholderTextColor={isError ? "#d13337": "#fbfaee"}
          />
          <Text style={styles.inputLabel}>E-MAIL</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={isError ? styles.inputError : styles.input}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            placeholder={isError ? error :"604-555-555"}
            placeholderTextColor={isError ? "#d13337": "#fbfaee"}
          />
          <Text style={styles.inputLabel}>Phone</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={isError ? styles.inputError : styles.input}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
            placeholder={isError ? error : "First name"}
            placeholderTextColor={isError ? "#d13337": "#fbfaee"}
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

  titleImage: {
    aspectRatio: 1,
    height: 226,
    width: '100%',
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
    fontWeight: 'normal',
    fontFamily: 'Aleo_400Regular',
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
    fontWeight: 'normal',
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  ptext2: {
    width:310,
    marginVertical: 12,
    fontSize: 12,
    textAlign: 'center',
    color: '#fbfaee',
    fontWeight: 'normal',
    fontFamily: 'SpaceGrotesk_400Regular',
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
    fontWeight: 'normal',
    fontFamily: 'Aleo_400Regular',
    
  },
  

});
