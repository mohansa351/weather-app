import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, ms } from '../../style'
import { BackIcon, MenuIcon } from '../svgImg'
import { shadowStyle } from '../../style/typography'
import { fonts, mediaImage } from '../../utils/misc'
import LinearGradient from 'react-native-linear-gradient'
import { AuthContext } from '../auth/AuthContext'
import LanguageDropdown from '../language/LanguageDropdown'

type UserHeaderProps = {
  navigation: any
  title: string
  caption: string
  rishtaName: string
  onBackPress: any;
  image: any
}

const UserHeader = ({ navigation, title, rishtaName, caption, onBackPress, image }: UserHeaderProps) => {
  const {userDetails} : any = useContext(AuthContext)
  return (
    <LinearGradient colors={['#0B2850', '#195BB6']} style={[styles.linearContainer, shadowStyle]}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.editContainer} onPress={() => onBackPress()}>
          <MenuIcon />
        </TouchableOpacity>
        {/* <Image source={require('../../../assets/image/smallSilver.png')} style={styles.img1} resizeMode='contain' /> */}
        <Image source={require('../../../assets/image/saarthiHome.png')} style={styles.img2} resizeMode='contain' />
        <Image source={require('../../../assets/image/bediyaImage.png')} style={styles.img3} resizeMode='contain' />
        <LanguageDropdown />
      </View>
      <View style={styles.silverContainer}>
        <Text style={styles.silverText}>{title}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.shopContainer}>
          <Text style={styles.shopnameText}>{userDetails?.first_name} {userDetails?.last_name}</Text>
          <View>
          <Text style={styles.titleText}>{caption}</Text>
          <Text style={styles.titleText}>{rishtaName}</Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <Image source={userDetails?.shop_image ? {uri: mediaImage(userDetails?.shop_image)} : image} style={styles.profileImage} resizeMode='contain' />
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearContainer: {
    height: 255
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: ms(0),
    paddingVertical: 15
  },
  editContainer: {
    backgroundColor: COLORS.green,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {
    height: 18, width: 16
  },
  img2: {
    height: 40, width: 95
  },
  img3: {
    height: 40, width: 95
  },
  silverContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingVertical: 4
  },
  silverText: {
    color: COLORS.green,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: fonts.PoppinsBold,
  },
  textContainer: {
    flexDirection: 'row',
    marginHorizontal: ms(2),
    justifyContent: 'space-between',
    marginTop: ms(1),
  },
  profileContainer: {
    borderColor: COLORS.white,
    borderWidth: 1,
    height: 78,
    width: 71,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  profileImage: {
    height: 70,
    width: 63,
    backgroundColor: COLORS.white,
    borderRadius: 17,
  },
  shopContainer: {
    width: '80%',
    gap:9
  },
  shopnameText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: fonts.PoppinsBold,
  },
  titleText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: fonts.PoppinsRegular,
    width: '70%'
  }
})
export default UserHeader

