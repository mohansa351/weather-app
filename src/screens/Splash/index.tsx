import { View, Text, ImageBackground, Image, SafeAreaView, PermissionsAndroid, Alert, Linking, TouchableOpacity, Platform } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from './styles'
import { useFocusEffect } from '@react-navigation/native'
import { strings } from '../../utils/strings'
import LinearGradient from 'react-native-linear-gradient'
import { ms } from '../../style'
import GetLocation from 'react-native-get-location'
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler'
type splashScreenProps = {
  navigation: any
}

const Splash = ({ navigation }: splashScreenProps) => {
  const requestCameraPermission = async () => {
    if(Platform.OS == 'ios'){
      getCurrentLOcation()
    }else{
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission Required',
            message:
              'This app needs access to your location to provide better services.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          checkAndroidLocationPermission()
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to use this feature. Please enable it in the app settings.',
            [{ text: 'OK' }]
          );
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          Alert.alert(
            'Permission Permanently Denied',
            'You have permanently denied location permission. Please enable it manually in the app settings.',
            [{ text: 'Go to Settings', onPress: openAppSettings }]
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const checkAndroidLocationPermission = () => {
    isLocationEnabled()
      .then(enabled => {
        if (enabled) {
          getCurrentLOcation()
        } else {
          console.log('Location is not enabled');
          promptForEnableLocationIfNeeded()
            .then(data => {
              getCurrentLOcation()
              console.log('Location enabled by user:', data);
            })
            .catch(err => {
              console.log(err.message, 'ss');
            });
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  
  // Helper function to open app settings
  const openAppSettings = () => {
      Linking.openSettings()
  };
  

  const getCurrentLOcation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        const { latitude, longitude } = location;
        console.log(latitude, longitude)
        if(latitude && longitude){
          navigation.navigate(strings.LOGIN, {location})
        }
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }
  return (

    <View style={styles.container}>
      <LinearGradient colors={["#1A2342", "#7758D1"]} style={styles.gradeient}>
        <Image source={require('../../../assets/image/weatherLogo.png')} style={{ height: 450, width: "90%", marginTop: ms(4) }} resizeMode='contain' />
        <View style={styles.viewText}>
          <Text style={styles.weatherText}>Weather</Text>
          <Text style={styles.weatherText2}>ForeCasts</Text>
          <TouchableOpacity style={styles.buttonView} onPress={() => {
            requestCameraPermission()
          }}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>

  )
}

export default Splash