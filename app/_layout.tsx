import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Cart from './(tabs)/Cart/Cart';
import Inventory from './(tabs)/Inventory/Inventory';
import AddItems from './(tabs)/AddItems/AddItems';
import StockCalendar from './(tabs)/StockCalendar/StockCalendar';
import PaymentScreen from './(tabs)/Cart/Payment/Payment';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CartStack({ cartItems, updateCartItems }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#041E42',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Cart">
        {(props) => <Cart {...props} cartItems={cartItems} updateCartItems={updateCartItems} />}
      </Stack.Screen>
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item: { id: any; quantity: any; }) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        return updatedCartItems;
      }
      return [...prevCartItems, item];
    });
  };

  const updateCartItems = (updatedItems: React.SetStateAction<never[]>) => {
    setCartItems(updatedItems);
  };

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    onLayoutRootView();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#0066b2',
          tabBarInactiveTintColor: '#ffff',
          tabBarActiveBackgroundColor: '#041E42',
          tabBarInactiveBackgroundColor: '#041E42',
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: '#041E42',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
          tabBarBadge: route.name === 'Cart' && cartItems.length > 0 ? cartItems.length : undefined,
        })}
      >
        <Tab.Screen
          name="Inventory"
          component={Inventory}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="inventory" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Items"
          component={(props: any) => <AddItems {...props} addItemToCart={addItemToCart} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={(props: React.JSX.IntrinsicAttributes & { cartItems: any; updateCartItems: any; }) => <CartStack {...props} cartItems={cartItems} updateCartItems={updateCartItems} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-basket" size={size} color={color} />
              
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Stock Calendar"
          component={StockCalendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
