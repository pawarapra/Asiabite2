import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, Image } from '@rneui/themed';

import ItemData from '../data/itemData';
import PickItem from '../component/PickItem';

export default function ItemDetailScreen({ navigation, route }){
    const item1 = ItemData[0];
    // const { itemId } = route.params;
    // const currentBox = ItemdData(itemId);
    // console.log(item1.img); 


    return(
        <View >
          <ScrollView>
            <View>
                <Image
                    style={myStyles.img}
                    source={require(`../assets/box1.png`)}
                />
                <View style={myStyles.pickContainer}>
                    <Text h1>
                        {item1.boxname}
                    </Text>
                    <Text>
                        {item1.description}
                    </Text>
                    <View>
                        <PickItem box={item1}/>
                    </View>
                </View>
            </View>
            <View>
                <Button 
                    title='Subscribe Now!'
                    onPress={() => navigation.navigate('SubPage')}
                />
            </View>
          </ScrollView> 
        </View>

    );
}

const myStyles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300,
        borderRadius: 10
    },
    pickContainer:{
        padding: 19
    },
    
})