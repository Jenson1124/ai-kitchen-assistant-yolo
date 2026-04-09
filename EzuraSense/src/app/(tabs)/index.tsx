import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { Platform } from 'react-native';
const Colors = require('../../codes/colors.json')

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Name': require('../../../assets/fonts/DancingScript-Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>

      {/* <Text style={styles.title}>✨ Welcome ✨</Text> */}

      <TouchableWithoutFeedback style={
        {
          width: '100%',
        }
      } onPress={() => { router.push('/Ezura') }}>
        <View style={[styles.box, { borderColor: 'darkcyan', backgroundColor: 'lightcyan' }]}>
          <Image style={styles.box_img} source={require('../../../assets/EZURA_LOGO.png')} resizeMode='contain' />
          <View>
            <Text style={styles.box_txt}>Ezura Sense</Text>
            <Text style={{ color: 'grey' }}>Home Automation Energy Tracker</Text>
            <Text style={{ color: 'grey' }}>Sensing Smarter, Living Smarter.</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={
        {
          width: '100%',
        }
      } onPress={() => { router.push('/CookATo') }}>
        <View style={[styles.box, { borderColor: 'wheat', backgroundColor: '#fdf7ed' }]}>
          <Image style={[styles.box_img, { backgroundColor: 'white' }]} source={require('../../../assets/LOGO12024x1024_Transparent.png')} resizeMode='contain' />
          <View>
            <Text style={styles.box_txt}>CookATo</Text>
            <Text style={{ color: 'grey' }}>Ai Kitchen Assistant </Text>
            <Text style={{ color: 'grey' }}>Smarter Cooking, Every Day.</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? Colors.Color_Codes.ezura.white : 'transparent'}
      />
    </SafeAreaView>
  );  
}

console.log("hi")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'perl',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    gap: 50,
    boxSizing: 'border-box',
  },
  box: {
    width: '90%',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    borderWidth: 3,
  },
  box_img: {
    width: '30%',
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  box_txt: {
    fontSize: 30,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  title: {
    fontFamily: 'Name',
    fontSize: 50,
    textShadowColor: "cyan",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    color: 'darkcyan',
    textAlign: 'center'
  }
});
