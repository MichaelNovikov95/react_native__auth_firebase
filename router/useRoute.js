import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import LogoutScreen from "../screens/auth/LogoutScreen";

const Stack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="RegisterScreen"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </>
    );
  }
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LogoutScreen"
          component={LogoutScreen}
        />
      </Stack.Navigator>
    </>
  );
};
