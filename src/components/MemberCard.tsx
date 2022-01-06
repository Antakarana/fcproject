import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {screenWidth} from '../utils/Constants';

interface Props {
  name: String;
  onPress: (name: string) => void;
  agency: string;
  image: string;
  url: string;
  launches: object;
  status: string;
  id: string;
  isDisabled: boolean;
}

const MemberCard: React.FC<Props> = props => {
  const {name, onPress, agency, image, url, launches, status, id, isDisabled} =
    props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(id)}
      disabled={isDisabled}>
      <Image source={{uri: image}} style={styles.img} />
      <View style={styles.fieldCrew}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>{name} </Text>
          <Text style={styles.txt}>({agency})</Text>
        </View>
        <Text style={styles.url}>{url}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row'
  },
  img: {
    width: screenWidth / 5,
    height: screenWidth / 5,
    borderRadius: screenWidth / 2.5
  },
  fieldCrew: {
    paddingHorizontal: 20,
    justifyContent:'center'
  },
  txt: {
    fontSize: 18,
    fontWeight: '500'
  },
  url: {
    fontSize: 14,
    fontWeight: '400',
    flexWrap: 'wrap',
    width: screenWidth / 1.5
  },
});

export {MemberCard};
