import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    padding: 5,
    backgroundColor: '#382e49',
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  productQuantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  addToCartButton: {
    padding: 5,
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 15,
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 32,
    height: 32,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    marginLeft: 'auto',
    backgroundColor: '#13274F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  inputContainer: {
    width: '85%',
    marginLeft: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical: 8,
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: 27,
  },
});
