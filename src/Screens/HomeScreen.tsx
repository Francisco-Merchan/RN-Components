import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItem} from '../Components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../Components/HeaderTitle';
import {ItemSeparator} from '../Components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
