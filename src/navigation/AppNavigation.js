import {NavigationContainer} from '@react-navigation/native';
import NotesStackNavigation from './NotesStackNavigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <NotesStackNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
