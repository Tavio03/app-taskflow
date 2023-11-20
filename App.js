import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = ('');


  return (
    <>
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList 
        style={styles.FlatList} 
        data={task}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
              <TouchableOpacity>
                <MaterialIcons name='delete-forever' size={25} color='#64c75' />
              </TouchableOpacity>
          </View>
        )}
        />
      </View>

      <StatusBar style="auto" />

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholderTextColor='#999'
        autoCorrect={true}
        placeholder='Adicione uma tarefa'
        maxLength={25}
        />
        <TouchableOpacity style={styles.button}>
        <MaterialIcons name='post-add' size={24} color='#FFF' />

        </TouchableOpacity>
      </View>

    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  body: {
    flex: 1
  },
  form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection:'row',
    paddingTop: 13,
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
  },
  FlatList: {
    Flex: 1,
    marginTop: 5,

  }
});
