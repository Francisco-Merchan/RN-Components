import {createContext, useEffect, useReducer} from 'react';
import {ThemeReducer, ThemeState, darkTheme, lightTheme} from './ThemeReducer';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLigthTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    ThemeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    colorScheme === 'light' ? setLigthTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLigthTheme = () => {
    dispatch({type: 'set_light_theme'});
  };
  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLigthTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
