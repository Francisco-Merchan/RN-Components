import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../Hooks/useForms';
import {CustomSwitch} from '../Components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  const {theme} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text input" />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              borderColor: theme.colors.text,
              color: theme.colors.text,
            }}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
            placeholderTextColor={theme.dividerColor}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              borderColor: theme.colors.text,
              color: theme.colors.text,
            }}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            placeholderTextColor={theme.dividerColor}
          />

          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>Suscribirse</Text>
            <CustomSwitch
              isOn={form.isSubscribe}
              onChange={value => onChange(value, 'isSubscribe')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              borderColor: theme.colors.text,
              color: theme.colors.text,
            }}
            placeholder="Ingrese su telefono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
            placeholderTextColor={theme.dividerColor}
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
