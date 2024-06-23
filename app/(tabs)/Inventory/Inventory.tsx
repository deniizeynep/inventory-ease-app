import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import ProductList from "./ProductList";
import styles from "./styles";

const OutOfStock = [
  {
    id: "1",
    name: "Coca Cola",
    quantity: 100,
    image: require("@/assets/images/products/coca-cola.jpg"),
  },
  {
    id: "2",
    name: "Fruit Juice",
    quantity: 80,
    image: require("@/assets/images/products/fruit-juice.jpg"),
  },
  {
    id: "3",
    name: "Mineral Water",
    quantity: 50,
    image: require("@/assets/images/products/mineral-water.jpg"),
  },
];

const LowStock = [
  {
    id: "1",
    name: "Tea",
    quantity: 200,
    image: require("@/assets/images/products/tea.jpg"),
  },
  {
    id: "2",
    name: "Ice Coffee",
    quantity: 180,
    image: require("@/assets/images/products/ice-coffee.jpg"),
  },
  {
    id: "3",
    name: "Sprite",
    quantity: 205,
    image: require("@/assets/images/products/sprite.jpg"),
  },
];

const InStock = [
  {
    id: "1",
    name: "Energy Drink",
    quantity: 500,
    image: require("@/assets/images/products/energy-drink.jpg"),
  },
  {
    id: "2",
    name: "Coffee",
    quantity: 480,
    image: require("@/assets/images/products/coffee.png"),
  },
  {
    id: "3",
    name: "Lemonade",
    quantity: 550,
    image: require("@/assets/images/products/lemonade.jpg"),
  },
  {
    id: "4",
    name: "Pepsi",
    quantity: 600,
    image: require("@/assets/images/products/pepsi.jpg"),
  },
  {
    id: "5",
    name: "Milk",
    quantity: 400,
    image: require("@/assets/images/products/milk.jpg"),
  },
  {
    id: "6",
    name: "Ice Tea",
    quantity: 650,
    image: require("@/assets/images/products/ice-tea.jpg"),
  },
];

export default function Inventory() {
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [showLowStock, setShowLowStock] = useState(true);
  const [showInStock, setShowInStock] = useState(true);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View>
        <TouchableOpacity
          style={styles.inventoryContainer}
          onPress={() => setShowOutOfStock((prev) => !prev)}
        >
          <Text style={styles.title}>
            <FontAwesome5 name="exclamation" size={24} color="red" /> Out Of
            Stock{"   "}
            <Text>
              {showOutOfStock ? (
                <FontAwesome5 name="angle-up" size={24} color="#fff" />
              ) : (
                <FontAwesome5 name="angle-down" size={24} color="#fff" />
              )}
            </Text>
          </Text>
        </TouchableOpacity>
        {showOutOfStock && <ProductList products={OutOfStock} />}
      </View>

      <View>
        <TouchableOpacity
          style={styles.inventoryContainer}
          onPress={() => setShowLowStock((prev) => !prev)}
        >
          <Text style={styles.title}>
            <FontAwesome6
              name="triangle-exclamation"
              size={24}
              color="yellow"
            />{" "}
            Low Stock{"   "}
            <Text>
              {showLowStock ? (
                <FontAwesome5 name="angle-up" size={24} color="#fff" />
              ) : (
                <FontAwesome5 name="angle-down" size={24} color="#fff" />
              )}
            </Text>
          </Text>
        </TouchableOpacity>
        {showLowStock && <ProductList products={LowStock} />}
      </View>

      <View>
        <TouchableOpacity
          style={styles.inventoryContainer}
          onPress={() => setShowInStock((prev) => !prev)}
        >
          <Text style={styles.title}>
            <Entypo name="check" size={24} color="#ccc" /> In Stock{"   "}
            <Text>
              {showInStock ? (
                <FontAwesome5 name="angle-up" size={24} color="#fff" />
              ) : (
                <FontAwesome5 name="angle-down" size={24} color="#fff" />
              )}
            </Text>
          </Text>
        </TouchableOpacity>
        {showInStock && <ProductList products={InStock} />}
      </View>
    </ScrollView>
  );
}
