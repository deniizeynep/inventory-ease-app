import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import ProductList from "./ProductList";
import styles from "./styles";

export default function Inventory() {
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [showLowStock, setShowLowStock] = useState(true);
  const [showInStock, setShowInStock] = useState(true);

  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View>
        <TouchableOpacity
          style={styles.inventoryContainer}
          onPress={() => setShowOutOfStock(!showOutOfStock)}
        >
          <Text style={styles.title}>
            <FontAwesome5 name="exclamation" size={24} color="red" /> Out Of
            Stock{"   "}
            <Text>
              {" "}
              {showOutOfStock ? (
                <FontAwesome5 name="angle-up" size={24} color="#fff" />
              ) : (
                <FontAwesome5 name="angle-down" size={24} color="#fff" />
              )}
            </Text>
          </Text>
        </TouchableOpacity>
        {showOutOfStock && <ProductList />}
      </View>

      <View>
        <TouchableOpacity
          style={styles.inventoryContainer}
          onPress={() => setShowLowStock(!showLowStock)}
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
        {showLowStock && <ProductList />}
      </View>

      <View>
        <TouchableOpacity
          style={styles.inventoryContainer}
          onPress={() => setShowInStock(!showInStock)}
        >
          <Text style={styles.title}>
            <Entypo name="check" size={24} color="#ccc" /> In Stock {"   "}
            <Text>
              {showInStock ? (
                <FontAwesome5 name="angle-up" size={24} color="#fff" />
              ) : (
                <FontAwesome5 name="angle-down" size={24} color="#fff" />
              )}
            </Text>
          </Text>
        </TouchableOpacity>
        {showInStock && <ProductList />}
      </View>
    </ScrollView>
  );
}
