import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


interface ButtonProps {
  text: string;
  onPress: () => void;
}

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

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 16,
  },
});

export default Button;
