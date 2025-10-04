import TaskItem from '@/components/myComponents/Task';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from '../models/task';


const myTask: Task = {
    id: 1,
    name: "Buy groceries",
    isdone: false,
};

export default function TodoScreen() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = () => {
        if (task.trim().length > 0) {
            const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
            const newTask: Task = {
                id: lastId + 1,
                name: task,
                isdone: false,
            };
            setTasks([...tasks, newTask]);
            setTask('');
        }
    };

    //for state management we pass the function down to the component which modifies the state
    const toggleTask = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isdone: !task.isdone } : task
            )
        );
    };


    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>ToDo APP</Text>
                <Text style={styles.subtitle}>Planify your day</Text>
            </View>
            <View style={styles.bar}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a task"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
                    <Entypo name="plus" size={24} color="blacks" />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <TaskItem task={item} onToggle={() => toggleTask(item.id)} />}
                />
            </View>
        </View>

    )
}

const { width } = Dimensions.get("window"); // get screen width


const styles = StyleSheet.create({
    bar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    title: {
        fontSize: 24,       // large text
        fontWeight: "bold", // bold
        color: "#000",      // black text
        marginBottom: 8,    // space below
    },
    subtitle: {
        fontSize: 16,       // smaller text
        fontWeight: "normal",
        color: "#555",      // grayish color for contrast
    },
    button: {
        height: 50,
        width: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 8,
         // for android
        elevation: 5,
        // for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: 16,
        marginLeft: 8,              // space between icon and text
    },
    tasks: {
        fontSize: 18,
        padding: 5
    },
    input: {
        height: 50,
        width: 350,
        padding: 10,
        backgroundColor: '#f0f0f0',  // light gray background
        borderRadius: 12,             // rounded corners
        paddingHorizontal: 15,        // inner padding
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',          // subtle shadow (iOS)
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,            // shadow for Android
    },
    header: {
        height: 100,
        width: width,
        backgroundColor: "pink",
        borderBottomLeftRadius: 20,   // only bottom left rounded
        borderBottomRightRadius: 20,  // only bottom right rounded
        overflow: "hidden",           // ensures child views don’t bleed outside the radius
        padding: 20,
    },
});