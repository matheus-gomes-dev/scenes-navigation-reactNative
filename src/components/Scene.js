import React from 'react';
import { View, Image } from 'react-native';

import Navibar from './Navibar'

const logo = require('../img/logo.png');
const menuCliente = require('../img/menu_cliente.png');
const menuContato = require('../img/menu_contato.png');
const menuEmpresa = require('../img/menu_empresa.png');
const menuServico = require('../img/menu_servico.png'); 


export default class App extends React.Component {
  render() {
    return (
    	<View>
      		<Navibar />
      		<Image source={logo} />
      		<Image source={menuCliente} />
      		<Image source={menuContato} />
      		<Image source={menuEmpresa} />
      		<Image source={menuServico} />
      	</View>
    );
  }
}