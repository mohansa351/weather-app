// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { MAP_KEY } from '../../services/api_helper';
// import { COLORS } from '../../style';
// import { fonts } from '../../utils/misc';
// import { CrossBorderIcon, SearchIcons, SmallLocationIcon } from '../../component/svgImg';

// const GoogleSearch = ({
//   setScreenData,
//   setCurrentLocation,
//   getDirections,
//   setSearchText,
//   destination,
//   categoryDataList,
//   setEndAddress,
// }: any) => {
//   const [search, setSearch] = useState('');
//   const ref = useRef();

//   const [isFocused, setIsFocused] = useState(false);
//   useEffect(() => {
//     ref.current?.setAddressText('Some Text');
//   }, []);

//   return (
//     <View>
//       <GooglePlacesAutocomplete
//         placeholder="Search"
//         ref={ref_inPut}
//         fetchDetails
//         onPress={(data, details = null) => {
//         //   console.log('Selected details:', details);
//         //   setEndAddress?.(data?.description || '');
//         //   if (details?.geometry?.location) {
//         //     const { lat, lng } = details.geometry.location;
//         //     setScreenData?.(1);
//         //     setSearch('');
//         //     setCurrentLocation?.([lng, lat]);
//         //     getDirections?.([lng, lat], details.formatted_address);
//         //   } else {
//         //     console.warn('No location details available');
//         //   }
//         }}
//         styles={{
//           textInputContainer: {
//             width: '100%',
//             backgroundColor: COLORS.black,
//             borderRadius: 10,
//             borderWidth: 1,
//             borderColor: COLORS.grey92,
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingHorizontal: 15,
//           },
//           textInput: {
//             flex: 1,
//             backgroundColor: 'transparent',
//             paddingHorizontal: 10,
//             color: COLORS.grey92,
//             fontFamily: fonts.PoppinsMedium,
//             fontSize: 15,
//           },
//           poweredContainer: { display: 'none' },
//           description: {
//             fontWeight: 'bold',
//             color: COLORS.grey54,
//             fontFamily: fonts.PoppinsRegular,
//             fontSize: 15,
//           },
//           row: {
//             backgroundColor: COLORS.black,
//             paddingHorizontal: 20,
//             borderBottomLeftRadius: 20,
//             borderBottomRightRadius: 20,
//             marginBottom: -10,
//           },
//           separator: {
//             backgroundColor: 'rgba(33, 33, 33, 1)',
//           },
//           listView: {
//             marginVertical: 10,
//             marginBottom: 25,
//           },
//         }}
//         minLength={3}
//         listLoaderComponent={() => (
//           <View style={{ padding: 10 }}>
//             <ActivityIndicator size="large" color={COLORS.white} />
//           </View>
//         )}
//         textInputProps={{
//           placeholderTextColor: COLORS.grey92,
//           fontFamily: fonts.PoppinsMedium,
//           fontSize: 15,
//           top: 5,
//           value: search,
//           onChangeText: (text) => {
//             setSearch(text);
//             setSearchText?.(text);
//           },
//           clearButtonMode: 'never',
//           onFocus: () => setIsFocused(true),
//           onBlur: () => setIsFocused(false),
//         }}
//         query={{
//           key: MAP_KEY,
//           language: 'en',
//           type: ['establishment', 'street_address'],
//           location:
//             destination?.latitude && destination?.longitude
//               ? `${destination.latitude},${destination.longitude}`
//               : undefined,
//           radius: 10000,
//           components: 'country:in',
//         }}
//         debounce={1000}
//         GooglePlacesSearchQuery={{
//           language: 'en',
//           rankby: 'distance',
//           type: 'restaurant',
//           location:
//             destination?.latitude && destination?.longitude
//               ? `${destination.latitude},${destination.longitude}`
//               : undefined,
//           radius: 10000,
//         }}
//         renderRow={(rowData) => {
//           if (!rowData?.description) return null;
//           return (
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <SmallLocationIcon style={{ marginRight: 15 }} />
//               <Text
//                 style={{
//                   color: COLORS.grey54,
//                   fontFamily: fonts.PoppinsRegular,
//                   fontSize: 15,
//                 }}
//               >
//                 {rowData.description}
//               </Text>
//             </View>
//           );
//         }}
//         renderLeftButton={() => <SearchIcons />}
//         renderRightButton={() =>
//           isFocused ? (
//             <TouchableOpacity
//               onPress={() => {
//                 setSearch('');
//                 ref_inPut?.current?.clear();
//               }}
//             >
//               <CrossBorderIcon />
//             </TouchableOpacity>
//           ) : null
//         }
//       />
//     </View>
//   );
// };

// export default GoogleSearch;
