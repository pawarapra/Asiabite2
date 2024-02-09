import { StyleSheet, View, Text, Image,  FlatList,ScrollView } from 'react-native';
import { Button } from '@rneui/themed';

import { getAllFlowers } from '../data/flower-data';
import  ItemData  from '../data/itemData';

import HomeListBox from '../component/HomeListBox';

import MyListItem from '../component/MyListItem';



export default function HomeScreen({ navigation }) {


    const renderItem = ({ item }) => (
        <MyListItem itemData={item} navigatorRef={navigation} />
        );



    return(
      <ScrollView>
        
        <View style={styles.container}>


        <View style={styles.section1}>
          <Image style={styles.titleImage} source={require('../assets/icon.png')} />
          <Text style={styles.heading}>asiabite</Text>
          <Text style={styles.heading}>Step into the flavorful universe of asiabite!</Text>

</View>
<View style={styles.section2}>

        <Text>Get your favorite Asian snacks delivered to your door, in the flavors you love. Enjoy them anytime, anywhere!</Text>
        <Image style={styles.titleImage} source={require('../assets/icon.png')} />
        </View>
        
        <View style={styles.section3}>

      <Text>MEET OUR BOXES</Text>
        <FlatList
        style={styles.flowerList}
        data={getAllFlowers()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

</View>
<View style={styles.section4}>

        <Text>Order Process</Text>
        <Text>Select your preferred flavor box! Don't worry, we also offer assorted boxes for those craving a variety of flavors!</Text>
        <Text>Next, choose your box size and place your order!</Text>
        <Text>Enjoy Asiabite snack boxes anywhere - at home, in the office, at parties, or even while camping!</Text>

        </View>

        <View style={styles.section5}>
        <Text>Launching D-Day</Text>
        <View>
        <Text>-40 day</Text>
        </View>
        <Text>Join our newsletter for the quickest access to our launch news!</Text>


        <Button
        title="Sub"
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
    },
    section5:{
      backgroundColor: '#1e3f8e',
      alignItems: 'center',
      height: '100',
      width: 'auto',
    },


    heading: {
      color: '#0000cc',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
    },
  
    titleImage: {
      aspectRatio: 1,
      height: 363,
      width: '100%'
    },

    flowerList:{
        width:'100%'
      },
  });
    