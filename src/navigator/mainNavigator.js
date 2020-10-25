import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList160846Navigator from '../features/NotificationList160846/navigator';
import Settings160845Navigator from '../features/Settings160845/navigator';
import Settings160837Navigator from '../features/Settings160837/navigator';
import UserProfile160835Navigator from '../features/UserProfile160835/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList160846: { screen: NotificationList160846Navigator },
Settings160845: { screen: Settings160845Navigator },
Settings160837: { screen: Settings160837Navigator },
UserProfile160835: { screen: UserProfile160835Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
