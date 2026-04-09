import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Platform,
    ScrollView,
    View,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native';
import { useFonts } from 'expo-font';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import ListDisplayer from './ListDisplayer';
import { useRouter } from 'expo-router';


const Eidt_List = ({ list }) => {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Heading: require('../../../assets/fonts/PlaywriteUSModern-Regular.ttf'),
    });

    const [localList, setLocalList] = useState(list);
    const [newItem, setNewItem] = useState('');

    const handleRemove = (indexToRemove) => {
        const newList = localList.filter((_, index) => index !== indexToRemove);
        setLocalList(newList);
    };

    const Done = async () => {
        try {
            const updatedString = localList.join(', ');

            const response = await fetch('http://localhost:5000/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Vegetables: updatedString,
                }),
            });

            const res = await response.json();
            Alert.alert('Success', 'Ingredients updated successfully!');

            router.replace('/CookatoGen');
        } catch (error) {
            Alert.alert('Error', 'Something went wrong!');
            console.error(error);
        }
    };
    const handleAdd = () => {
        if (newItem.trim() === '') return;

        const capitalized = newItem.charAt(0).toUpperCase() + newItem.slice(1);
        setLocalList([...localList, capitalized]);
        setNewItem('');
    };

    if (!fontsLoaded) return null;
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <View style={styles.editlist}>
            <Text style={styles.header}>Edit Ingredients</Text>
            {localList.map((item, index) => (
                <View style={styles.editlistele} key={index}>
                    <ListDisplayer
                        text={capitalizeFirst(item)}
                        bg_color_text={'rgba(68, 255, 0, 0.25)'}
                    />
                    <TouchableOpacity
                        style={{ marginLeft: 'auto' }}
                        onPress={() => handleRemove(index)}
                    >
                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                    </TouchableOpacity>

                </View>
            ))}
            <View style={styles.adding}>
                <TextInput
                    placeholder="Add new ingredient"
                    value={newItem}
                    onChangeText={setNewItem}
                    style={styles.input}
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
                    <Ionicons name="add-circle-outline" size={28} color="green" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.done} onPress={() => {
                Done()
            }}>
                <Text style={styles.don}>Done</Text>
            </TouchableOpacity>

        </View>
    );
};

export default function EditIngredients() {
    const params = useLocalSearchParams();
    const data = JSON.parse(params.list);
    const Data_A = data.Vegetables.split(',').map((item) => item.trim());

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Eidt_List list={Data_A} />
            </ScrollView>
            <StatusBar
                backgroundColor={
                    Platform.OS === 'android' ? '#e5ffe0' : 'transparent'
                }
                barStyle="dark-content"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#f0fff4',
    },
    editlist: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    editlistele: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'rgba(68, 255, 0, 0.10)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 20,
    },
    header: {
        width: '100%',
        fontFamily: 'Heading',
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
    done: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        gap: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        backgroundColor: 'rgba(68, 255, 0, 0.8)'
    },
    don: {
        fontFamily: 'Heading',
        fontSize: 15,
        textAlign: 'center',
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },

    addButton: {
        padding: 5,
    },
    adding: { 
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
    },
});
