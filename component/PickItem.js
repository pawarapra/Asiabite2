import { StyleSheet, View, Image } from 'react-native';
import { Text } from '@rneui/themed';

export default function PickItem({ box }){
    const pickImg = box.pickImgPath.map((item, index) => 
            <Image 
                style={myStyles.pickImgStyle}
                source={item}
                key={index}
            />
    );

    return(
        <View style={myStyles.container}>
            <Text style={{paddingBottom: 16}}>
                THE TOP PICKS THAT COME WITH THIS BOX &#x1F61D;
            </Text>
            <View style={myStyles.itemflex}>
                {pickImg}
            </View>
        </View>
    )
}

const myStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginVertical: 14,
        padding: 16,
        backgroundColor: '#F5C94A',
        borderRadius: 10
    },
    pickImgStyle: {
        width: 36,
        height: 36
    },
    itemflex: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})