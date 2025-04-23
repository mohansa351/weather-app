import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen')

const Pagination = ({ data, scrollX, index }: any) => {
    return (
        <View style={{   flexDirection: 'row' ,alignSelf:'center',marginTop:20}}>
            {
                data?.map((_: any, ind: number) => {
                    const inputRange = [
                        (ind - 1) * width, ind * width, (ind + 1) * width
                    ]


                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [15, 15, 15],
                        extrapolate: 'clamp'
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.2, 1, 0.1],
                        extrapolate: 'clamp',
                    });

                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: ['#D9D9D9', '#0B2850', '#D9D9D9'],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View key={ind.toString()} style={[style.dot, { width: dotWidth, backgroundColor },
                            ]} />
                    )
                })
            }
        </View>
    )
}

export default Pagination

const style = StyleSheet.create({
    dot: {
        width: 15, height: 15, borderRadius: 50,
        backgroundColor: '#CCC', marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#000'
    }
})