import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";


export default function TodoScreen() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    const addTask = () => {
        if (task.trim().length > 0) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <view>
            <view>
                <TextInput
                    placeholder = "Add a task"
                    value = {task}
                    onChangeText = {setTask}
                />
                <view style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
                        <Entypo name="plus" size={24} color="white" />
                        <Text style={styles.text}>Add Task</Text>
                    </TouchableOpacity>
                </view>
            </view>
            <view>
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
                />
            </view>
        </view>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',       // icon + text side by side
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,              // space between icon and text
  },
  task: {
    fontSize: 18,
    padding: 5
},
});