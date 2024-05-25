import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductList from "./ProductList";

export default function AddItems() {
  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="shopping-basket"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Search Items" />
      </View>

      <ProductList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
    marginLeft: 30,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 35,
    paddingVertical: 8,
    color: "gray",
  },
  icon: {
    position: "absolute",
    left: 6,
    top: 12,
  },
});
