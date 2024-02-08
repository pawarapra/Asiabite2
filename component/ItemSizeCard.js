import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';

import ItemSize from '../data/ItemSize';

export default function ItemSizeCard(){
    const sizecard = ItemSize.map((item) => (
        <View 
            style={myStyles.cardContainer}
            key={item.id}
        >
            <Image 
                style={myStyles.sizeImg}
                source={item.image}
            />
            <View style={myStyles.sizeDetailBox}>
                <Text style={myStyles.itemName}>
                    {item.name}
                </Text>
                <Text style={myStyles.itemDesc}>
                    {item.description}
                </Text>
                <Text style={myStyles.itemPrice}>
                    CAD ${item.price}
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
        padding: 16,
        marginBottom: 16,
        flex:1,
        flexDirection: 'row',
        padding: 16,
        borderRadius: 15,
    },
    sizeImg:{
        width: 150,
        height: 107,
        borderRadius: 10
    },
    sizeDetailBox:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 18,
    },
    itemName:{
        textAlign: 'right',
        fontSize: 16,
        fontWeight: '500',
    },
    itemDesc: {
        textAlign: 'right'
    },
    itemPrice: {
        fontSize: 15,
        color: '#1E3F8E'
    }

})