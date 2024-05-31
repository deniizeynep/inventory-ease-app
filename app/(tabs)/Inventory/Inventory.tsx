import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import ProductList from "./ProductList";

export default function Inventory() {
  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>
            <FontAwesome5 name="exclamation" size={24} color="red" /> Out Of
            Stock{" "}
          </Text>
        </View>
          <ProductList />
      </View>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>
            <FontAwesome6
              name="triangle-exclamation"
              size={24}
              color="yellow"
            />{" "}
            Low Stock
          </Text>
        </View>
          <ProductList />
      </View>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>
            <Entypo name="check" size={24} color="#ccc" /> In Stock
          </Text>
        </View>
          <ProductList />
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
    backgroundColor: "#345832",
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
