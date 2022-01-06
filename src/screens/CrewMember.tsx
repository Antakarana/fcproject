import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RootStackParams} from '../../App';
import {MemberCard} from '../components/MemberCard';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'CrewMember'>;

const CrewMember: FunctionComponent = ({route}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <SafeAreaView>
      <MemberCard
        name={route?.params?.name}
        onPress={() => {}}
        agency={route?.params?.agency}
        image={route?.params?.image}
        url={route?.params?.wikipedia}
        launches={route?.params?.launches}
        status={route?.params?.status}
        isDisabled={true}
      />
    </SafeAreaView>
  );
};

export {CrewMember};