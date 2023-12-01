import {createStackNavigator} from '@react-navigation/stack';
import NoteList from '../screen/NoteList';
import SingleNote from '../screen/SingleNote';

const Stack = createStackNavigator();

const NotesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={NoteList} />
      <Stack.Screen
        name="SingleNote"
        component={SingleNote}
        options={{title: 'Add/Update Note'}}
      />
    </Stack.Navigator>
  );
};

export default NotesStackNavigation;
