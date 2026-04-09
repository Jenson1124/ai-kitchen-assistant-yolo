import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';

const Colors = require('../../codes/colors.json')

console.log("Hello1")


export default function CookATo() {
  const [fontsLoaded] = useFonts({
    'name': require('../../../assets/fonts/PlaywriteUSModern-Regular.ttf'),
  });
  
  if (!fontsLoaded) return null;

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/Screen_cover.png')} resizeMode="cover" style={styles.content}>
        <TouchableOpacity style={styles.btn} onPress={() => { router.push('/components/Loader') }}>
          <Text style={{fontFamily:'name' ,color: Colors.Color_Codes.cookato.nro, fontSize: 25, textShadowColor: 'chocolate', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 3, }}>Create Recipe</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? Colors.Color_Codes.cookato.bg : 'transparent'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Color_Codes.cookato.bg,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    marginTop: '70%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.Color_Codes.cookato.bro,
    paddingTop: 0,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: 'chocolate',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: 'beige'
  },
});
