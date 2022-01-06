import React, {useState, useEffect, FunctionComponent} from 'react';
import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';
import {serviceConnectionRockets} from '../services/api/ApiFunctions';
import ImageSlider from 'react-native-image-slider';
import {screenWidth} from '../utils/Constants';

const Rockets: FunctionComponent = () => {
  const [rocketData, setRocketData] = useState<{}>();

  useEffect(() => {
    getRockets();
  }, []);

  const getRockets = async () => {
    const rockets = await serviceConnectionRockets();
    setRocketData(rockets);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Rockets Screen</Text>
      <ScrollView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
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
  },
  txtCountry: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 2.5,
  },
  txtDesc: {
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 2.5,
  },
});

export {Rockets};