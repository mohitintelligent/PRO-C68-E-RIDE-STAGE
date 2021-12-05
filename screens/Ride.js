import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ride extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}> Rent A ride </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#808080',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        colour: '#ffffff'
    }
  });
  