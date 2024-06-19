import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductList from "./ProductList";
import styles from "./styles";

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
