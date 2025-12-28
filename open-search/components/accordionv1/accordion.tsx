import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { AccordionProps } from './accordion.interface';

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
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
              {expandedItems.includes(index) ? '¼' : '¶'}
            </Text>
          </TouchableOpacity>

          {expandedItems.includes(index) && (
            <View style={styles.contentContainer}>
              {item.links.map((link, linkIndex) => (
                <TouchableOpacity
                  key={linkIndex}
                  style={styles.linkContainer}
                  onPress={() => handleLinkPress(link.url)}
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
    width: '100%',
    marginVertical: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 2,
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
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

export default Accordion;
