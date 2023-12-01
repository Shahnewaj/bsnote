import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {deleteNote} from '../store/features/NotesSlice';

const NoteList = () => {
  const navigation = useNavigation();
  const notes = useSelector(state => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = id => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => dispatch(deleteNote(id)),
      },
    ]);
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={notes}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={
          <View>
            <Text style={styles.nothingText}>No Notes Found</Text>
          </View>
        }
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SingleNote', {item});
              }}
              style={styles.itemMain}>
              <Text style={styles.itemTitle}>{item?.title}</Text>
              <Text style={styles.itemContent}>{item?.content}</Text>
            </TouchableOpacity>
            <View style={styles.deleteBtnView}>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => handleDelete(item?.id)}>
                <Text style={styles.deleteBtnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.bottonButtonView}>
        <TouchableOpacity
          style={styles.bottonButton}
          onPress={() => {
            navigation.navigate('SingleNote');
          }}>
          <Text style={styles.buttonText}>Add New Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  bottonButtonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: '100%',
  },
  bottonButton: {
    backgroundColor: '#10837d',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemMain: {
    marginBottom: 10,
    flex: 1,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContent: {
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nothingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteBtnView: {},
  deleteBtn: {
    paddingHorizontal: 10,
    borderRadius: 4,
    paddingVertical: 5,
    backgroundColor: 'red',
  },
  deleteBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
});
