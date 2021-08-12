import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListaProdutos from './views/ListaProdutos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F0F4',
  },
  imagem: {
    height: 30,
    width: 30,
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  containerDescricao: {
    paddingHorizontal: 24,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA',
  },
});

export default App;
