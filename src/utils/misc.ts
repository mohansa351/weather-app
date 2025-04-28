import { API_URL } from "../services/api_helper"

export const fonts = {
    InterBlack: 'Inter-Black',
    InterBold: 'Inter-Bold',
    InterExBold: 'Inter-ExtraBold',
    InterExLight: 'Inter-ExtraLight',
    InterLight: 'Inter-Light',
    InterMedium: 'Inter-Medium',
    InterRegular: 'Inter-Regular',
    InterSemiB: 'Inter-SemiBold',
    InterThin: 'Inter-Thin',
    PoppinsBold: 'Poppins-Bold',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsRegular: 'Poppins-Regular',
}



export function convertIntoCelsius(fahrenheit: any) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function WhichdayToday(fahrenheit: any) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(fahrenheit); 
    return daysOfWeek[date.getDay()];
}

export const formatDate = (dateString: any) => {
    const date = new Date(dateString); 
    const options = { month: "short", day: "numeric" }; 
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

export const hasTimePassed = (timeString: any) => {
    const currentTime = new Date(); 
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
  
    const givenTime = new Date();
    givenTime.setHours(hours, minutes, seconds, 0);
  
    return currentTime > givenTime;
  };