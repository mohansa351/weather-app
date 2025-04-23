import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { shadowStyle } from '../../style/typography';
import { fonts } from '../../utils/misc';
import { strings } from '../../utils/strings';
import { useTranslation } from 'react-i18next';

const screenData = [
  {
    id: 1,
    img: require('../../../assets/image/qrscan.png'),
    title: 'QRSCAN',
    screen: strings.STACKQrScan
  },
  {
    id: 2,
    img: require('../../../assets/image/coupon.png'),
    title: 'COUPON_HISTORY',
    screen: strings.COUPON_HISTORY
  },
  {
    id: 3,
    img: require('../../../assets/image/gift.png'),
    title: 'GIFT_REWARDS',
    screen: strings.GIFT_REWARDS
  },
  {
    id: 4,
    img: require('../../../assets/image/history.png'),
    title: 'REDEMPTION_HISTORY',
    screen: strings.REDEMPTION_HISTORY
  },
];
const HomeScreenData = ({ navigation }: any) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {
        screenData.map((item, index) => {
          return (
            <TouchableOpacity key={item.id}
              onPress={() => navigation.navigate(item?.screen, {
                data: item?.title,
              })}
              style={[styles.mainContainer, shadowStyle]}>
              <LinearGradient colors={['#042D65', '#195BB6']} style={[styles.linearGradient]}>
                <Image
                  source={item.img}
                  resizeMode='cover'
                  style={styles.image}
                />
              </LinearGradient>
              <Text style={styles.titleText}>{t(item.title)}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  mainContainer: {
    backgroundColor: '#F9F6F7',
    height: 132,
    width: "48.2%",
    marginVertical: 8,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  linearGradient: {
    width: 55,
    height: 55,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -12
  },
  image: {
    height: 35, width: 35
  },
  titleText: {
    color: '#272727',
    fontSize: 14,
    marginTop: 10,
    fontFamily: fonts.PoppinsMedium,
  }

})
export default HomeScreenData