import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Rockets: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rockets Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {Rockets};
