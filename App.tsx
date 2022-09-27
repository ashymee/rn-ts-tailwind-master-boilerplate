import Counter from "@components/Counter";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Home from "@components/Home";
import { SafeAreaView } from "react-native";

const App = () => (
  <SafeAreaView className="flex-1 bg-white items-center justify-center">
    <Header />
    <Home />
    <Counter />
    <Footer />
  </SafeAreaView>
);

export default App;
