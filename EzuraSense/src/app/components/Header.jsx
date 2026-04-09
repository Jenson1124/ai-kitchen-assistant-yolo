import { View, Text, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header({ title , color , bg , tc}) {
  return (
    <SafeAreaView style={[styles.header,{backgroundColor:bg}]}>
      <Text style={[styles.header_title ,{ color:tc}]}>{title}</Text>
      {/* <TouchableOpacity style={styles.dots}> */}
      <Entypo style={styles.dots} name="dots-three-vertical" size={24} color={color} />
      {/* </TouchableOpacity> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: "flex-start",
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    boxSizing:'border-box',
  },
  header_title: {
    fontWeight: "light",
    fontSize: 30,
    marginLeft:'5%'
  },
  dots: {
    marginLeft: 'auto',
    marginRight:'5%'
  }
})