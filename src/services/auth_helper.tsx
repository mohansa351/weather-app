// import {useSelector} from 'react-redux';
// import {ApplicationState} from '../redux';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export var token = '';

// UI Code Merged

// export const setLoginAuthToken = (data: string) => {
//   try {
//     // localStorage.setItem("authToken", JSON.stringify(data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getAuthToken = async () => {
//   try {
//     // const token = await localStorage.getItem("authToken");
//     const token = '';
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };


export const setLoginAuthToken = (data: string) => {
  token = data;
};
// Old Method
export const getAuthToken = () => {
  // const stateData = useSelector(
  //   (state: ApplicationState) => state.loginReducers,
  // );
  // var authData = JSON.parse(stateData);
  // const token = authData.token;
  // const token = await getAuthToken();
  console.log(token);
  return token;
};

export const setTokenAsyncStorage = async (data: any) => {
    try {
      return await AsyncStorage.setItem('TOKEN', data);
    } catch (error) {
      console.log(error);
    }
  };
export const getTokenAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('TOKEN');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};
export const setUserData = async (data: string) => {
    try {
      return await AsyncStorage.setItem('@user', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getUserData = async () => {
    try {
      const value : any= await AsyncStorage.getItem('@user');
      const userData = JSON.parse(value)
      if (userData !== null) {
        return userData;
      }
    } catch (error) {
      console.log(error);
    }
  };
