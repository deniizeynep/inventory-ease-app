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

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

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
            tabBarActiveTintColor: "#345832",
            tabBarInactiveTintColor: "#363636",
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: "#345832",
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
    </ThemeProvider>
  );
}
