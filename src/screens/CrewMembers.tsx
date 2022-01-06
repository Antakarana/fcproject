import React, {useState, useEffect, FunctionComponent} from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import {MemberCard} from '../components/MemberCard';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import {serviceConnectionCrew} from '../services/api/ApiFunctions';
import {requestTrackingPermission} from 'react-native-tracking-transparency';
import {screenWidth} from '../utils/Constants';

const CrewMembers: FunctionComponent = () => {
  const [crewData, setCrewData] = useState<{}>();
  const [isPermissed,setIsPermissed]=useState<boolean>(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    tracking();
    getRockets();
  }, []);

  const tracking = async () => {
    const trackingStatus = await requestTrackingPermission();
    if (trackingStatus === 'authorized') setIsPermissed(true);
    else setIsPermissed(false);
  };

  const getRockets = async () => {
    const crews = await serviceConnectionCrew();
    setCrewData(crews);
  };

  return (
    <ScrollView style={styles.fieldCrewList}>
      {crewData?.map(item => {
        return (
          <View key={item.id}>
            <MemberCard
              name={item?.name}
              onPress={() =>
                isPermissed ? navigation.navigate('CrewMember', item) : {}
              }
              agency={item?.agency}
              image={item?.image}
              url={item?.wikipedia}
              launches={item?.launches}
              status={item?.status}
              isDisabled={false}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fieldCrewList: {
    marginBottom: screenWidth / 5,
  },
});

export {CrewMembers};