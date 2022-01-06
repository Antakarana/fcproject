import React, {
  useState,
  useEffect,
  useLayoutEffect,
  FunctionComponent,
} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {serviceConnectionRockets} from '../services/api/ApiFunctions';
import ImageSlider from 'react-native-image-slider';
import {screenWidth} from '../utils/Constants';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Rockets: FunctionComponent = () => {
  const [rocketData, setRocketData] = useState<{}>();

  useEffect(() => {
    getRockets();
  }, []);

  const getRockets = async () => {
    const rockets = await serviceConnectionRockets();
    setRocketData(rockets);
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <TouchableOpacity onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {rocketData?.map(item => {
        return (
          <View key={item.id} style={styles.center}>
            <ImageSlider images={item.flickr_images} style={styles.images} />
            <Text style={styles.txtCompany}>{item.company}</Text>
            <Text style={styles.txtCountry}>{item.country}</Text>
            <Text style={styles.txtDesc}>{item.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: screenWidth / 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  images: {
    width: screenWidth - 40,
    height: screenWidth / 1.75,
    borderRadius: 5,
  },
  txtCompany: {
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  txtCountry: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 2.5,
    paddingHorizontal: 20,
  },
  txtDesc: {
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 2.5,
    paddingHorizontal: 20,
  },
});

export {Rockets};