import { View, Text, ScrollView, Switch, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { requestgetTempData } from '../../services/backend_helper'
import { convertIntoCelsius, fonts, formatDate, hasTimePassed, WhichdayToday } from '../../utils/misc'
import { shadowStyle } from '../../style/typography'
import { COLORS, ms } from '../../style'
import { ActionSheetRef } from 'react-native-actions-sheet'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { MAP_KEY } from '../../services/api_helper'
import { CrossBorderIcon, SearchIcons, SmallLocationIcon } from '../../component/svgImg'

const Login = ({ navigation, route }: any) => {
  const [tempAllData, setTempAllData] = useState<any>()
  const [currentLocation, setCurrentLocation] = useState<any[] | null>(null);
  const [search, setSearchText] = useState<any>();

  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<any>();
  console.log(currentLocation, 'currentLocation')

  useEffect(() => {
    tempData()
  }, [])

  const tempData = async (lat?: any, long?: any) => {
    const { latitude, longitude } = route?.params?.location
    const data = {
      lat: lat || latitude,
      lng: long || longitude
    }
    try {
      await requestgetTempData(data)
        .then(async (res: any) => {
          setTempAllData(res)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const [isEnabled, setIsEnabled] = useState(false); // State to manage toggle
  const [address, setAddress] = useState('');

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const getDirections = async (desti: any, address?: any) => {
    if (address) {
      setAddress(address);
    }

  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#1A2342", "#7758D1"]} style={styles.gradeient}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps='handled'        >
          <View style={styles.weatherView}>
            <Text style={styles.Weather}>Weather</Text>
            <GooglePlacesAutocomplete
              placeholder="Search"
              ref={ref}
              fetchDetails
              keyboardShouldPersistTaps='always'
              onPress={(data, details) => {
                if (details?.geometry?.location) {
                  const { lat, lng } = details.geometry.location;
                  setCurrentLocation?.([lng, lat]);
                  getDirections?.([lng, lat], details.formatted_address);
                  tempData(lat, lng)
                } else {
                  console.warn('No location details available');
                }
              }}
              styles={{
                textInputContainer: {
                  width: '100%',
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: COLORS.grey92,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                },
                textInput: {
                  flex: 1,
                  backgroundColor: 'transparent',
                  paddingHorizontal: 10,
                  color: COLORS.grey92,
                  fontFamily: fonts.PoppinsMedium,
                  fontSize: 15,
                },
                poweredContainer: { display: 'none' },
                description: {
                  fontWeight: 'bold',
                  color: COLORS.grey54,
                  fontFamily: fonts.PoppinsRegular,
                  fontSize: 15,
                },
                row: {
                  backgroundColor: COLORS.white,
                  // paddingHorizontal: 20,
                  // borderBottomLeftRadius: 20,
                  // borderBottomRightRadius: 20,
                  marginBottom: -10,
                },
                separator: {
                  backgroundColor: 'rgba(33, 33, 33, 1)',
                },
                listView: {
                  marginVertical: 10,
                  marginBottom: 25,
                },
              }}
              timeout={1000}

              minLength={3}
              listLoaderComponent={() => (
                <View style={{ padding: 10 }}>
                  <ActivityIndicator size="large" color={COLORS.white} />
                </View>
              )}
              textInputProps={{
                placeholderTextColor: COLORS.grey92,
                fontFamily: fonts.PoppinsMedium,
                fontSize: 15,
                top: 5,
                // value: search,
                onChangeText: (text) => {
                  console.log(text, 'onchahah');
                  setSearchText(text);
                },

                clearButtonMode: 'never',
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
              }}
              query={{
                key: MAP_KEY,
                language: 'en',
                type: ['establishment', 'street_address'], 

                components: 'country:in',
                location: `23.2594, 76.1465`,
                radius: 10
              }}

              debounce={1000}
              GooglePlacesSearchQuery={{
                rankby: 'distance',
                type: 'restaurant',
                location: `23.2594, 76.1465`,
                language: 'en',

                radius: 10
              }}

              renderRow={(rowData) => {
                // if (!rowData?.description) return null;
                return (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SmallLocationIcon style={{ marginRight: 15 }} />
                    <Text
                      style={{
                        color: COLORS.grey54,
                        fontFamily: fonts.PoppinsRegular,
                        fontSize: 15,
                      }}
                    >
                      {rowData.description}
                    </Text>
                  </View>
                );
              }}
              currentLocation={true}
              predefinedPlaces={[]}
              predefinedPlacesAlwaysVisible
              renderLeftButton={() => <SearchIcons />}
              renderRightButton={() =>
                isFocused ? (
                  <TouchableOpacity
                    onPress={() => {
                      setSearchText('');
                      ref?.current?.clear();
                      setCurrentLocation(null);
                      setAddress('');
                    }}

                  >
                    <CrossBorderIcon />
                  </TouchableOpacity>
                ) : null
              }
            />



          </View>
          <View style={styles.ViewGr}>
            <Image source={require('../../../assets/image/weatherLogo.png')} style={{ height: 200, width: "90%", }} resizeMode='contain' />
            <Text style={styles.texttemp}>{convertIntoCelsius(tempAllData?.days[0]?.temp).toFixed(1)}{'\u00b0'}</Text>
            <Text style={styles.texttemp2}>Precipitations</Text>
            <View style={{ height: 17 }} />
            <Text style={styles.texttemp2}>{`Max: ${convertIntoCelsius(tempAllData?.days[0]?.tempmax).toFixed(1)}\u00b0 Min: ${convertIntoCelsius(tempAllData?.days[0]?.tempmin).toFixed(1)}`}</Text>
          </View>
          <View style={styles.sevenDaysForecast}>
            <Image source={require('../../../assets/image/House.png')} style={{ height: 200, width: "90%", }} resizeMode='contain' />
            <LinearGradient colors={["#7758D1", "#1A2342",]} start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} style={{ paddingHorizontal: ms(3), borderRadius: 27, paddingTop: 29 }}>
              <View style={styles.forcastView}>
                <Text style={styles.sevenDay}>Today</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.sevenDay}>{tempAllData && formatDate(tempAllData?.days[0]?.datetime)}</Text>
                </View>
              </View>
              <ScrollView style={styles.daysTemp} horizontal showsHorizontalScrollIndicator={false}>
                {
                  tempAllData && (
                    <>
                      {
                        tempAllData?.days[0]?.hours.map((item: any) => {
                          const isPassed = hasTimePassed(item?.datetime);
                          if (!isPassed) {
                            return (
                              <View style={[styles.bgView]}>

                                {
                                  isEnabled ? (
                                    <Text style={styles.degree}>{item?.temp}{'\u00b0'}F</Text>
                                  ) : (
                                    <Text style={styles.degree}>{convertIntoCelsius(item?.temp).toFixed(1)}{'\u00b0'}C</Text>
                                  )
                                }
                                <Image source={require('../../../assets/image/weatherLogo.png')} style={{ height: 50, width: 50, }} resizeMode='contain' />
                                <Text style={[styles.degree, { marginTop: 10 }]}>{item?.datetime}</Text>
                              </View>
                            )
                          }
                        })
                      }

                    </>
                  )
                }


              </ScrollView>
              <View style={{ height: 100 }} />
            </LinearGradient>

          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

export default Login