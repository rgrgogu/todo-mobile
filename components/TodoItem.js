import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

const TodoItem = ({ item, handleDelete }) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <MaterialIcons name="delete" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
