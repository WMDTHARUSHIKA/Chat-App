import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/authContext";

export default function SignIn() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) return Alert.alert("Error", "Fill all fields");
    try {
      await login(email, password);
      // root layout will redirect to /home automatically
    } catch (e) {
      Alert.alert("Login Failed", e?.message || "Something went wrong");
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold text-center mb-8">Sign In</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        className="border p-4 rounded-lg mb-4"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="border p-4 rounded-lg mb-6"
      />

      <TouchableOpacity onPress={handleLogin} className="bg-blue-500 p-4 rounded-lg">
        <Text className="text-white text-center font-bold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signUp")} className="mt-6">
        <Text className="text-center text-gray-600">
          Don&apos;t have account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}