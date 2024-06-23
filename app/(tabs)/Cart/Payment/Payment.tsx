import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function PaymentScreen({ route, navigation }: { route: any; navigation: any }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { totalAmount } = route.params;

  const handlePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      navigation.navigate("Cart/Cart", { clear: true });
    }, 1000);
  };

  const formatCardNumber = (number: string) => {
    const prevCardNumberLength = cardNumber.length;
    const newCardNumberLength = number.length;
    if (prevCardNumberLength < newCardNumberLength && (number + " ").toString().length % 5 === 0) {
      number = number + " ";
    }

    return number;
  };

  const handleCardNumberChange = (text: any) => {
    // Accept only 16 numbers and 4 spaces
    if (/^\d{0,4} ?\d{0,4} ?\d{0,4} ?\d{0,4}$/.test(text)) {
      setCardNumber(formatCardNumber(text));
    }
  };

  const handleExpiryDateChange = (text: string) => {
    if (/^\d{0,2}\/?\d{0,2}$/.test(text)) {
      if (text.length === 2 && !text.includes("/")) {
        setExpiryDate(text + "/");
      } else {
        setExpiryDate(text);
      }
    }
  };

  const handleCvcChange = (text: string) => {
    if (/^\d{0,3}$/.test(text)) {
      setCvc(text);
    }
  };

  return (
    <View style={styles.container}>
      {!paymentSuccess ? (
        <>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.price}>
            Total Price: ${totalAmount.toFixed(2)}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name on Card"
            value={cardName}
            onChangeText={setCardName}
          />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            maxLength={19}
          />
          <View style={styles.inputsRow}>
            <TextInput
              style={styles.inputTall}
              placeholder="Expiry Date (MM/YY)"
              keyboardType="numeric"
              value={expiryDate}
              onChangeText={handleExpiryDateChange}
              maxLength={5}
            />
            <TextInput
              style={styles.inputSmall}
              placeholder="CVC"
              keyboardType="numeric"
              value={cvc}
              onChangeText={handleCvcChange}
              maxLength={3}
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePayment}
              style={styles.paymentButton}
            >
              <Text style={styles.buttonText}>Make Payment</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.successContainer}>
          <FontAwesome5 name="check-circle" size={80} color="#28a745" />
          <Text style={styles.successText}>Payment Successful!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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

export default PaymentScreen;
