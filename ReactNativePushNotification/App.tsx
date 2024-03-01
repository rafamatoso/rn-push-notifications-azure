import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native + Azure Notification Hub</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});

export default App;
