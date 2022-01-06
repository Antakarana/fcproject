import React, {useState, useEffect, FunctionComponent} from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import {MemberCard} from '../components/MemberCard';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import {serviceConnectionCrew} from '../services/api/ApiFunctions';

const CrewMembers: FunctionComponent = () => {
  const [crewData, setCrewData] = useState<{}>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    getRockets();
  }, []);

  const getRockets = async () => {
    const crews = await serviceConnectionCrew();
    setCrewData(crews);
  };

  return (
    <SafeAreaView>
      <Text>Crew Members Screen</Text>
      <ScrollView style={styles.fieldCrewList}>
        {crewData?.map(item => {
          return (
            <View key={item.id}>
              <MemberCard
                name={item?.name}
                onPress={() => navigation.navigate('CrewMember', item?.id)}
                agency={item?.agency}
                image={item?.image}
                url={item?.wikipedia}
                launches={item?.launches}
                status={item?.status}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fieldCrewList: {
    marginVertical: 10,
  },
});

export {CrewMembers};