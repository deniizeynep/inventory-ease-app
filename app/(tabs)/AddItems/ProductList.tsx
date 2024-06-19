import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductListProps {
  searchQuery: string;
}

const products: Product[] = [
  { id: "1", name: "Coca Cola", price: 10 },
  { id: "2", name: "Ice Tea", price: 20 },
  { id: "3", name: "Water", price: 30 },
  { id: "4", name: "Tea", price: 30 },
  { id: "5", name: "Fruit Juice", price: 30 },
  { id: "6", name: "Capri Sun", price: 30 },
  { id: "7", name: "Fanta", price: 30 },
  { id: "8", name: "Sprite", price: 30 },
  { id: "9", name: "Mineral Water", price: 30 },
  { id: "10", name: "Lemonade", price: 30 },
  { id: "11", name: "Pepsi", price: 30 },
  { id: "12", name: "Ice Coffee", price: 30 },
  { id: "13", name: "Coffee", price: 30 },
  { id: "14", name: "Milk", price: 30 },
  { id: "15", name: "Energy Drink", price: 30 },
];

const ProductList: React.FC<ProductListProps> = ({ searchQuery }) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleIncrease = (id: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const addToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    console.log("Add to Cart:", { ...product, quantity });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FlatList
      data={filteredProducts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: "https://via.placeholder.com/100" }}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <View style={styles.productActions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleDecrease(item.id)}
              >
                <Text style={styles.actionButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>
                {quantities[item.id] || 1}
              </Text>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleIncrease(item.id)}
              >
                <Text style={styles.actionButtonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {
                  addToCart(item);
                }}
              >
                {/* {isLoading ? ( */}
                {/* <FontAwesome name="spinner" size={20} color="white" />
                ) : ( */}
                <FontAwesome name="shopping-cart" size={20} color="white" />
                {/* )} */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default ProductList;
