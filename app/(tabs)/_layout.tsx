import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddItems from './AddItems';
import Cart from './Cart';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inventory from './Inventory';
import StockCalendar from './StockCalendar';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#345832',
          inactiveTintColor: '#363636',
          showLabel: false,
        }}
        screenOptions={{
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
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Items"
          component={AddItems}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-basket" size={size} color={color} />
            ),
          }}
        />
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