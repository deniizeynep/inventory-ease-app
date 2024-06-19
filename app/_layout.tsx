import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import Cart from "./(tabs)/Cart/Cart";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AddItems from "./(tabs)/AddItems/AddItems";
import Inventory from "./(tabs)/Inventory/Inventory";
import StockCalendar from "./(tabs)/StockCalendar/StockCalendar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PaymentScreen from "./(tabs)/Cart/Payment/Payment";
import { createStackNavigator } from "@react-navigation/stack";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#041E42",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#0066b2",
            tabBarInactiveTintColor: "#ffff",
            tabBarActiveBackgroundColor: "#041E42",
            tabBarInactiveBackgroundColor: "#041E42",
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: "#041E42",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
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
            component={AddItems}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="shopping-basket" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="payment" size={size} color={color} />
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
    </ThemeProvider>
  );
}
