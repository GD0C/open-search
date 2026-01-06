import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { AccordionProps } from '../accordionv1/accordion.interface';

export const AccordionV2: React.FC<AccordionProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => toggleItem(index)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.arrow}>
              {expandedItems.includes(index) ? 'x' : '☰'}
            </Text>
          </TouchableOpacity>

          {expandedItems.includes(index) && (
            <View style={styles.contentContainer}>
              {item.links.map((link, linkIndex) => (
                <TouchableOpacity
                  key={linkIndex}
                  style={styles.linkContainer}
                  onPress={() => console.log('Link pressed')}
                >
                  <Text style={styles.linkText}>{link.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginVertical: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 2,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  arrow: {
    fontSize: 14,
    color: '#666',
  },
  contentContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  linkContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  linkText: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default AccordionV2;
