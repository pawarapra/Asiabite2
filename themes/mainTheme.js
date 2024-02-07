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
        
        Button: (buttonProps) => ({
            
            buttonStyle: {
                width: '100%', 
                raised: true,
                borderRadius: 10,
                backgroundColor: themePalette.yellowtheme,
                justifyContent: 'center', 
                alignItems: 'center',
            },
            titleStyle: {
                width: '100%', 
                color: themePalette.primary,
                fontSize: 22,  
                textAlign: 'center',
            },
            disabledStyle: {
                backgroundColor: themePalette.greyDarker,
            },


        }),


        Text: {
            h1Style: {
                color: themePalette.creamtheme,
                fontWeight: 'bold',
                fontSize: 27,  
                       
                // fontFamily: (Platform.OS === 'ios') ? 'Baskerville' : 'serif',                
            },
            // h2Style: {
            //     color: themePalette.primaryLighter,
            //     fontSize: 26,
            //     marginBottom: 10
            // },
            // h3Style: {
            //     color: themePalette.primaryLighter,
            //     fontSize: 20,
            //     margin: 5
            // },
            // style: {
            //     margin: 5
            // }
        },










        // Avatar: {
        //     avatarStyle: {
        //         borderColor: themePalette.primary,
        //         borderWidth: 1,
        //     },
        //     size: 50
        // },

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