import React, { useState, useEffect } from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles'; // Ensure correct import path

export default function Cart({ navigation, cartItems, updateCartItems }) {
  const [localCartItems, setLocalCartItems] = useState(cartItems);

  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  const handlePaymentPress = () => {
    navigation.navigate('Payment', { totalAmount: getTotalPrice() });
  };

  const getTotalPrice = () => {
    return localCartItems.reduce(
      (total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity,
      0
    );
  };

  const updateQuantity = (id: any, quantity: number) => {
    const updatedCartItems = localCartItems.map((item: { id: any; }) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setLocalCartItems(updatedCartItems);
    updateCartItems(updatedCartItems); // Update cart items in parent component
  };

  const removeItem = (id: any) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            const updatedCartItems = localCartItems.filter((item: { id: any; }) => item.id !== id);
            setLocalCartItems(updatedCartItems);
            updateCartItems(updatedCartItems); // Update cart items in parent component
          }
        }
      ],
      { cancelable: false }
    );
  };

  const clearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to clear the cart?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            setLocalCartItems([]);
            updateCartItems([]); // Update cart items in parent component
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {localCartItems.length === 0 ? (
        <Text style={styles.emptyText}>Sepetiniz boş.</Text>
      ) : (
        <FlatList
          data={localCartItems}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
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
        {localCartItems.length > 0 && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.clearCartButton}
              onPress={clearCart}
            >
              <Text style={styles.clearCartButtonText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handlePaymentPress}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
