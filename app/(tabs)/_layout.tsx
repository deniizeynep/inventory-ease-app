import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddItems from './Products/AddItems';
import Cart from './Cart';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inventory from './Inventory';
import StockCalendar from './StockCalendar';

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#345832',
          tabBarInactiveTintColor: '#363636',
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: '#345832',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }: { color: string, size: number }) => (
              <MaterialIcons name="payment" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="Add Items"
          component={AddItems}
          options={{
            tabBarIcon: ({ color, size }: { color: string, size: number }) => (
              <FontAwesome name="shopping-basket" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{
            tabBarIcon: ({ color, size }: { color: string, size: number }) => (
              <MaterialIcons name="inventory" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="Stock Calendar"
          component={StockCalendar}
          options={{
            tabBarIcon: ({ color, size }: { color: string, size: number }) => (
              <FontAwesome name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
