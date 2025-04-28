import React from 'react'
import Routes from './src/component/navigations/Routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { AuthProvider } from './src/component/auth/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#0B2850" barStyle="light-content" />
        <Routes />
      </SafeAreaProvider>
    </AuthProvider>
  )
}

export default App