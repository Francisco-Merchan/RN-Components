import {Animated, Button, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {useAnimation} from '../Hooks/useAnimation';
import {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation01Screen = () => {
  const {position, opacity, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: theme.colors.primary,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
        color={theme.colors.primary}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
