import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#ffff",
      },
      successContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
      header: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
      },
      price: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
      },
    
      input: {
        height: 50,
        borderColor: "#004687",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#fff",
      },
      inputTall: {
        height: 50,
        borderColor: "#004687",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        width: "55%",
      },
      inputSmall: {
        height: 50,
        borderColor: "#004687",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        width: "40%",
      },
      inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      paymentButton: {
        marginTop: 10,
        width: "48%",
        padding: 15,
        backgroundColor: "#004687",
        borderRadius: 5,
        alignItems: "center",
      },
      backButton: {
        marginTop: 10,
        width: "48%",
        padding: 15,
        backgroundColor: "black",
        borderRadius: 5,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
      },
      btn: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      successOverlay: {
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignItems: "center",
      },
      successText: {
        color: "#28a745",
        fontSize: 24,
        marginTop: 20,
      },
});
