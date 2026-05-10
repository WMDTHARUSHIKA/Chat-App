import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-6">
      <Text className="text-2xl font-bold mb-3">Welcome</Text>

      <Text className="mb-8 text-gray-600">{user?.email || "No email"}</Text>

      <TouchableOpacity onPress={logout} className="bg-red-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}