import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function ProductList({ products }) {
  return (
    <ScrollView style={styles.container}>
      {products.map((item: { id: React.Key | null | undefined; image: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
        <View key={item.id} style={styles.productContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
