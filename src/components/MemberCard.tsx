import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  name: String;
  onPress: (name: string) => void;
}

const MemberCard: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export {MemberCard};
