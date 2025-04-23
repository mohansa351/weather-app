import React, { useEffect } from 'react'
import Routes from './src/component/navigations/Routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PermissionsAndroid, Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/component/redux'
import { AuthProvider } from './src/component/auth/AuthContext'
import AlertPage from './src/component/emitter/AlertPage'

const App = () => {
  const navigationRef = React.useRef(null)
 
  return (
    <AuthProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar backgroundColor="#0B2850" barStyle="light-content" />
          <Routes />
          <AlertPage/>
        </SafeAreaProvider>
      </Provider>
    </AuthProvider>
  )
}

export default App