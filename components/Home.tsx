import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-800">Welcome Home</Text>
          <Text className="text-gray-600 mt-2">
            Explore our awesome features
          </Text>
        </View>

        {/* Main Content */}
        <View className="space-y-4">
          {/* Card 1 */}
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-gray-800">
              Feature 1
            </Text>
            <Text className="text-gray-600 mt-2">Description of feature 1</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-gray-800">
              Feature 2
            </Text>
            <Text className="text-gray-600 mt-2">Description of feature 2</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-gray-800">
              Feature 3
            </Text>
            <Text className="text-gray-600 mt-2">Description of feature 3</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="mt-8">
          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
            <Text className="text-white text-center font-semibold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
