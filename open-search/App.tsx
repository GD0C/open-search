import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button/button';

const buttons = [
  {
    text: 'Button 1',
    onPress: () => console.log('Button 1 pressed'),
  },
  {
    text: 'Button 2',
    onPress: () => console.log('Button 2 pressed'),
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} onPress={button.onPress} />
      ))}
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
