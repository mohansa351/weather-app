import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { PhoneIcon } from '../svgImg'
import { COLORS, ms } from '../../style'
import { fonts } from '../../utils/misc'
import { useTranslation } from 'react-i18next'
type PrivacyContainerprops = {
    title?: any
    number: string,
    sliderData?:any
}
const PrivacyContainer = ({ title, number,sliderData }: PrivacyContainerprops) => {
    const { t } = useTranslation();
    // const [check, setCheck] = useState(true)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.mobileContainer} onPress={() => Linking.openURL(`tel:${number}`)}
>
                <PhoneIcon />
                <Text style={styles.text}>{`${t('NEED_HELP')} ${number}`}</Text>
            </TouchableOpacity>
            {
                title &&
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    const sliderImages = sliderData ? sliderData.filter(item => item.collection_name === 'terms_condition') : [];
                    if (sliderImages.length > 0) {
                        Linking.openURL(sliderImages[0].original_url);
                    }
                }}>
                    <Image source={require('../../../assets/image/checkbox.png')} style={styles.img1} resizeMode='contain' />
                    <Image source={require('../../../assets/image/greyCheck.png')} style={styles.img2} resizeMode='contain' />
                    <Text style={styles.titletext}>{title}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', width: '85%', alignSelf: 'center', marginTop: ms(2), gap: 10
    },
    mobileContainer: {
        flexDirection: 'row'
    },
    text: {
        color: COLORS.darkgreen,
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        paddingHorizontal: 2
    },
    titletext: {
        fontSize: 14,
        color: COLORS.lightGreen,
        fontFamily: fonts.PoppinsRegular, opacity: 0.7,
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    img1: {
        width: 20,
        height: 20,
        marginTop: 5
    },
    img2: {
        width: 14,
        height: 14,
        position: 'absolute',
        top: 7,
        left: 2
    },
})
export default PrivacyContainer

