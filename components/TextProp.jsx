/* eslint-disable comma-dangle */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TextProp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Greyloops.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0071c5',    // Cool modern blue
    width: '100%',
    height:'10%'             // Makes the container take full width
  },
  headerText: {
    marginTop:'1%',
    textAlign: 'center',           // Centers the text within the full-width Text container
    color: '#E1EBEE',              // White text for contrast
    fontSize: 36,                  // Large font for a header
    fontWeight: 'bold',            // Makes the text bold to stand out
    fontFamily: 'Arial',           // Use a modern font or system default
    letterSpacing: 3.5,            // Adds space between letters for elegance
  },
});

export default TextProp;
