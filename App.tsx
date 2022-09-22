import { SafeAreaView } from 'react-native';

import Counter from './src/components/Counter';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Home from './src/components/Home';

const App = () => (
  <SafeAreaView className='flex-1 bg-white items-center justify-center'>
    <Header />
    <Home />
    <Counter />
    <Footer />
  </SafeAreaView>
);

export default App;
