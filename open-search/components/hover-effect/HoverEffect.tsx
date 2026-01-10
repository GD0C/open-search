import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type HoverEffectProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function HoverEffect({ children, style }: HoverEffectProps) {
  const hovering = useSharedValue(0);

  const hover = Gesture.Hover()
    .onStart(() => {
      hovering.value = 1;
    })
    .onEnd(() => {
      hovering.value = 0;
    });

  const animatedStyle = useAnimatedStyle(() => {
    const lift = hovering.value ? -4 : 0;
    return {
      transform: [{ translateY: withTiming(lift, { duration: 120 }) }],
      shadowOpacity: withTiming(hovering.value ? 0.3 : 0, { duration: 120 }),
      shadowRadius: withTiming(hovering.value ? 6 : 0, { duration: 120 }),
      shadowOffset: { width: 0, height: 3 },
      elevation: withTiming(hovering.value ? 4 : 0, { duration: 120 }),
    };
  });

  return (
    <GestureDetector gesture={hover}>
      <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
    </GestureDetector>
  );
}
