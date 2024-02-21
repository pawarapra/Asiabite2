import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function HomeListBox({ itemData, navigation }) {
  const handlePress = () => {
    // Navigate to ItemDetailScreen when the thumbnail is pressed
    navigation.navigate('Detail', { itemId: itemData.id });
  };
  // console.log(itemData.id);

  return (
    <View  style={styles.container}>
    <TouchableOpacity onPress={handlePress}>

          <Image
            style={styles.img}
            source={itemData.thumbimg}
          />

    </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // padding: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems:'center',
    width: '50%',
    
   
  },
//   imageContainer: {
//     width: '70%',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
  img: {
    width: 160,
    height: 180,
    padding: 10,
    margin:5,
    borderRadius: 8,
   
  },


});
