import React, {FunctionComponent} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {MemberCard} from '../components/MemberCard';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';

const CrewMembers: FunctionComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Crew Members Screen</Text>
      <MemberCard
        name={'ucuncu ekran crew member'}
        onPress={name => navigation.navigate('CrewMember', {name})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {CrewMembers};