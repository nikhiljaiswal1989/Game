import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from './styles';
const Card = ({ item, onClick, testID }) => {
  const isOpen = item.isOpen || item.isMatchFound;
  const [animatedValue] = useState(new Animated.Value(0));

  isOpen
    ? Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start()
    : Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();

  animatedValue.addListener(({ value }) => {
    value = value;
  });
  let frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  let frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0],
  });
  let backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableWithoutFeedback
      testID={testID}
      onPress={() => {
        !isOpen && onClick();
      }}>
      <View>
        <Animated.View
          style={[
            styles.flipCard,
            frontAnimatedStyle,
            { opacity: frontOpacity },
          ]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardOpen}>
              <Text style={styles.openNumber}>{item.text}</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.flipCard,
            styles.flipCardBack,
            backAnimatedStyle,
            { opacity: backOpacity },
          ]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardNotOpen}>
              <Text style={styles.closeNumber}>?</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(Card);
