import { Aleo_400Regular } from '@expo-google-fonts/aleo';
import { SpaceGrotesk_400Regular } from '@expo-google-fonts/space-grotesk';
import { createTheme } from '@rneui/themed';

// palette is kept as a separate variable to make it easy to change colours
const themePalette = {
    bluetheme: '#1e3f8e',
    redtheme: '#d13337',
    yellowtheme: '#f5c94a',
    creamtheme: '#fbfaee',


    primary: '#000000',
    primaryDarker: '#310649',
    primaryLighter: '#872cba',
    alternate: '#ded000',
    grey: '#aaaaaa',
    greyDarker: '#888888',
    greyLighter: '#cccccc'
}

// a theme follows the pattern: components > [ComponentType] > [ComponentStyle]
export const mainTheme = createTheme({    
    components: {
        
        Button: (buttonColor) => ({
            
            buttonStyle: {
                width: '100%', 
                raised: true,
                borderRadius: 10,
                backgroundColor: buttonColor.buttonYellow ? themePalette.yellowtheme : themePalette.redtheme,
                justifyContent: 'center', 
                alignItems: 'center',
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowOpacity: 0.8 ,
                elevation: 6,
                shadowRadius: 15,
                shadowOffset: {width:1, height:13},
            },
            titleStyle: {
                width: '100%', 
                color: themePalette.creamtheme,
                fontSize: 22,  
                textAlign: 'center',
                fontWeight: 'normal',
                fontFamily: 'SpaceGrotesk_500Medium',
            },
            disabledStyle: {
                backgroundColor: themePalette.greyDarker,
            },
            // subButtonStyle:{
            //     width: '100%',
            //     color: themePalette.creamtheme, 
            //     raised: true,
            //     borderRadius: 10,
            //     backgroundColor: themePalette.redtheme,
            //     justifyContent: 'center', 
            //     alignItems: 'center',
            // },
            // GoHomeButtonStyle:{
            //     width: '100%',
            //     color: themePalette.primary, 
            //     raised: true,
            //     borderRadius: 10,
            //     backgroundColor: themePalette. yellowtheme,
            //     justifyContent: 'center', 
            //     alignItems: 'center',
            // }

        }),


        Text: {
            h1Style: {
                color: themePalette.primary,
                fontWeight: 'bold',
                fontSize: 27,  
                fontWeight: 'normal',
                fontFamily: 'Aleo_700Bold',             
            },
            h2Style:{
                color: themePalette.redtheme,
                fontSize: 27,
                fontWeight: 'normal',
                fontFamily: 'BalginDisplay-ExtraBold', 
            },
            h3Style:{
                color: themePalette.creamtheme,
                fontWeight: 600,
                fontSize: 22,
                marginBottom: 14,
                fontWeight: 'normal',
                fontFamily: 'Aleo_400Regular',
                letterSpacing: 1.5,
            },
            h4Style:{
                color: themePalette.primary,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Aleo_400Regular', 
            },
            h5Style:{
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Aleo_700Bold',
            },
            style:{
                color: themePalette.primary,
                fontSize: 12,
                fontFamily: 'SpaceGrotesk_400Regular',
                
            }
        },


        Avatar: {
            avatarStyle: {
                borderColor: themePalette.primary,
                borderWidth: 1,
            },
            size: 50
        },

        // Divider: {
        //     color: themePalette.primaryLighter,
        //     width: 2
        // },        

        // FAB: {
        //     buttonStyle: {
        //         raised: true,
        //         borderRadius: 15,
        //         backgroundColor: themePalette.primary,
        //     },
        //     titleStyle: {
        //         color: themePalette.alternate
        //     },
        //     icon: {
        //         color: themePalette.alternate,            
        //     },
        //     type: 'clear'
        // },

        
    },


});