import React from 'react';
import TextProp from './components/TextProp';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TextProp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                       // Makes the View fill the entire screen
    backgroundColor: '#E1EBEE',     // Sets a deep blue background color
    justifyContent: 'flex-start',   // Aligns content to the top of the screen
    alignItems: 'stretch',          // Makes sure the content (TextProp) takes full width
    paddingTop: 10,                 // Optional: Adds some space at the top
  },
});

export default App;
