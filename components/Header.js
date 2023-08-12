import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity, // opaque, fade out
} from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

export default Header;
