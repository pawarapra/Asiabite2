import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';

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
            <Text>
                THE TOP PICKS THAT COME WITH THIS box1 &#x1F61D;
            </Text>
            <View >
                {pickImg}
            </View>
        </View>
    )
}

const myStyles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#F5C94A',
        borderRadius: 10
    },
    pickImgStyle: {
        width: 36,
        height: 36
    },
    itemflex: {
        flexDirection: 'row',

    }
})