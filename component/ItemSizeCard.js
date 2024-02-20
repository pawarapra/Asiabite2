import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';

import ItemSize from '../data/ItemSize';

import Lightbox from 'react-native-lightbox';

export default function ItemSizeCard(){
    const sizecard = ItemSize.map((item) => (
        <View 
            style={myStyles.cardContainer}
            key={item.id}
        >
             <Lightbox 
             key={item.id} renderContent={() => (
                <View style={myStyles.lightboxContentContainer}>
                    <Image style={myStyles.sizeImg} source={item.image} />
                </View>
            )}
             >
            <Image 
                style={myStyles.sizeImg}
                source={item.image}
            />
            </Lightbox>
            <View style={myStyles.sizeDetailBox}>
                <Text style={myStyles.itemName}>
                    {item.name}
                </Text>
                <Text style={myStyles.itemDesc}>
                    {item.description}
                </Text>
                <Text style={myStyles.itemPrice}>
                    CAD{item.price}
                </Text>
            </View>
        </View>
    ))
    return(
        <View>
            {sizecard}
        </View>
    )
}


const myStyles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#FBFAEE',
        paddingVertical:2,
        paddingHorizontal:23,
        marginBottom: 12,
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        padding: 16,
        borderRadius: 15,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    sizeImg:{
        width: 132,
        height: 132,
        borderRadius: 10
    },
    sizeDetailBox:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 18,
        paddingVertical: 20,
    },
    itemName:{
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'SpaceGrotesk_500Medium',
    },
    itemDesc: {
        textAlign: 'right'
    },
    itemPrice: {
        fontSize: 15,
        color: '#1E3F8E'
    },
    lightboxContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

})