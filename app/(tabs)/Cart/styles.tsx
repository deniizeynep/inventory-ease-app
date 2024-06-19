import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    justifyContent: "flex-end",
  },
  quantityButton: {
    backgroundColor: "#002D62",
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    minWidth: 40,
    textAlign: "center",
    marginLeft: 5,
  },
  itemPrice: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#960018",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#002D62",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
