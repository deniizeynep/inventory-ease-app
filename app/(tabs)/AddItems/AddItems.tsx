import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'; 

const products = [
  {
    id: '1',
    name: 'Coca Cola',
    price: 10,
    image: require('../images/coca-cola.jpg'),
  },
  {
    id: '2',
    name: 'Ice Tea',
    price: 20,
    image: require('../images/ice-tea.jpg'),
  },
  {
    id: '3',
    name: 'Water',
    price: 30,
    image: require('../images/water.jpg'),
  },
  {
    id: '4',
    name: 'Tea',
    price: 30,
    image: require('../images/tea.jpg'),
  },
  {
    id: '5',
    name: 'Fruit Juice',
    price: 30,
    image: require('../images/fruit-juice.jpg'),
  },
  {
    id: '6',
    name: 'Capri Sun',
    price: 30,
    image: require('../images/capri-sun.jpg'),
  },
  { id: '7', name: 'Fanta', price: 30, image: require('../images/fanta.jpg') },
  {
    id: '8',
    name: 'Sprite',
    price: 30,
    image: require('../images/sprite.jpg'),
  },
  {
    id: '9',
    name: 'Mineral Water',
    price: 30,
    image: require('../images/mineral-water.jpg'),
  },
  {
    id: '10',
    name: 'Lemonade',
    price: 30,
    image: require('../images/lemonade.jpg'),
  },
  {
    id: '11',
    name: 'Pepsi',
    price: 30,
    image: require('../images/pepsi.jpg'),
  },
  {
    id: '12',
    name: 'Ice Coffee',
    price: 30,
    image: require('../images/ice-coffee.jpg'),
  },
  {
    id: '13',
    name: 'Coffee',
    price: 30,
    image: require('../images/coffee.png'),
  },
  {
    id: '14',
    name: 'Milk',
    price: 30,
    image: require('../images/milk.jpg'),
  },
  {
    id: '15',
    name: 'Energy Drink',
    price: 30,
    image: require('../images/energy-drink.jpg'),
  },
];

export default function AddItems({ addItemToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState({});

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

  const handleAddToCart = (item: { id: any; name?: string; price?: number; image?: any; }) => {
    const quantity = quantities[item.id] || 1;
    const newCartItem = { ...item, quantity };
    addItemToCart(newCartItem);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [item.id]: 1 })); // Reset quantity to 1 after adding to cart
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ backgroundColor: '#fff' }}>
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
                  onPress={() => handleDecrease(item.id)}>
                  <Text style={styles.actionButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>
                  {quantities[item.id] || 1}
                </Text>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleIncrease(item.id)}>
                  <Text style={styles.actionButtonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => handleAddToCart(item)}>
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
