import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  productContainer: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productQuantity: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  inventoryContainer: {
    width: "95%",
    height: 60,
    marginTop: 40,
    marginLeft: 10,
    backgroundColor: "#13274F",
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
