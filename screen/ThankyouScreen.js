import { StyleSheet, View, Image, } from "react-native";
import { Text, Button, } from '@rneui/themed';

export default function ThankyouScreen({ navigation }) {
    return(
       
      
      <View style={styles.container1}>

          <View style={styles.imgsection}>
          <Image style={styles.titleImage} source={require('../assets/thanks.png')} />
        </View>

        <View style={styles.lowersection}>
        <Text style={styles.tytext}>
        Thank you!
        </Text>
  
        <Text style={styles.ptext}>
        for subscribing to our newsletter. We're on the brink of launching something big. Stay tuned for updates!
        </Text>
  

           
          <Button
            buttonYellow={true}
            title="Go Home"
            titleStyle={{color:'#000000'}}
            onPress={() => navigation.navigate('Home')}

          />

          <Text style={styles.ptext2}>
          E-mail not received?

        </Text>
        <Text style={styles.ptext3}>

Click here to resend
        </Text>
        </View>
  </View>

    );
  }
  
  const styles = StyleSheet.create({


    container1: {
      flex: 1,    
      justifyContent: 'flex-start',
      backgroundColor: "#1e3f8e",

    },
    
      imgsection:{
        paddingTopTop:20,
        alignItems: 'center',
        width: '100%',
        height: 400,
        backgroundColor: '#fbfaee',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },


    lowersection: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 28,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
      },


    tytext:{
        fontSize: 32,
        fontWeight: 800,
        color: '#fbfaee',
      },
   
    ptext: {
      fontSize: 15,
      color: '#fbfaee',
      width: 243,
      marginBottom: 20, 
      textAlign: 'justify',
      letterSpacing: 0.7,
      
    },

    ptext2: {
      marginTop: 20,
      fontSize: 14,
      color: '#fbfaee',

    },
    
    ptext3: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f5c94a',
        textDecorationLine: 'underline',
      },

  
  });
  