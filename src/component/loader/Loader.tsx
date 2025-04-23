import { Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS } from '../../style';

interface LoaderProps {
    variant?: 'box' | 'circle'
    width: string | number;
    height: number,
}

const Loader = ({ width, height, variant = 'box' }: LoaderProps) => {
    const opacity = useRef(new Animated.Value(0.3))
    const borderRadius = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.3,
                    useNativeDriver: true,
                    duration: 500
                }),
            ]),
        ).start();
    }, [opacity])

    useEffect(() => {
        if (variant === 'circle') {
            Animated.loop(
                Animated.timing(borderRadius.current, {
                    toValue: height / 2,
                    useNativeDriver: false,
                    duration: 0
                })
            ).start();
        }
    }, [variant, height])

    return (
        <Animated.View
            style={[
                { width, height, opacity: opacity.current },
                variant === 'circle' && { borderRadius: borderRadius.current },
                styles.skeleton
            ]}
        />
    )
}

export default Loader

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: '#DCDCDC'
    }
})
