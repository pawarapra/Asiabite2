import React from "react";
import { StyleSheet, View, Text, Image, Button, TextInput } from "react-native";

export default function SubPage({ navigation }) {

  const [text, onChangeText] = React.useState('your email');

  

  return (
    <View style={styles.container}>

      <Text>Something</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        title="Submit"
        onPress={() => navigation.navigate('Thankyou')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  input: {
    height: 40,
    width: '80%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});
