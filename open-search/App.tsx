import { StatusBar } from 'expo-status-bar';
import { StyleSheet, /*Text,*/ View } from 'react-native';
import Button from './components/button/button';

const buttons = [
  {
    text: 'Computer Science',
    onPress: () => console.log('Button 1 pressed'),
  },
  {
    text: 'Mathematics',
    onPress: () => console.log('Button 2 pressed'),
  },
  {
    text: 'Science',
    onPress: () => console.log('Button 3 pressed'),
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} onPress={button.onPress} />
      ))}
      {/*<Text>Hello World</Text>*/}
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
