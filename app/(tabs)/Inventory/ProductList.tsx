import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";

const initialProducts = [
  {
    id: "1",
    name: "Coca Cola",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Ice Tea",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "3",
    name: "Water",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "4",
    name: "Fruit Juice",
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
