import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AddItems() {
  return (
    <ScrollView style={{ backgroundColor: "#ffff" }}>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="shopping-basket"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Search Items" />
      </View>
      <View style={styles.inputContainerr}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Add Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.productName}>aa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "50%",
    marginLeft: 30,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerr: {
    width: "30%",
    height: 35,
    position: "absolute",
    right: 40,
    top: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 35,
    paddingVertical: 8,
    color: "gray",
  },
  icon: {
    position: "absolute",
    left: 6,
    top: 12,
  },
  btn: {
    left: 40,
    marginTop: 10,
    width: "80%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#345832",
  },
  container: {
    width: "90%",
    height: 70,
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  containerr: {
    width: "90%",
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
