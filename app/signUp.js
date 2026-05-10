import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/authContext";

export default function SignUp() {
  const router = useRouter();
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password) return Alert.alert("Error", "Fill all fields");
    try {
      await register(email, password);
      // root layout will redirect to /home automatically
    } catch (e) {
      Alert.alert("Register Failed", e?.message || "Something went wrong");
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold text-center mb-8">Sign Up</Text>

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

      <TouchableOpacity onPress={handleRegister} className="bg-green-500 p-4 rounded-lg">
        <Text className="text-white text-center font-bold">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} className="mt-6">
        <Text className="text-center text-gray-600">
          Already have account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}