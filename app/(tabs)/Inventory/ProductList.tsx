import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";

const initialProducts = [
  {
    id: "1",
    name: "Product 1",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Product 2",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "3",
    name: "Product 3",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "4",
    name: "Product 3",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
];

export default function ProductList() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ScrollView style={styles.container}>
      {products.map((item) => (
        <View key={item.id} style={styles.productContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productQuantity}>Quantity:{item.quantity}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
