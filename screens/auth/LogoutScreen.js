import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { authSignOutUser } from "../../redux/auth/authOperations";

export default function LogoutScreen() {
  const { userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {userName}!</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={signOut}
      >
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#09DF",
  },
  buttonTitle: {
    fontSize: 16,
    color: "#000",
  },
  greeting: {
    fontSize: 28,
  },
});
