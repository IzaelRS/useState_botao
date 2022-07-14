import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

export default function App() {

  const [ligado, setLigado] = useState(false) // usando  um ternario "? :" ja da para fazer a troca do blackground

  return (
    <View style={ligado ? styles.container1 : styles.container2}>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setLigado(!ligado)} // esse ! ele nega o ligado
      >

        {/* opcao text*/}
        {/* <Text>{ligado ? "Desligar" : "Ligar"} </Text> */}

        {ligado ?
          <Feather
            name="power"
            size={50}
            color={'#4fba18'}
          />
          :
          <Feather
            name="power"
            size={50}
            color={'#ba184f'}
          />
        }

      </TouchableOpacity>

      {ligado ?
        <View style={styles.modoB}>

          <Text style={styles.textB}> Modo Ativado </Text>

        </View>

        :

        <View style={styles.modoA}>

          <Text style={styles.textA}> Modo Desativado </Text>

        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e3140'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  btn: {
    margin: 15,
    height: 80,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: '#5c96c3',
    borderWidth: 2
  },
  modoA: {

  },
  modoB: {

  },

  textA: {
    color: '#090e13',
    fontSize: 25,
    fontWeight: 'bold',

  },
  textB: {
    color: '#e6e6e7',
    fontSize: 25,
    fontWeight: 'bold',
  },
})