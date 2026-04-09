import { Tabs } from 'expo-router'
import { Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const Colors = require('../../codes/colors.json')

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{headerShown:false , tabBarActiveTintColor:Colors.Color_Codes.ezura.cyan}}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarShowLabel: true,
                tabBarLabelStyle:{},
                tabBarIcon:() => <AntDesign name="home" size={24} color={Colors.Color_Codes.ezura.cyan} />}} />
            <Tabs.Screen name='Ezura' options={{
                title: 'Ezura Scence', 
                tabBarShowLabel: true,
                tabBarIcon: () => {
                    return (
                        <Image source={require('../../../assets/EZURA_LOGO_Transparent.png')}
                            style={
                                {
                                    height: "auto",
                                    width: "350%",
                                    flex: 1,
                                    marginBottom:0,
                                }
                            }
                        />
                    )
                }
            }} />
            <Tabs.Screen name='CookATo' options={{ 
                tabBarShowLabel: true,
                title: 'CookATo' ,
                 tabBarIcon: () => {
                    return (
                        <Image source={require('../../../assets/LOGO12024x1024_Transparent.png')}
                            style={
                                {
                                    height: "auto",
                                    width: "100%",
                                    flex: 1,

                                }
                            }
                        />
                    )
                }
                }} />
        </Tabs>
    )
}