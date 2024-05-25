import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Cart() {
  return (
    <ScrollView style={{backgroundColor: '#ffff'}}>
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

      <View style={styles.trans}>
        <Text style={styles.who}>aa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 70,
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  containerr: {
    width: '90%',
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trans: {
    width: '90%',
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  who: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
