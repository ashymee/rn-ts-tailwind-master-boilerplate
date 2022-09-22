import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text className='text-2xl font-bold text-center'>Well done!</Text>
      <Text className='text-center'>
        Your stunning{' '}
        <Text className='font-bold text-rose-500'>React Native App</Text>
      </Text>
      <Text className='text-center'>
        using <Text className='font-bold text-sky-500'>TailwindCSS</Text>
        <Text> & </Text>
        <Text className='font-bold text-sky-500'>Typescript</Text>
      </Text>
      <Text className='text-center'>starts here!</Text>
      <Text className='text-center text-3xl'>🚀</Text>
    </View>
  );
};

export default Home;
