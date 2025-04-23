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


export function mediaImage(url: any) {
    return `${API_URL}/public/uploads/${url}`
}

export function convertIntoCelsius(fahrenheit: any) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function WhichdayToday(fahrenheit: any) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(fahrenheit); // Convert the string to a Date object
    return daysOfWeek[date.getDay()]; // Get the day name
}

export const formatDate = (dateString: any) => {
    const date = new Date(dateString); // Convert string to Date object
    const options = { month: "short", day: "numeric" }; // Short month and numeric day
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

export const hasTimePassed = (timeString: any) => {
    const currentTime = new Date(); // Get the current date and time
    const [hours, minutes, seconds] = timeString.split(":").map(Number); // Split timeString into hours, minutes, seconds
  
    // Create a Date object for the given time today
    const givenTime = new Date();
    givenTime.setHours(hours, minutes, seconds, 0);
  
    // Compare the current time with the given time
    return currentTime > givenTime; // Returns true if the current time is past the given time
  };