import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { PhoneIcon } from '../svgImg'
import { COLORS, ms } from '../../style'
import { fonts } from '../../utils/misc'
type PointScreenprops = {
    // icon:any
    title: any
    background: any
    point: any
    borderColor:any
    image:any
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const PointScreen = ({ title, background, point,borderColor,image }: PointScreenprops) => {
    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <View style={[styles.imageContainer,{borderColor:borderColor}]}>
                <Image source={image} style={styles.moneyBag} resizeMode='contain' />
            </View>
            <Text style={styles.titletext}>{title}</Text>
            <Text style={styles.pointText}>{point}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:175,
        width:'49%',
        borderRadius: 10,
        paddingHorizontal:ms(1),
        paddingVertical:ms(2),
        justifyContent:'center',
        alignSelf:'center',
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius:50,
        backgroundColor:COLORS.white,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:3,
    },
    moneyBag: {
        height: 30,
        width: 30,
    },
    text: {
        color: COLORS.darkgreen,
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        paddingHorizontal: 2
    },
    titletext: {
        fontSize: 14,
        color: COLORS.white,
        top:15,
        height:40,
        fontFamily: fonts.PoppinsMedium,
    },
    pointText:{
        fontSize: 22,
        color: COLORS.white,
        marginTop:10,
        fontFamily: fonts.PoppinsBold,
    }
})
export default PointScreen

