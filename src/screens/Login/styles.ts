import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS, ms } from "../../style";
import { fonts } from "../../utils/misc";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: COLORS.white
    },
    gradeient:{
        flex: 1,
        
        
    },
    ViewGr:{
        alignItems:"center",
        marginTop: 20,
        
        flex: 0.2,
        gap: -10,
        justifyContent:"center"
    },
    weatherView:{
        marginTop: 80,
        marginHorizontal:20

    },
    Weather:{
        color: COLORS.white,
        fontSize: 25,
        paddingBottom:20,
        fontFamily: fonts.PoppinsBold,
    },
    texttemp:{
        color: COLORS.white,
        fontSize: 60,
        fontFamily: fonts.PoppinsBold,
        textAlign:"center"
    },
    texttemp2:{
        color: COLORS.white,
        fontSize: 24,
        fontFamily: fonts.PoppinsMedium,
        textAlign:"center",
        marginTop: -5
    },
    sevenDay:{
        color: COLORS.white,
        fontSize: 20,
        fontFamily: fonts.PoppinsMedium,
        
    },
    sevenDaysForecast:{
        
        borderRadius: 20
    },
    daysTemp:{
        
    },
    bgView:{
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginTop: 20,
        alignItems:"center",
        justifyContent:'space-between',
        backgroundColor: 'transparent'
    },
    dateTime:{
        color: COLORS.white,
        fontSize: 12,
        fontFamily: fonts.PoppinsMedium
    },
    degree:{
        color: COLORS.white,
        fontSize: 17,
        fontFamily: fonts.PoppinsMedium
    },
    forcastView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
})
