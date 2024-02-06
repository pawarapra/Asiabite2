import { StyleSheet, View, Text, Image, Button } from "react-native";


export default function MyListItem({ itemData, navigatorRef}){

    return (

        <View style={myListItemStyles.itemContainer} >
            <View style={myListItemStyles.itemColAlpha}>
            <Image style={myListItemStyles.itemThumb} source={{uri: itemData.imageUri }} 
            />
        </View>

            <View style={myListItemStyles.itemColBeta}>
            <Text style={myListItemStyles.itemText}>{itemData.title}</Text>
            </View>
            <View style={myListItemStyles.itemColGamma}>

        
            <Button

                title="Details"
                onPress={() => navigatorRef.navigate('FlowerDetail', {
                detailId: itemData.id,
                })}
            />
            </View>
        </View>

    );

}

const myListItemStyles = StyleSheet.create({
    itemContainer: {
        //backgroundColor: '#eeeeee',
        marginVertical: 2,
        paddingHorizontal: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemColAlpha: {
        paddingLeft: 5,
        alignSelf: 'center',
    },

    itemColBeta: {
        flexGrow: 1,
        alignSelf: 'center',
        paddingLeft: 10,
    },

    itemColGamma: {
        alignSelf: 'center',
        paddingRight: 10
    },

    itemThumb: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'center',
    },

    itemText: {
        fontSize: 18,
    },

});