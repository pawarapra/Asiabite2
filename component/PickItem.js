import { StyleSheet, View, Image } from 'react-native';
import { Text } from '@rneui/themed';


import Lightbox from 'react-native-lightbox';

export default function PickItem({ box }){

    // const activeProps = {
    //     resizeMode: 'contain',
    //     flex: 1,
    //     width: null,
    //     alignItems: 'center',
    //  };
     
    const pickImg = box.pickImgPath.map((item, index) => 
            <Lightbox
            key={index}
            renderContent={() => (
                <View style={myStyles.lightboxContentContainer}>
                    <Image
                        style={myStyles.pickImgStyle}
                        source={item}
                        resizeMode="contain"
                    />
                </View>
            )}>
            <Image 
                style={myStyles.pickImgStyle}
                source={item}
                key={index}
                 resizeMode="contain"
            />
            </Lightbox>
    );

    return(
        <View style={myStyles.container}>
            <Text 
                h4
                style={myStyles.pickItemTitle}>
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
    pickItemTitle:{
        paddingBottom: 16,
    },
    pickImgStyle: {
        width: 36,
        height: 36
    },
    itemflex: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lightboxContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})