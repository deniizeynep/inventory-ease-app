import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";


 const initialCartItems = [
    {
      id: 1,
      name: "Ürün 1",
      price: 20,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Ürün 2",
      price: 30,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Ürün 2",
      price: 10,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Ürün 2",
      price: 25,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Ürün 2",
      price: 32,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ];


export default function Cart() {
 
  const [cartItems, setCartItems] = useState(initialCartItems);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Sepetiniz boş.</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.quantityContainer}></View>
                <Text style={styles.itemPrice}>
                  {item.price * item.quantity} $
                </Text>
              </View>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <FontAwesome5 name="plus" size={14} color="white" />
              </TouchableOpacity>
              <TextInput
                style={styles.quantityInput}
                value={item.quantity.toString()}
                onChangeText={(text) => updateQuantity(item.id, parseInt(text))}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                <FontAwesome5 name="minus" size={14} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => removeItem(item.id)}
                style={styles.deleteButton}
              >
                <FontAwesome5 name="trash-alt" size={14} color="white" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {getTotalPrice()} $</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Price</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

