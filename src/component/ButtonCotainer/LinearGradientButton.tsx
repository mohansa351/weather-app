import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Animated, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, ms } from '../../style'
import { fonts } from '../../utils/misc'
import LinearGradient from 'react-native-linear-gradient'

type LinearGradientButtonProps = {
    title: string
    pressing: () => void
    loader?: any
    width?:any
    width2?:any
}
const LinearGradientButton = ({ title, pressing, loader,width,width2 }: LinearGradientButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container,{width:width}]} onPress={() => pressing()}>
            <LinearGradient
                colors={['#15417E', '#195BB6']}
                style={styles.linearGradient}
            >
                <View style={[styles.content,{width:width2}]}>
                <Text style={styles.text}>{title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        position: 'relative',
        overflow: 'hidden',
    },
    linearGradient: {
        flex: 1,
        borderRadius: 28,
        padding: 2, // Border width
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: 52, 
        borderRadius: 26,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
         height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        // marginVertical:ms(1)
    },
    text: {
        color: COLORS.bluish,
        fontSize: 14,
        fontFamily: fonts.PoppinsBold,
        textAlign: 'center',
    },
})

export default LinearGradientButton
