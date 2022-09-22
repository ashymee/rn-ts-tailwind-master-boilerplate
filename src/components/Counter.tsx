import { Text, TouchableOpacity, View } from 'react-native';

import useStore from '../utils/store';

const Counter = () => {
  const { count, setCount } = useStore();

  return (
    <View className='flex-row items-center my-5 border border-sky-300 bg-sky-300/10  rounded-lg'>
      <TouchableOpacity
        className='py-3 px-6 bg-sky-300 rounded-l-lg'
        onPress={() => setCount(count > 0 ? count - 1 : 0)}>
        <Text className='text-2xl text-white font-bold'>-</Text>
      </TouchableOpacity>

      <Text className='px-16 text-xl text-center'>{count}</Text>

      <TouchableOpacity
        className='py-3 px-6 bg-sky-300 rounded-r-lg'
        onPress={() => setCount(count + 1)}>
        <Text className='text-2xl text-white font-bold'>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
