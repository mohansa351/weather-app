import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { strings } from '../../utils/strings';
import HomeScreen from '../../screens/Bottomtabs/Home';
import WarrantyActivationScreen from '../../screens/Bottomtabs/WarrantyActivation';
import QrScanScreen from '../../screens/Bottomtabs/QrScan';
import { HomeIcon, QrscanIcon, ServiceIcon, WarrantyActivationIcon } from '../svgImg';
import { COLORS } from '../../style';
import { fonts } from '../../utils/misc';
import StackHome from '../../screens/Bottomtabs/Home/StackHome';
import StackService from '../../screens/Bottomtabs/Service/StackService';
import StackWarrantyActivation from '../../screens/Bottomtabs/WarrantyActivation/StackWA';
import StackQrScan from '../../screens/Bottomtabs/QrScan/StackQrScan';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    const { t } = useTranslation();
    const { userDetails }: any = useContext(AuthContext)
    console.log(userDetails?.customertype, 'userDetails')
    return (
        <Tab.Navigator
            initialRouteName={'Homes'}
            screenOptions={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.darkgreen,
                    height: 60,
                },
                tabBarHideOnKeyboard: true,
                tabBarAllowFontScaling: true,
            }}>
            {userDetails?.customertype == 2 && (
                <Tab.Screen
                    name={strings.STACKHOME}
                    component={StackHome}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View>
                                    <View style={styles.container}>
                                        <HomeIcon active={focused} />
                                        {
                                            focused ? (
                                                <View style={styles.activeLine} />
                                            ) : null
                                        }
                                    </View>
                                    <Text style={[styles.labelText, { color: focused ? COLORS.lightBlue : COLORS.white, }]}>
                                        {t('HOME')}</Text>
                                </View>
                            );
                        },
                    }}
                />
            )}
            <Tab.Screen
                name={strings.STACKWA}
                component={StackWarrantyActivation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <View style={styles.container}>
                                    <WarrantyActivationIcon active={focused} />
                                    {
                                        focused ? (
                                            <View style={styles.activeLine} />
                                        ) : null
                                    }
                                </View>
                                <Text
                                    style={[styles.labelText, { color: focused ? COLORS.lightBlue : COLORS.white, }]}>
                                    {t('WARRANTY_SCREEN')}</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={strings.STACKSERVICE}
                component={StackService}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <View style={styles.container}>
                                    <ServiceIcon active={focused} />
                                    {
                                        focused ? (
                                            <View style={styles.activeLine} />
                                        ) : null
                                    }
                                </View>
                                <Text style={[styles.labelText, { color: focused ? COLORS.lightBlue : COLORS.white, }]}>
                                    {t('SERVICE')}</Text>
                            </View>
                        );
                    },
                }}
            />
            {userDetails?.customertype == 2 && (
                <Tab.Screen
                    name={strings.STACKQrScan}
                    component={StackQrScan}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View>
                                    <View style={styles.container}>
                                        <QrscanIcon active={focused} />
                                        {
                                            focused ? (
                                                <View style={styles.activeLine} />
                                            ) : null
                                        }
                                    </View>
                                    <Text style={[styles.labelText, {
                                        color: focused ? COLORS.lightBlue : COLORS.white,
                                    }]}>{t('QRSCAN_SCREEEN')}</Text>
                                </View>
                            );
                        },
                    }}
                />
            )}
        </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6
    },
    activeLine: {
        borderWidth: 2,
        borderColor: '#25C4DC',
        width: 96,
        position: 'absolute',
        bottom: -26
    },
    warrantyactiveLine: {
        borderWidth: 2,
        borderColor: '#25C4DC',
        width: 120,
        position: 'absolute',
        bottom: -34
    },
    labelText: {
        fontFamily: fonts.PoppinsRegular, fontSize: 12, textAlign: 'center',
    }
})
export default BottomTab;
