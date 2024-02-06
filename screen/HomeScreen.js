import { StyleSheet, View, Text, Image, Button, FlatList,ScrollView } from 'react-native';

import { getAllFlowers } from '../data/flower-data';

import MyListItem from '../component/MyListItem';

export default function HomeScreen({ navigation }) {


    const renderItem = ({ item }) => (
        <MyListItem itemData={item} navigatorRef={navigation} />
        );



    return(

        
        <View style={styles.container}>
        <ScrollView>
        <Image style={styles.titleImage} source={require('../assets/icon.png')} />
        <Text style={styles.heading}>Welcome to Flowers R'Us</Text>
  
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit accumsan neque, quis dignissim dui ultrices ac. Donec euismod eros eget lectus ultricies condimentum. Phasellus pulvinar elit lectus, a congue justo tempus sed.</Text>
  

        <Button
        title="Sub"
        onPress={() => navigation.navigate('SubPage')}
        />



        <FlatList
        style={styles.flowerList}
        data={getAllFlowers()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


        <Button
        title="Sub"
        onPress={() => navigation.navigate('SubPage')}
        />


        </ScrollView>
      </View>




    );
  }
  
  const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
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
      height: 400,
      width: '100%'
    },
    flowerList:{
        width:'100%'
      },
  });
    