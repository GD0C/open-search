import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/button/button';
import Accordion from '../components/accordionv1/accordion';

const accordionItems = [
  {
    title: 'Computer Science Resources',
    links: [
      { title: 'Algorithms & Data Structures', url: 'https://example.com/algorithms' },
      { title: 'Programming Languages', url: 'https://example.com/programming' },
      { title: 'Software Engineering', url: 'https://example.com/software-eng' },
    ],
  },
  {
    title: 'Mathematics',
    links: [
      { title: 'Calculus', url: 'https://example.com/calculus' },
      { title: 'Linear Algebra', url: 'https://example.com/linear-algebra' },
      { title: 'Statistics', url: 'https://example.com/statistics' },
    ],
  },
  {
    title: 'Science',
    links: [
      { title: 'Physics', url: 'https://example.com/physics' },
      { title: 'Chemistry', url: 'https://example.com/chemistry' },
      { title: 'Biology', url: 'https://example.com/biology' },
    ],
  },
];

const buttons = [
  { text: 'Computer Science', onPress: () => console.log('Button 1 pressed') },
  { text: 'Mathematics', onPress: () => console.log('Button 2 pressed') },
  { text: 'Science', onPress: () => console.log('Button 3 pressed') },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} onPress={button.onPress} />
      ))}

      <Accordion items={accordionItems} />
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