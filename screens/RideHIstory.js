import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RideHistory extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}> Ride History </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#964B00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        colour: '#ffffff'
    }
  });
  