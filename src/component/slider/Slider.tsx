// import { View, Text, FlatList, Image, Dimensions, Animated, TouchableOpacity } from 'react-native'
// import React, { useRef, useState } from 'react'
// import Pagination from './Pagination'

// const { width, height } = Dimensions.get('screen')
// const Slider = ({ navigation, data }: any) => {
//     const [index, setIndex] = useState<any>(0)
//     const scrollX = useRef(new Animated.Value(0)).current
//     const handleScroll = (event: any) => {
//         Animated.event(
//             [
//                 {
//                     nativeEvent: {
//                         contentOffset: {
//                             x: scrollX
//                         },
//                     },
//                 },
//             ],
//             {
//                 useNativeDriver: false
//             }
//         )(event);
//     }

//     const handleonViewableItemsChanged = useRef(({ viewableItems }: any) => {
//         if (viewableItems && viewableItems.length > 0 && viewableItems[0].index !== undefined) {
//             setIndex(viewableItems[0].index)
//         }
//     }).current



//     const viewabilityConfig = useRef({
//         itemVisiblePercentThreshold: 50
//     }).current
//     return (
//         <>
//             <FlatList
//                 data={data}
//                 horizontal
//                 pagingEnabled
//                 snapToAlignment='center'
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={handleScroll}
//                 viewabilityConfig={viewabilityConfig}
//                 onViewableItemsChanged={handleonViewableItemsChanged}
//                 renderItem={({ item }) => {
//                     return (
//                         <View style={{ height: 200, width: width / 1.04,justifyContent:'center' }}>
//                             <Image
//                                 source={item.img}
//                                 resizeMode='cover'
//                                 style={{ height: 188, width: width / 1.06, paddingHorizontal: 10,borderRadius:20 }}
//                             />
//                         </View>
//                     )
//                 }}
//             />
//             <Pagination data={data} scrollX={scrollX} index={index} />
//         </>
//     )
// }

// export default Slider 
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Dimensions, Animated, TouchableOpacity } from 'react-native';
import Pagination from './Pagination';
import Loader from '../loader/Loader';

const { width, height } = Dimensions.get('screen');

const Slider = ({ navigation, data }: any) => {
    const [index, setIndex] = useState<any>(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);
    const [cardData, setCardData] = useState(new Array(3).fill(0))
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (index === data?.length - 1) ? 0 : index + 1;
            setIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }, 2000);

        return () => clearInterval(interval);
    }, [index, data?.length]);

    const handleScroll = (event: any) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event);
    };

    const handleonViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems && viewableItems.length > 0 && viewableItems[0].index !== undefined) {
            setIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    if (data?.length === 0) {
        // Render loader components if no images are available
        return (
            <View>
                {/* <View style={{ width: '100%', height: 188, borderRadius: 20, overflow: "hidden", marginVertical: 10 }}>
                    <Loader width={'100%'} height={188} />
                </View> */}
                <Image
                    source={require('../../../assets/image/modalImage.png')}
                    resizeMode='contain'
                    style={{ height: 188, width: width / 1.06, paddingHorizontal: 10, borderRadius: 20,overflow:'hidden' }}
                />
            </View>
        );
    }

    return (
        <>
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={handleonViewableItemsChanged}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 200, width: width / 1.04, justifyContent: 'center' }}>
                            <Image
                                source={{ uri: item?.original_url }}
                                resizeMode='stretch'
                                style={{ height: 188, width: width / 1.06, paddingHorizontal: 10, borderRadius: 20 }}
                            />
                        </View>
                    );
                }}
            />
            <Pagination data={data} scrollX={scrollX} index={index} />
        </>
    );
};


export default Slider;
