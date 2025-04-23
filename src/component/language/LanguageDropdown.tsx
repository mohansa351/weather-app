import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { ArrowDownIcon } from '../svgImg'
import { COLORS } from '../../style'
import { fonts } from '../../utils/misc'
import { Dropdown } from 'react-native-element-dropdown'
import i18n from './languageType/i18n';
import { useTranslation } from 'react-i18next'
const initI18n = i18n;
const LanguageDropdown = () => {
  const {t, i18n} = useTranslation();
  const [def, setDef] = useState({ label: 'English', value: 'en' });
  const [isFocus, setIsFocus] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const langs = [
        { label: 'English', value: 'en' },
        { label: 'हिंदी', value: 'hi' },
        { label: 'বাংলা', value: 'bn' },
        { label: 'தமிழ்', value: 'ta' },
    ];
    const languageNames = {
      en: 'English',
      hi: 'Hindi',
      bn: 'Bengali',
      ta: 'Tamil',
  };
    return (
        <View>
            <TouchableOpacity style={styles.languageContainer} onPress={togglePopup}>
                <Image source={require('../../../assets/image/languageImgage.png')} style={styles.img1} resizeMode='contain' />
                <Text style={styles.englishText}>{languageNames[i18n.language]}</Text>
                <ArrowDownIcon style={styles.languageContainer} />
            </TouchableOpacity>
            {showPopup && (
                <Modal visible={showPopup} transparent={true} animationType='none'>
                    <View style={styles.popupContainer}>
                    {langs?.map((lang) => (
                        <TouchableOpacity key={lang.value} onPress={() => {
                            setDef(lang)
                            i18n.changeLanguage(lang.value);
                            setIsFocus(false);
                            setShowPopup(false);
                        }
                        }>
                            <Text style={styles.popupText}>{lang.label}</Text>
                        </TouchableOpacity>
                    ))}

                    </View>
                </Modal>
            )}
        </View>
        // <Dropdown
        //     data={langs}
        //     style={{
        //         height: 40,
        //         width: 100,
        //         padding: 5,
        //         backgroundColor: 'white',
        //         borderColor: '#ccc',
        //         borderWidth: 1,
        //         borderRadius: 8,
        //     }}
        //     selectedTextStyle={{ fontWeight: '500' }}
        //     selectedTextProps={{ selectionColor: 'black' }}
        //     labelField="label"
        //     valueField="value"
        //     containerStyle={{ borderRadius: 8, paddingVertical: 0 }}
        //     searchPlaceholder="Search..."
        //     value={i18n.language}
        //     onChange={item => {
        // setDef(item);
        // i18n.changeLanguage(item.value);
        // setIsFocus(false);
        //     }}
        // />
    )
}

const styles = StyleSheet.create({
    languageContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    img1: {
        width: 24,
        height: 12,
        alignSelf: 'center',
    },
    languageText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: fonts.InterMedium
    },
    englishText: {
        paddingHorizontal: 6,
        color: COLORS.white,
        fontSize: 14,
        fontFamily: fonts.InterMedium
    },
    popupContainer: {
        position: 'absolute',
        top: 60,
        right: 10,
        width: 100,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        elevation: 4
    },
    popupText: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 14,
        fontFamily: fonts.InterMedium
    }

})
export default LanguageDropdown;
