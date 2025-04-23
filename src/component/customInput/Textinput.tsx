import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { strings } from '../../utils/strings'
import { COLORS, ms } from '../../style'
import { fonts } from '../../utils/misc'

type InputFieldProps = {
    value: any
    setValue: any
    secure: boolean
    placeHolder: string
    border?: number
    formikValue?: any
    formikError?: any
    keyboard?: 'numeric'
    ref?: any
    onSubmit?: () => void
    returnKeyType?: any
}

const Textinput = ({ value, setValue, placeHolder, keyboard, border, formikValue, formikError, ref, onSubmit, 
    returnKeyType }: InputFieldProps) => {
    const [focus, setFocus] = useState(false)
    return (
        <>
            <View style={[styles.inputBox, formikValue && formikError && styles.errorTextInput]}>
                    <TextInput
                        style={styles.innerBox}
                        ref={ref}
                        value={value}
                        placeholder={placeHolder}
                        autoCapitalize='none'
                        editable={false}
                        keyboardType={keyboard ? keyboard : ''}
                        onChangeText={(text) => setValue(text)}
                        placeholderTextColor={'grey'}
                        onSubmitEditing={onSubmit}
                        returnKeyType={returnKeyType}
                        onBlur={() => setFocus(false)}
                    />
                </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        
    },
    innerBox: {
        height: 50,
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

export default Textinput