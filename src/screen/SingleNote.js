import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addOrUpdateNote} from '../store/features/NotesSlice';

const SingleNote = ({route}) => {
  const [id, setId] = React.useState(route?.params?.item?.id || '');
  const [title, setTitle] = React.useState(route?.params?.item?.title || '');
  const [content, setContent] = React.useState(
    route?.params?.item?.content || '',
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSavePress = () => {
    if (title === '' || content === '') {
      alert('Please fill all the fields');
      return;
    }
    dispatch(
      addOrUpdateNote({
        id,
        title,
        content,
      }),
    );
    navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputItem}>
        <Text style={styles.inputItemLabel}>Title</Text>
        <TextInput
          style={styles.inputItemInput}
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Enter Title"
        />
      </View>
      <View style={styles.inputItem}>
        <Text style={styles.inputItemLabel}>Content</Text>
        <TextInput
          style={styles.inputItemInput}
          value={content}
          multiline={true}
          onChangeText={text => setContent(text)}
          placeholder="Enter Content"
        />
      </View>

      <View style={styles.saveView}>
        <TouchableOpacity onPress={handleSavePress} style={styles.saveButton}>
          <Text style={styles.saveBUttontext}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleNote;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  inputItem: {
    padding: 10,
  },
  inputItemLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputItemInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
  },
  saveView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#10837d',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  saveBUttontext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
