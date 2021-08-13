import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Background } from './componentes/background';
import { DescricaoItem } from './componentes/descricaoItem';

export const DetalhesProduto = ({route}) => {
  const {id, titulo, imagem, estudio, itemName, preco, itemDesc} = route.params;
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        id={id}
        titulo={titulo}
        imagem={imagem}
        estudio={estudio}
        itemName={itemName}
        preco={preco}
        itemDesc={itemDesc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
