import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RootStackParams} from '../../App';

type Props = NativeStackScreenProps<RootStackParams, 'CrewMember'>;

const CrewMember: FunctionComponent = ({route}: Props) => {
  return (
    <SafeAreaView>
      <Text>Crew Member Screen {route?.params?.name}</Text>
    </SafeAreaView>
  );
};

export {CrewMember};