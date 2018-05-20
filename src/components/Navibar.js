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
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.15
	},
	title: {
		fontSize: 18,
		paddingTop: 20,
		color: '#000'
	}
})
