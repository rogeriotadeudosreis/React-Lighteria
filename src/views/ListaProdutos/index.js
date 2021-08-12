import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DATA} from '../../utils/data';
import Cabecalho from './componentes/Cabecalho';
import {Item} from './componentes/Produto';

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default ListaProdutos;
