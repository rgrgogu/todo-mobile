import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

const AddTodo = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={handleChange}
      />
      <Button onPress={() => handleSubmit(text)} title="Add Todo" color="coral" />
    </View>
  );
};

export default AddTodo;
