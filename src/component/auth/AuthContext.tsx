import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { getTokenAsyncStorage, getUserData, setTokenAsyncStorage } from "../../services/auth_helper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }: any) => {
    const [userToken, setUserToken] = useState(null)
    const [roles, setRoles] = useState()
    const [splashScreen, setSplashScreen] = useState(false)
    const [userDetails, setUserDetails] = useState<any>()
    const [itsId, setItsId] = useState()

    const loginPress = async (user: any) => {
        let storeUser: any = await getUserData()
        setUserDetails(user?.userinfo)
        if (storeUser) {
            await setTokenAsyncStorage(user?.userinfo?.token)
            setUserToken(user?.userinfo?.token)
        }
    }
    
    const logoutPress = async () => {
        await AsyncStorage.removeItem('@user')
        await AsyncStorage.clear()

        setUserToken(null)
        setUserDetails(null)

    }

    const isLoggedIn = async () => {
        setSplashScreen(true)
        try {
            let response = await getUserData()
            if (response) {
                let token : any = await getTokenAsyncStorage()
                setUserDetails(response)
                if(token){
                    setUserToken(token)
                }
            } else {
                // setSplashScreen(false)
                setUserToken(null)
            }
        } catch (error) {
            // setSplashScreen(false)
            console.log(error)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ loginPress, userDetails, userToken, setUserToken, setUserDetails, logoutPress, roles, itsId }}>
            {children}
        </AuthContext.Provider>
    )
}