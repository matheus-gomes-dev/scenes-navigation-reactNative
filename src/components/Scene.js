import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

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
      		<View style={styles.logo}>
	      		<Image source={logo} />
	      	</View>
	      	<View style={styles.menu}>
		      	<View style={styles.groupMenu}>
		      		<Image style={styles.imgMenu} source={menuCliente} />
		      		<Image style={styles.imgMenu} source={menuContato} />
		      	</View>
		      	<View style={styles.groupMenu}>
		      		<Image style={styles.imgMenu} source={menuEmpresa} />
		      		<Image style={styles.imgMenu} source={menuServico} />
		      	</View>
		    </View>
      	</View>
    );
  }
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 30,
		alignItems: 'center'
	},
	menu: {
		alignItems: 'center',
	},
	groupMenu: {
		flexDirection: 'row'
	},
	imgMenu: {
		margin: 15
	}
})