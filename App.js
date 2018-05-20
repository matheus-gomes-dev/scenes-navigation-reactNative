import React from 'react';
import { Text } from 'react-native';

import Scene from './src/components/Scene'


export default class App extends React.Component {
  render() {
    return (
      <Scene />
    );
  }
}


/*

	//para ocultar barra de status do dispositivo: 

	import { StatusBar } from 'react-native'

	<StatusBar hidden />

*/
