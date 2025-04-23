import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Animated, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, ms } from '../../style'
import { fonts } from '../../utils/misc'
import LinearGradient from 'react-native-linear-gradient'

type SubmitButtonProps = {
  title: string
  pressing: () => void
  loader?: any
  width?: any,
  loaderWidthh?: any
}


const SubmitButton = ({ title, pressing, loader, width, loaderWidthh }: SubmitButtonProps) => {
  const [loading, setLoading] = useState(false);
  const WIDTH = Dimensions.get('window').width /1.15
  const [widthAnim] = useState(new Animated.Value(WIDTH));

  useEffect(() => {
    if (loader == true) {
      Animated.timing(widthAnim, {
        toValue: 55,
        duration: 500, // Adjust duration as needed
        useNativeDriver: false, // Width animation is not supported by native driver
      }).start();
      // Show loader and hide text
      setLoading(true);
    }

  }, [loader])

  useEffect(() => {
    if (loader == false) {
      setLoading(false);
      // Revert back to initial width after 5 seconds
      Animated.timing(widthAnim, {
        toValue: WIDTH,
        duration: 500, // Adjust duration as needed
        useNativeDriver: false, // Width animation is not supported by native driver
      }).start();
    }
  }, [loader])
  return (
    <Animated.View style={[{ width: loaderWidthh ? widthAnim : WIDTH, alignSelf: 'center', }]}>
      <LinearGradient colors={['#15417E', '#195BB6']} 
      style={[styles.buttonContainer, { width: "100%", }]}>
        <TouchableOpacity style={[styles.buttonContainer, { width: "100%", }]} onPress={() => pressing()}>
          {
            loading ? (
              <ActivityIndicator color={COLORS.white} size={45} />
            ) : (
              <Text style={styles.text}>{title}</Text>
            )
          }
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    alignSelf: 'center',
    // marginVertical:ms(1)
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: fonts.InterBold
  },
})

export default SubmitButton