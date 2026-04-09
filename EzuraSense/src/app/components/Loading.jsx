import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image ,Text } from 'react-native';


const Colors = require('../../codes/colors.json')

const Loading = () => {
 return (
        <View style={styles.container}>
            <Image source={require('../../../assets/loader.gif')} />
            <Text style={styles.txt}>Loading!</Text>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Color_Codes.cookato.bg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        height:'50%',
        aspectRatio:1,
    },
    txt:{
        marginTop:20,
        paddingHorizontal : 10,
        borderRadius:30,
        backgroundColor:Colors.Color_Codes.cookato.bg_dark,
        color:Colors.Color_Codes.cookato.bg,
        fontSize:15
    }
});
