import React, { useState } from "react";
import { StyleSheet, View, Image,  TextInput } from "react-native";

import { Text, Button, } from '@rneui/themed';

export default function SubPage({ navigation }) {
  const [email, setEmail] = useState('example@email.com');
  const [firstName, setFirstName] = useState('first name');

  return (
    <View style={styles.container1}>
      <Text style={styles.h1} h1>
        Subscribe To Our Newsletter!
      </Text>
      <Text style={styles.ptext}>
        Subscribe to our newsletter to be the first to know about product launches and exclusive offers!
      </Text>
      <View style={styles.middlesection}>
        <Image style={styles.titleImage} source={require('../assets/icon.png')} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="E-MAIL"
            placeholderTextColor="#fbfaee"
          />
          <Text style={styles.inputLabel}>E-MAIL</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
            placeholderTextColor="#fbfaee"
          />
          <Text style={styles.inputLabel}>NAME</Text>
        </View>

        <Button
          title="Subscribe"
          onPress={() => navigation.navigate('Thankyou')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#1e3f8e",
    padding: 20,
  },
  middlesection: {
    alignItems: 'center',
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
  ptext: {
    fontSize: 15,
    textAlign: 'left',
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
