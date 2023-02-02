import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperations";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function ValidateEmail(email) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  const buttonTrigger = () => {
    if (email.value === undefined || password.value === undefined) {
      alert("Please, fill email and password inputs!");
      return;
    }
    if (!ValidateEmail(email.value)) {
      alert("Your email is incorrect. Please, enter valid email!");
      return;
    }
    if (password.value?.length < 8) {
      alert("Password should not be shorter then 8 characters!");
      return;
    }

    Keyboard.dismiss();

    const userObject = {
      email: email.value,
      password: password.value,
    };

    dispatch(authSignInUser(userObject));

    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail((prev) => ({ ...prev, value }))}
            />
          </View>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) =>
              setPassword((prev) => ({ ...prev, value }))
            }
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => buttonTrigger()}
        >
          <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.navBlock}>
          <Text>Don't have an account?</Text>
          <Text
            style={styles.navLink}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Register
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
  inputBlock: {
    marginTop: 15,
  },
  form: {
    marginHorizontal: 20,
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    height: 40,
    marginHorizontal: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#09DF",
  },
  buttonTitle: {
    fontSize: 16,
    color: "#000",
  },
  navBlock: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navLink: {
    color: "#1778F2",
  },
});
