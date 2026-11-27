import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#111214]">
      <StatusBar style="light" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="mt-2 text-3xl font-bold text-white">Voice Journal</Text>
            </View>

            <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-2xl border border-[#292a2d] bg-[#1c1d20]">
              <Ionicons name="settings-outline" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View className="mx-6 mb-8 flex-row items-center rounded-2xl border border-[#292a2d] bg-[#1c1d20] px-4">
          <Ionicons name="search-outline" size={20} color="#85858b" />
          <TextInput
                     placeholder="Search your recordings..."
                     placeholderTextColor="#85858b"
                     className="flex-1 px-3 py-4 text-white"/>
        </View>

        {/* Recordings heading */}
        <View className="mx-6 mb-5 flex-row items-center justify-between">
          <Text className="text-xl font-semibold text-white">My recordings</Text>

          <Text className="text-sm text-gray-400">0 recordings</Text>
        </View>

        {/* Empty state */}
        <View className="mx-6 items-center rounded-3xl border border-[#292a2d] bg-[#1a1b1e] px-6 py-12">
          <View className="mb-5 h-20 w-20 items-center justify-center rounded-full bg-[#27282b]">
            <Ionicons name="mic-outline" size={36} color="#a1a1aa" />
          </View>

          <Text className="text-lg font-semibold text-white">No recordings yet</Text>

          <Text className="mt-3 text-center leading-6 text-gray-400">
            Your voice notes will appear here. Start recording your
            first thought, idea or memory.
          </Text>
        </View>

        {/* Tip */}
        <View className="mx-6 mt-6 rounded-2xl bg-[#202124] p-5">
          <View className="flex-row items-center">
            <Ionicons name="bulb-outline" size={20} color="#d4d4d8" />
            <Text className="ml-2 font-semibold text-white">Quick tip</Text>
          </View>

          <Text className="mt-2 leading-6 text-gray-400">
            Record your thoughts on the go. Your recordings will be
            saved on your device.
          </Text>
        </View>
      </ScrollView>

      {/* Record button */}
      <View className="px-6 pb-8 pt-4">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center justify-center rounded-2xl bg-white py-5">
          <Ionicons name="mic" size={24} color="#111214" />

          <Text className="ml-3 text-lg font-bold text-[#111214]">Start recording</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
