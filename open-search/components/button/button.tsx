import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


interface ButtonProps {
  text: string;
  onPress: () => void;
}



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
    padding: 10,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Button;
