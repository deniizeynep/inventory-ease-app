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
  { id: "2", name: "Product 2", price: 20 },
  { id: "3", name: "Product 3", price: 30 },
  { id: "4", name: "Product 4", price: 30 },
  { id: "5", name: "Product 5", price: 30 },
  { id: "6", name: "Product 6", price: 30 },
  { id: "7", name: "Product 7", price: 30 },
  { id: "8", name: "Product 8", price: 30 },
  { id: "9", name: "Product 9", price: 30 },
  { id: "10", name: "Product 10", price: 30 },
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
                onPress={() => addToCart(item)}
              >
                <FontAwesome name="shopping-cart" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  productActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    width: 32,
    height: 32,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartButton: {
    marginLeft: "auto",
    backgroundColor: "#382e49",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});

export default ProductList;
