import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const products = [
  {
    id: "1",
    name: "Coca Cola",
    price: 10,
    image: require("@/assets/images/products/coca-cola.jpg"),
  },
  {
    id: "2",
    name: "Ice Tea",
    price: 20,
    image: require("@/assets/images/products/ice-tea.jpg"),
  },
  {
    id: "3",
    name: "Water",
    price: 30,
    image: require("@/assets/images/products/water.jpg"),
  },
  {
    id: "4",
    name: "Tea",
    price: 30,
    image: require("@/assets/images/products/tea.jpg"),
  },
  {
    id: "5",
    name: "Fruit Juice",
    price: 30,
    image: require("@/assets/images/products/fruit-juice.jpg"),
  },
  {
    id: "6",
    name: "Capri Sun",
    price: 30,
    image: require("@/assets/images/products/capri-sun.jpg"),
  },
  {
    id: "7",
    name: "Fanta",
    price: 30,
    image: require("@/assets/images/products/fanta.jpg"),
  },
  {
    id: "8",
    name: "Sprite",
    price: 30,
    image: require("@/assets/images/products/sprite.jpg"),
  },
  {
    id: "9",
    name: "Mineral Water",
    price: 30,
    image: require("@/assets/images/products/mineral-water.jpg"),
  },
  {
    id: "10",
    name: "Lemonade",
    price: 30,
    image: require("@/assets/images/products/lemonade.jpg"),
  },
  {
    id: "11",
    name: "Pepsi",
    price: 30,
    image: require("@/assets/images/products/pepsi.jpg"),
  },
  {
    id: "12",
    name: "Ice Coffee",
    price: 30,
    image: require("@/assets/images/products/ice-coffee.jpg"),
  },
  {
    id: "13",
    name: "Coffee",
    price: 30,
    image: require("@/assets/images/products/coffee.png"),
  },
  {
    id: "14",
    name: "Milk",
    price: 30,
    image: require("@/assets/images/products/milk.jpg"),
  },
  {
    id: "15",
    name: "Energy Drink",
    price: 30,
    image: require("@/assets/images/products/energy-drink.jpg"),
  },
];

export default function AddItems({ addItemToCart }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState<{ [key: string]: any }>({});

  const handleSearch = (text: React.SetStateAction<string>) => {
    setSearchQuery(text);
  };

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

  const handleAddToCart = (item: {
    id: any;
    name?: string;
    price?: number;
    image?: any;
  }) => {
    const quantity = quantities[item.id] || 1;
    const newCartItem = { ...item, quantity };
    addItemToCart(newCartItem);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [item.id]: 1 })); // Reset quantity to 1 after adding to cart

    Alert.alert('Success', 'Item added to cart successfully!');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ backgroundColor: "#fff" }}>
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
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={item.image} />
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
                  onPress={() => handleAddToCart(item)}
                >
                  <FontAwesome name="shopping-cart" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
