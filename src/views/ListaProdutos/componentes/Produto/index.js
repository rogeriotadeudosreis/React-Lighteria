import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Item = ({imagem, titulo, preco}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push('DetalhesProduto')}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
      <Text style={styles.texto}>{preco}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagem: {
    height: 84,
  },
  containerItem: {
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
