import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../screens/Splash';
import Login from '../../screens/Login';
import { strings } from '../../utils/strings';
import { AuthContext } from '../auth/AuthContext';

const Stack = createStackNavigator();

const AuthStack = () => {
    const { userToken }: any = useContext(AuthContext)
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyleInterpolator: ({ current, layouts }) => {
                return {
                    cardStyle: {
                        transform: [
                            {
                                translateY: current.progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [layouts.screen.height, 0]
                                })
                            }
                        ]
                    }
                };
            }
        }} initialRouteName={strings.SPLASH}>

            <>
                <Stack.Screen name={strings.SPLASH} component={Splash} />
                <Stack.Screen name={strings.LOGIN} component={Login} />
            </>
        </Stack.Navigator>
    )
}

export default AuthStack