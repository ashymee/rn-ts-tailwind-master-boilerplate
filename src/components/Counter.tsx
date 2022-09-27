import { Ionicons } from "@expo/vector-icons";
import useStore from "@utils/store";
import { Text, TouchableOpacity, View } from "react-native";

const Counter = () => {
  const { count, setCount } = useStore();

  return (
    <View className="flex-col items-center my-5 border border-white bg-sky-300/30  rounded-lg">
      <View className="py-4 px-6">
        <Text className="text-2xl">{count}</Text>
      </View>

      <View className="flex-row">
        {!count ? (
          <View className="py-3 px-6 bg-sky-200/30 rounded-br-lg">
            <Ionicons name="remove" color="whitesmoke" size={30} />
          </View>
        ) : (
          <TouchableOpacity
            className="py-3 px-6 bg-sky-200 rounded-bl-lg"
            onPress={() => setCount(count > 0 ? count - 1 : 0)}
          >
            <Ionicons name="remove" color="blue" size={30} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          className="py-3 px-6 bg-sky-200"
          onPress={() => setCount(count + 1)}
        >
          <Ionicons name="add" color="blue" size={30} />
        </TouchableOpacity>

        {!count ? (
          <View className="py-3 px-6 bg-rose-200/30 rounded-br-lg">
            <Ionicons name="trash" color="whitesmoke" size={30} />
          </View>
        ) : (
          <TouchableOpacity
            className="py-3 px-6 bg-rose-200 rounded-br-lg"
            onPress={() => setCount(0)}
          >
            <Ionicons name="trash" color="red" size={30} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Counter;
