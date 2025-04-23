import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS, ms } from "../../style";
import { fonts } from "../../utils/misc";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradeient:{
        flex: 1,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    viewText:{
        
        alignItems:"center",
        
    },
    weatherText:{
        fontFamily: fonts.PoppinsBold,
        fontSize: 64,
        color: COLORS.white,

    },
    weatherText2:{
        fontFamily: fonts.PoppinsMedium,
        fontSize: 60,
        color: '#DDB130',
        marginTop: -20

    },
    buttonText:{
        fontFamily: fonts.PoppinsMedium,
        color: COLORS.white,
        fontSize: 22
    },
    buttonView:{
        backgroundColor: COLORS.lightorange,
        borderRadius: 22,
        paddingVertical: 3,
        paddingHorizontal: ms(4),
        width: "100%"
    },
})
