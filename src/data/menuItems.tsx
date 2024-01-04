import {MenuItem} from '../interfaces/AppInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01Screen',
  },

  {
    name: 'Animation 02',
    icon: 'albums-outline',
    component: 'Animation02Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section list',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal screen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slide screen',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Change theme',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
