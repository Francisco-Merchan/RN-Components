import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../interfaces/AppInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={23} />
        <Text style={{...styles.itemText, color: theme.colors.text}}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-forward-outline"
          color={theme.colors.primary}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
