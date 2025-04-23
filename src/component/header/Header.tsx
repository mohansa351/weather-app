import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import { COLORS, ms } from '../../style'
import { BackIcon } from '../svgImg'
import { shadowStyle } from '../../style/typography'
import { fonts } from '../../utils/misc'

type HeaderProps = {
  navigation: any
  rightHeaderButton?: () => void
  centerView: boolean
  title?: string
  rightView: boolean
  leftView: boolean
  leftCustomPress?: any
  backPress?: any,
  onBackPress: any;

}

const Header = ({ navigation, rightHeaderButton, centerView, title, rightView, leftView, onBackPress }: HeaderProps) => {
  return (
    <View style={[styles.container, shadowStyle]}>
      <View style={styles.menuContainer}>

        {
          leftView && (
            <TouchableOpacity onPress={() => onBackPress()}>
              <BackIcon />
            </TouchableOpacity>
          )
        }
      </View>
      <View style={rightView == true ? null:styles.title}>
        {
          centerView && (
            <Text style={styles.titletext}>{title}</Text>
          )
        }
      </View>
      <View>
        {
          rightView && rightHeaderButton && (
            <>
              {rightHeaderButton()}
            </>
          )
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(0),
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    height: Platform.OS == 'ios' ? 60 : 65,
    
  },
  menuContainer: {
    width: '15%',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
  },
  titletext: {
    fontSize: 22,
    color: COLORS.blue,
    fontFamily: fonts.PoppinsBold,
    textAlign: 'center'
  },
  rightContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: "15%"
  },
  rightViewContainer:{
    alignSelf: 'center',
    alignItems: 'center',
    width: "15%"
  }

})
// style={rightView == true ? styles.rightViewContainer :styles.rightContainer}
export default Header

