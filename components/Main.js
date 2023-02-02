import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

import { useRoute } from "../router/useRoute";
import { authStateChangeUser } from "../redux/auth/authOperations";

export default function Main() {
  const { stateChange } = useSelector((state) => state.auth);
  const routing = useRoute(stateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
