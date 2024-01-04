import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLigthTheme, theme} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setLigthTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 35,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
            }}>
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 35,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
            }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
