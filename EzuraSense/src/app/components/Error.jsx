import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useRouter } from 'expo-router';

const Error = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Something went wrong 😔</Text>
            <Text>Please Check Your Connection!</Text>
            <Text>Please Close and Re-Open App!</Text>
            <Text>or</Text>
            <TouchableOpacity style={styles.TA} onPress={() => {
                router.replace('/CookatoGen')
            }}>
                <Text style={{ color: 'black' }}>Try Again!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Error;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        backgroundColor: 'perl'
    },
    TA: {
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: 'beige'
    }
});