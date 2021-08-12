import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Item = ({imagem, titulo}) => {
  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    height: 84,
  },
  container: {
    height: 168,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#848486',
  },
});
