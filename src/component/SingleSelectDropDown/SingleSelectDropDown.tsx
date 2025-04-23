import React from 'react';
import { Dropdown } from 'react-native-element-dropdown'
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, ms } from '../../style';
import { fonts } from '../../utils/misc';

const SingleDropDown = ({
    label,
    data,
    value,
    onChange,
    maxHeight,
    placeholder,
    searchPlaceholder,
    name,
    formikError,
    formikValue,
}: any) => {
    return (
        <View style={[styles.inputBox, formikValue && formikError && styles.errorTextInput]}>
            <View style={[styles.inputView]}>
                <Text style={styles.textGuide}>{name}</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    itemTextStyle={styles.selectedTextStyle}
                    label={label}
                    search
                    data={data}
                    value={value}
                    onChange={onChange}
                    maxHeight={maxHeight}
                    labelField="label"
                    valueField="value"
                    placeholder={placeholder}
                    searchPlaceholder={searchPlaceholder}
                    dropdownPosition='top'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        marginTop: -10,
        height: 45,
        paddingHorizontal: ms(0),
    },
    placeholderStyle: {
        color: 'grey',
        fontFamily: fonts.PoppinsMedium,
        fontSize: 16,
    },
    selectedTextStyle: {
        color: '#0D3E51',
        fontFamily: fonts.PoppinsMedium,
        fontSize: 14,
    },
    selectedTextStyle2: {
        color: COLORS.lightGreen,
        opacity: 0.7,
        fontFamily: fonts.PoppinsMedium,
        fontSize: 12,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    inputSearchStyle: {
        height: 40,
        color: '#0D3E51',
        fontFamily: fonts.PoppinsMedium,
        fontSize: 12,
    },
    inputView: {
        flex: 1,
    },
    inputBox: {
        height: 60,
        borderRadius: 4,
        backgroundColor: COLORS.white,
        marginTop: ms(0),
    },
    textGuide: {
        fontSize: 12,
        paddingTop: 8,
        color: COLORS.lightGreen,
        paddingHorizontal: ms(0),
        fontFamily: fonts.PoppinsRegular, opacity: 0.7,
    },
    errorTextInput: {
        borderWidth: 2,
        borderColor: COLORS.fadeRrrorRed,
        borderRadius: 4,
    },
})

export default SingleDropDown;
