import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Create an App", key: "2" },
    { text: "Play on the Switch", key: "3" },
  ]);

  const handleDelete = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key !== key);
    });
  };

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTodos((prev) => {
        return [{ text: text, key: Math.random().toString() }, ...prev];
      });
    } else {
      /*
      First parameter: title,
      Second: msg
      Third: Button
      */
      Alert.alert("OOPS!", "Todo's must be over 3 characters long", [
        {
          text: "Understood",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  return (
    //<SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        {/* HEADER */}
        <Header />
        <View style={styles.content}>
          {/*Todo Form*/}
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handleDelete={handleDelete} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

// StyleSheet.create(creating the css rules)
// Object Oriented approach
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
