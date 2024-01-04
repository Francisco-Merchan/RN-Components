import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {Animation01Screen} from '../Screens/Animation01Screen';
import {Animation02Screen} from '../Screens/Animation02Screen';
import {SwitchScreen} from '../Screens/SwitchScreen';
import {AlertScreen} from '../Screens/AlertScreen';
import {TextInputScreen} from '../Screens/TextInputScreen';
import {PullToRefreshScreen} from '../Screens/PullToRefreshScreen';
import {CustomSectionListScreen} from '../Screens/CustomSectionListScreen';
import {ModalScreen} from '../Screens/ModalScreen';
import {InfiniteScrollScreen} from '../Screens/InfiniteScrollScreen';
import {SlidesScreen} from '../Screens/SlidesScreen';
import {ChangeThemeScreen} from '../Screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {View} from 'react-native';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              // backgroundColor: 'white',
            },
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="Animation01Screen"
            component={Animation01Screen}
          />
          <Stack.Screen
            name="Animation02Screen"
            component={Animation02Screen}
          />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen}
          />
          <Stack.Screen
            name="CustomSectionListScreen"
            component={CustomSectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
