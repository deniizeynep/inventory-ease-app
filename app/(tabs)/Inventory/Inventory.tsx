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

export default function Inventory() {
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [showLowStock, setShowLowStock] = useState(true);
  const [showInStock, setShowInStock] = useState(true);

  const renderArrowIcon = (show: boolean) => {
    return show ? (
      <FontAwesome5 name="angle-up" size={24} color="#fff" />
    ) : (
      <FontAwesome5 name="angle-down" size={24} color="#fff" />
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => setShowOutOfStock(!showOutOfStock)}
        >
          <Text style={styles.title}>
            <FontAwesome5 name="exclamation" size={24} color="red" /> Out Of
            Stock{"   "}
            <Text> {renderArrowIcon(showOutOfStock)}</Text>
          </Text>
        </TouchableOpacity>
        {showOutOfStock && <ProductList />}
      </View>

      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => setShowLowStock(!showLowStock)}
        >
           <Text style={styles.title}>
           <FontAwesome6
              name="triangle-exclamation"
              size={24}
              color="yellow"
            />{" "}
            Low Stock{"   "}
            <Text> {renderArrowIcon(showOutOfStock)}</Text>
          </Text>
        </TouchableOpacity>
        {showLowStock && <ProductList />}
      </View>

      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => setShowInStock(!showInStock)}
        >
           <Text style={styles.title}>
           <Entypo name="check" size={24} color="#ccc" /> In Stock  {"   "}
            <Text> {renderArrowIcon(showOutOfStock)}</Text>
          </Text>
        </TouchableOpacity>
        {showInStock && <ProductList />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 60,
    marginTop: 40,
    marginLeft: 10,
    backgroundColor: "#382e49",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
