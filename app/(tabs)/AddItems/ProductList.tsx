import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'; 

const initialProducts = [
  { id: '1', name: 'Product 1', price: '$10', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Product 2', price: '$20', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '5', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '6', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '7', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '8', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: '9', name: 'Product 3', price: '$30', quantity: 1, image: 'https://via.placeholder.com/100' },
];

export default function ProductList(){
  const [products, setProducts] = useState(initialProducts);

  const modifyQuantity = (id: string, delta: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
    ));
  };

 
  return (
    <ScrollView style={styles.container}>
      {products.map(item => (
        <View key={item.id} style={styles.productContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity onPress={() => modifyQuantity(item.id, -1)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.productQuantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => modifyQuantity(item.id, 1)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.addToCartButton}>
                <Icon name="cart-outline" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
