import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Platform } from 'react-native';

const Colors = require('../../codes/colors.json')

export default function Ezura() {
  StatusBar
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/EZURA_LOGO.png')} resizeMode='cover' style={styles.cover}>
      </ImageBackground>
 <StatusBar
        backgroundColor={Platform.OS === 'android' ? Colors.Color_Codes.ezura.white : 'transparent'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20
  },
  cover:{
    flex:1,
    height:'100%',
    width:'100%'
  }
});
