import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default class Navibar extends React.Component {
  render() {
    return (
      <View style={styles.titleBar}>
      	<Text style={styles.title}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	titleBar: {
		backgroundColor: '#CCC',
		height: 80
	},
	title: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#000',
		paddingTop: 40
	}
})
