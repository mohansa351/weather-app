import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { strings } from '../../utils/strings'
import { COLORS, ms } from '../../style'
import { fonts } from '../../utils/misc'
import { shadowStyle } from '../../style/typography'

type InputFieldProps = {
    value: any
    maxLength?: any
    name: any
    setValue: any
    secure: boolean
    placeHolder: string
    editable?: boolean
    border?: number
    formikValue?: any
    formikError?: any
    numberOfLines?:any
    keyboard?: 'numeric'
    ref?: any
    onKeyPress?: any
    onSubmit?: () => void
    returnKeyType?: any
}

const InputField = ({ value, setValue, name,numberOfLines, placeHolder,editable, keyboard, formikValue, formikError, ref, onSubmit, maxLength,
    returnKeyType }: InputFieldProps) => {
    const [focus, setFocus] = useState(false)
    return (
        <>
            <View style={[styles.inputBox, formikValue && formikError && styles.errorTextInput]}>
                <View style={[styles.inputView]}>
                    <Text style={styles.textGuide}>{name}</Text>
                    <TextInput
                        style={[styles.innerBox]}
                        ref={ref}
                        value={value}
                        placeholder={placeHolder}
                        autoCapitalize='none'
                        maxLength={maxLength}
                        editable={editable}
                        numberOfLines={numberOfLines}
                        keyboardType={keyboard ? keyboard : ''}
                        onChangeText={(text) => setValue(text)}
                        placeholderTextColor={'grey'}
                        onSubmitEditing={onSubmit}
                        returnKeyType={returnKeyType}
                        onBlur={() => setFocus(false)}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
    },
    inputBox: {
        height: 60,
        borderRadius: 4,
        paddingHorizontal: ms(0),
        backgroundColor: COLORS.white,
        marginTop: ms(0),
    },
    textGuide: {
        fontSize: 14,
        paddingTop: 8,
        color: COLORS.lightGreen,
        fontFamily: fonts.PoppinsRegular, opacity: 0.7,
    },
    innerBox: {
        marginTop: -8,
        paddingHorizontal: -0.2,
        height: 46,
        color: '#0D3E51',
        fontFamily: fonts.PoppinsMedium,
        fontSize: 16,
    },
    errorTextInput: {
        borderWidth: 2,
        borderColor: COLORS.fadeRrrorRed,
        borderRadius: 4,
    },
    activeTextInput: {
        borderWidth: 2,
        borderColor: COLORS.buttonBlue
    },
})

export default InputField