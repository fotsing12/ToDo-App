import Entypo from "@expo/vector-icons/Entypo";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Task from "../../models/task";
import Circle from "./Circle";

// Props type
type TaskProps = {
    task: Task;
    onToggle: () => void; // function to call when the circle is pressed
};

export default function TaskItem({ task, onToggle }: TaskProps) {

    const onPress = () => {
        Alert.alert(
            "",
            undefined,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Later",
                    onPress: () => console.log("Later Pressed")
                },
                {
                    text: "Go there",
                    onPress: () => console.log("Go there Pressed")
                }
            ]
        );
    };

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.card}>
            {!task.isdone ? (
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
                        <Circle diameter={45} color="#427bf5ff">
                            <Circle diameter={32} color="white" />
                        </Circle>
                    </TouchableOpacity>
                    <Text style={styles.taskNotDone}>
                        {task.name}
                    </Text>
                </View>
            ) : (
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
                        <Circle diameter={45} color="#f33f2bff">
                            <Entypo name="check" size={20} color="white" />
                        </Circle>
                    </TouchableOpacity>
                    <Text style={styles.taskDone}>
                        {task.name}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        margin: 10,
        width: '97%',
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,

        // for android
        elevation: 5,

        // for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    taskNotDone: {
        margin: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    taskDone: {
        margin: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textDecorationLine: "line-through",
    }

})