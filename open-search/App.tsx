import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen'; //Not sure if this line will read as an error for everyone but if it does, you can ignore it.

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
