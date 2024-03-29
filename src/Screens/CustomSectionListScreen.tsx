import React, {useContext} from 'react';
import {HeaderTitle} from '../Components/HeaderTitle';
import {SectionList, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../Components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const CustomSectionListScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 100}}>
            <HeaderTitle title={`Total de casas ${casas.length}`} />
          </View>
        )}
        renderItem={({item}) => (
          <Text style={{color: theme.colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: theme.colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total de casas ${section.data.length}`} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
