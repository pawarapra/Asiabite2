import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, Image } from '@rneui/themed';

import { getBoxById } from '../data/itemData';
import PickItem from '../component/PickItem';
import ItemSizeCard from '../component/ItemSizeCard';

import Lightbox from 'react-native-lightbox';

export default function ItemDetailScreen({ navigation, route }){
    const { itemId } = route.params;
    // const item1 = getBoxById(3);
    // const { itemId } = route.params;
    // const currentBox = ItemdData(itemId);
    // console.log(item1.img); 
    const cbox = getBoxById(itemId);
    // console.log(itemId);
    // console.log(cbox); 


    return(
        <View >
          <ScrollView>
            <View>

                <View style={myStyles.imgWarpper}>
                <Lightbox >
                    <Image
                        style={myStyles.img}
                        resizeMode="contain"
                        source={cbox.img}
                    />
                </Lightbox>     
                </View>
                <View style={myStyles.pickContainer}>
                    <Text h2>
                        {cbox.boxname}
                    </Text>
                    <Text>
                        {cbox.description}
                    </Text>
                    <View>
                        <PickItem box={cbox}/>
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
    imgWarpper:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#1E3F8E',
        borderRadius: 10,
    },    
    img: {
        width: 337,
        height: 337,
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