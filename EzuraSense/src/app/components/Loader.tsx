import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image ,Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';

const Colors = require('../../codes/colors.json')

const Loader = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/CookatoGen'); 
        }, 2000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/LOGO12024x1024_Transparent.png')} resizeMode='contain' style={styles.animation}/>
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Color_Codes.cookato.bg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        height:'35%',
        aspectRatio:1,
    },
    txt:{
        marginTop:20,
        paddingHorizontal : 10,
        borderRadius:30,
        backgroundColor:Colors.Color_Codes.cookato.bg_dark,
        color:Colors.Color_Codes.cookato.bg,
        fontSize:15,
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
});
