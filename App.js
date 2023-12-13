import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatListComponent, FlatList, Pressable } from 'react-native';

export default function App() {
  const [text, setText] = useState(' ')
  const [goals, setGoals] = useState(['react native'])
  function inputHandler(text){
        setText(text)
  }
  function goalHandler(){
      setGoals([...goals, text])
  }

  function deleteGoal(index) {
    const newGoals = goals.filter((el, i) => i!=index)
    setGoals(newGoals)
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.titleText}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={inputHandler}
          style={styles.textInput} 
          placeholder = 'Type your Goal...'
          
        />
        <Button 
          onPress={goalHandler}
          color='purple'
          title='Add Goals' 
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals}
          renderItem={
            (itemData) => {
              return (
                  <View style={styles.goalListItem}>
                      <Pressable
                        android_ripple={{color: 'red'}}
                       onPress={() => deleteGoal(itemData.index)}
                      >
                          <Text style={styles.goalItem} >{itemData.item}</Text>
                      </Pressable>
                  </View>
              )
            }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      padding: 50,
      flex:1
    },
    titleText: {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'lightblue',
      width: '70%',
      marginRight: 8,
      padding: 5,
      borderRadius: 5
    },
    goalsContainer: {
      marginTop: 50,
      flex:4,
      flexDirection: 'column',
    },
    goalListItem: {
      width: '100%',
      marginVertical: 10,
      backgroundColor: 'lightblue',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5
    },
    goalItem: {
      margin: 5,
    }
});
