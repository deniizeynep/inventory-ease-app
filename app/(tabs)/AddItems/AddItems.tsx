import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductList from "./ProductList";

export default function AddItems() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <View style={{ backgroundColor: "#ffff" }}>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="shopping-basket"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Items"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <ProductList searchQuery={searchQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
    marginLeft: 30,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical: 8,
    color: "gray",
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 27,
  },
});
