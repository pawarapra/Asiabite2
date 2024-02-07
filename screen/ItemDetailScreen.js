import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, Image } from '@rneui/themed';

import ItemData from '../data/itemData';
import PickItem from '../component/PickItem';
import ItemSizeCard from '../component/ItemSizeCard';

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
                    <Text h2>
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
            <View style={myStyles.sizeListContainer}>
                <Text h3>
                    Explore Sizes & Prices
                </Text>
                <ItemSizeCard />
                <View>
                    <Text style={myStyles.newsLetter}>
                        Join our newsletter for the quickest access to our launch news!
                    </Text>
                    <View>
                        <Button 
                            title='Subscribe Now!'
                            onPress={() => navigation.navigate('SubPage')}
                            subButton={true}
                        />
                    </View>
                </View>
            </View>
          </ScrollView> 
        </View>

    );
}

const myStyles = StyleSheet.create({
    sizeListContainer:{
        backgroundColor: '#1E3F8E',
        paddingHorizontal: 20,
        paddingVertical: 28,
    },
    img: {
        width: '100%',
        height: 300,
        borderRadius: 10
    },
    pickContainer:{
        padding: 19
    },
    newsLetter:{
        textAlign:'center',
        fontSize: 15,
        paddingHorizontal: 40,
        color: '#FBFAEE',
        marginBottom: 10,
    }
    
})