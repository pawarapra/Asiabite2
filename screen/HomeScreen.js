import { StyleSheet, View, Text, Image,  FlatList,ScrollView } from 'react-native';
import { Button } from '@rneui/themed';

import  {getAllBoxs}  from '../data/itemData';

import HomeListBox from '../component/HomeListBox';


export default function HomeScreen({ navigation }) {
 

    const renderItem = ({ item }) => (
        <HomeListBox itemData={item} />
        );



    return(
      <ScrollView>
        
        <View style={styles.container}>


        <View style={styles.section1}>
          <View style={styles.titleImage}>
          <Image  source={require('../assets/welcome.png')} />
          </View>
          <Text style={styles.heading}>asiabite</Text>
          <Text style={styles.subhead}>Step into the flavorful universe of asiabite!</Text>

</View>
<View style={styles.section2}>

        <Text style={styles.section2text}>Get your favorite Asian snacks delivered to your door, in the flavors you love. Enjoy them anytime, anywhere!</Text>
        <View style={styles.section2left}>
        <Image style={styles.section2Image} source={require('../assets/boxbasic.png')} />
        </View>
        </View>
        
<View style={styles.section3}>

      <Text style={styles.section3title}>MEET OUR BOXES</Text>

      <FlatList
      numColumns={2}
  style={styles.boxlist}
  data={getAllBoxs()}
  renderItem={({ item }) => <HomeListBox itemData={item} navigation={navigation} />}
  keyExtractor={item => item.id} 
/>



</View>


<View style={styles.section4}>

        <Text style={styles.section4title}>Order Process</Text>

      <View style={styles.section4row}>
          <Text style={styles.section4num}>1</Text>
          <Text style={styles.section4text}>Select your preferred flavor box! Don't worry, we also offer assorted boxes for those craving a variety of flavors!</Text>
        </View>
        <View style={styles.section4row}>
        <Text style={styles.section4num}>2</Text>
        <Text style={styles.section4text}>Next, choose your box size and place your order!</Text>
        </View>
        <View style={styles.section4row}>
        <Text style={styles.section4num}>3</Text>
        <Text style={styles.section4text}>Enjoy Asiabite snack boxes anywhere - at home, in the office, at parties, or even while camping!</Text>
        </View>

        </View>

        <View style={styles.section5}>
        <Text style={styles.section5text1} >Launching D-Day</Text>
        <View >
        <Text style={styles.section5text2} >-40 day</Text>
        </View>
        <Text style={styles.section5text3} >Join our newsletter for the quickest access to our launch news!</Text>


        <Button
        title="Subscribe Now!"
        onPress={() => navigation.navigate('SubPage')}
        />

        </View>




        </View>
        </ScrollView>





    );
  }
  
  const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'flex-start',
    },
    section1:{
      backgroundColor: '#f5c94a',
      alignItems: 'center',
      height: '100',
      width: 'auto',
    },
    section2:{
      backgroundColor: '#fbfaee',
      height: '100',
      width: 'auto',
    },

    section3:{
      backgroundColor: '#d13337',
      alignItems: 'center',
      height: '100',
      width: 'auto',
    },

    section4:{
      backgroundColor: '#fbfaee',
      alignItems: 'center',
      height: '100',
      width: 'auto',
      paddingVertical:50,
    },
    section5:{
      backgroundColor: '#1e3f8e',
      alignItems: 'center',
      height: '100',
      width: 'auto',
      paddingHorizontal:20,
      paddingVertical:50,
    },



    titleImage: {
      aspectRatio: 1,
      height: 363,
      width: '100%',
      marginTop: 40,
      alignItems: 'center',
    },

    heading: {
      color: '#fbfaee',
      fontWeight: 'bold',
      fontSize: 58,
      marginTop: 10,
      //marginBottom: 5,
    },
    subhead: {
      fontWeight: 'bold',
      fontSize: 17,
      marginBottom: 40,
      textTransform: 'uppercase',
      textAlign: 'center',
      letterSpacing: 0.7,
      width: 300,
    },


    
    section2text:{
      marginTop:20,
      marginLeft:30,
      fontSize: 16,
      width: 250,
    },
    section2Image:{
      width:200,
      height:120,
      marginLeft:190,
      marginTop:-20,
      marginBottom: 15,
    },

    section3title:{
      paddingVertical:20,
      fontWeight: 'bold',
      fontSize:22,
      color: '#fbfaee',
    },







    section4title:{
      fontSize: 27,
      textDecorationLine: 'underline',

    },


    section4row:{
      flexDirection: 'row',
      marginVertical:15,
      width:300,
    },
    section4num:{
      fontSize:25,
      width:20,
    },
    section4text:{
      paddingTop:10,
      fontSize:14,
      width:280,
    },



    section5text1:{
      fontSize:45,
      width:300,
      color: '#f5c94a',
      textAlign: 'center',
      zIndex: 1,
      lineHeight: 40,
    },
    
    section5text2:{
      fontSize:40,
      color: '#1e3f8e',
      backgroundColor: '#fbfaee',
      textAlign: 'center',
      textTransform: 'uppercase',
      paddingHorizontal: 90,
      paddingBottom:20,
      paddingTop:60,
      borderRadius:10,
      marginTop:-50,
      marginBottom:20,
    },
    
    section5text3:{
      fontSize:15,
      width:300,
      color: '#fbfaee',
      textAlign: 'center',
      marginBottom:10,
    },




    

    boxlist:{
        width:'90%',
        paddingBottom:40,
      },
  });
    