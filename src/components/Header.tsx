import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View className='bg-slate-900 p-2 rounded-2xl absolute top-10 left-5 right-5'>
      <Text className='text-orange-300 text-center'>
        React Native + TailwindCSS Master Boilerplate
      </Text>
    </View>
  );
};

export default Header;
