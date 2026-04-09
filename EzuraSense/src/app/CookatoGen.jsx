import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import ListHolder from './components/ListHolder';
import { useFonts } from 'expo-font';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';


const Colors = require('../codes/colors.json')
const lightColors = Colors.Color_Codes.lightShades

const apiKey = process.env.GROQ_API_KEY;
const apiURL = "https://api.groq.com/openai/v1/chat/completions";

const bgColor_TEXT = () => Colors.Color_Codes.dark_colors[Math.floor(Math.random() * Colors.Color_Codes.dark_colors.length)];
const bgColor = () => lightColors[Math.floor(Math.random() * lightColors.length)];

export default function Index() {
    const [recipe, setRecipe] = useState({});
    const [ingredient, setIngredients] = useState({})
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'Heading': require('../../assets/fonts/PlaywriteUSModern-Regular.ttf'),
    });
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const GetData = async () => {
        try {
            const Ingredients = await fetch('http://localhost:5000/data')
                .then(data => {
                    return data.json()
                })
                .then(res => {
                    setIngredients(res)
                    console.log(res);
                    return res
                })
                .catch(err => console.log("Something went wrong please Check the route", err))

        
            await delay(2500);
            const response = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-20b",
                    messages: [{
                        role: "user", content:
                            `You are a helpful and creative cooking assistant.
                             Please generate a unique recipe only using the following ingredients: ${Ingredients.Vegetables}.
                            Return all the information strictly in JS Object format — no extra explanation, markdown, or invalid syntax.
                            The response must be a single valid JS Object.

                            The recipe should include the following fields:

                            1. "Name" — Name of the recipe.
                            2. "Type" — Veg or Non-Veg.
                            3. "Ingredients" — An array of ingredient objects. Each object must include:
                            - "name": Ingredient name, with appropriate food emoji (e.g., 🍅, 🧄, 🌿).
                            - "quantity": Use strings for units (e.g., "250g").
                            4. "Instructions" — An array of clear, step-by-step instructions.
                            5. "CookingTime" — Total time required to prepare and cook the dish, in minutes (number).
                            6. "Notes" — Any special notes or cooking tips.
                            7. "FunnyFact" — A quirky or funny fact about the dish or ingredients, with appropriate food emoji (e.g., 🍅, 🧄, 🌿).
                            8. "Difficulty" — One of: "Easy", "Medium", or "Hard".

                            Make sure:
                            - All field keys and string values are enclosed in double quotes.
                            - All array and object syntax follows valid JS Object rules.
                            - All quantities must be in grams and **enclosed as strings** (e.g., "150g").
                            - Close all brackets and commas properly.

                             Final Output: **Only return the final valid JS object , add '}' at the end.**

    `
                    }],
                }),
            });
            await delay(2500);
            let data = await response.json();
            const recipe_data = await data.choices[0].message.content
            console.log(recipe_data);
            return recipe_data
        }
        catch {
            console.log("Something went Wrong!")
            return (<Error />)
        }
    }

    useEffect(() => {
        const fetchRecipe = async () => {
            const result = await GetData();
            if (result) {
                try {
                    setRecipe(JSON.parse(result));
                }
                catch {
                    setRecipe(undefined)
                }
            }
            setLoading(false);
        };

        fetchRecipe();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <Loading />
            </View>
        );
    }

    if (recipe !== undefined) {
        let ing = recipe.Ingredients.map(item =>
            Object.values(item).join(' ')
        );
        if (!fontsLoaded) return null;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Link href="/CookATo" style={styles.back_btn}>
                        <Ionicons name="chevron-back" size={40} color="orange" />
                    </Link>
                    <Image resizeMode='contain' source={require('../../assets/Cookato_badge.png')} style={styles.header_img} />
                </View>

                <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: "center" }} style={styles.content} horizontal={false}>
                    <View style={styles.sub_con}>
                        <View style={styles.banner}>
                            <Image style={styles.banner_img} resizeMode="contain" source={require('../../assets/LOGO12024x1024_Transparent.png')} />
                            <View style={styles.banner_details}>
                                <View style={styles.Head_con}>
                                    <Text style={styles.head_txt}>
                                        {recipe.Name}
                                    </Text>
                                    {
                                        recipe.Type === "Non-Veg" ? (
                                            <Image resizeMode="contain" style={styles.types} source={require('../../assets/non-veg.png')} />
                                        ) : (
                                            <Image resizeMode='contain' style={styles.types} source={require('../../assets/veg.png')} />
                                        )
                                    }
                                </View>
                                <View style={styles.time}>
                                    <Text style={styles.time_sub}>⏱️ Cooking Time : {recipe.CookingTime}</Text>
                                    <Text style={[styles.time_sub1, { backgroundColor: (recipe.Difficulty === 'Easy' ? '#00C853' : recipe.Difficulty === 'Hard' ? '#D50000' : '#FFD600') }]}>{recipe.Difficulty}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <ListHolder title={'🍽️ Ingredients'} bg_color={bgColor()} bg_color_text={bgColor_TEXT()} list={ing} />
                            <TouchableOpacity style={styles.edit} onPress={() => {
                                router.push({
                                    pathname: '/components/EditIngredients',
                                    params: { list: JSON.stringify(ingredient) }
                                })
                            }}>
                                <Feather name="edit" size={24} color="black" />
                                <Text style={styles.edit_txt}>Edit Ingredients</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                            <ListHolder title={'🧑‍🍳 Instructions'} bg_color={bgColor()} bg_color_text={bgColor_TEXT()} list={recipe.Instructions} />
                        </View>
                        <View style={styles.section}>
                            <ListHolder title={'🗒️ Notes'} bg_color={bgColor()} bg_color_text={bgColor_TEXT()} list={[recipe.Notes]} />
                        </View>
                        {
                            (recipe.FunnyFact !== "") ?
                                <View style={styles.section}>
                                    <ListHolder title={'✨ Fooood Facts!!!!!'} bg_color={bgColor()} bg_color_text={bgColor_TEXT()} list={[recipe.FunnyFact]} />
                                </View>
                                :
                                <View></View>
                        }
                    </View>
                </ScrollView>
                <StatusBar
                    backgroundColor={Platform.OS === 'android' ? Colors.Color_Codes.cookato.bg : 'transparent'}
                />
            </SafeAreaView>
        );
    }

    else {
        return (<Error />)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Color_Codes.cookato.bg,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'column',
        gap: 10
    },
    center: {
        flex: 1,
        backgroundColor: Colors.Color_Codes.cookato.bg,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        textAlign: 'center'
    },
    banner: {
        width: '100%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    },
    banner_img: {
        width: '80%',
        aspectRatio: 1,
        height: 'auto'
    }
    ,
    header: {
        height: '15%',
        width: '100%',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        boxSizing: 'border-box',
        paddingTop: 20,
    }
    ,
    header_img: {
        maxWidth: '60%',
        left: '20%',
        transform: [{ translateX: -50 }],
    },
    back_btn: {
        paddingTop: 3,
        backgroundColor: Colors.Color_Codes.cookato.bro,
        borderRadius: 8,
        marginLeft: 20,
    },
    content: {
        flex: 1,
        width: '100%',
        borderRadius: 30,
        marginBottom: 0,
    },
    section: {
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
    },
    sub_con: {
        paddingVertical: 15,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box',
    },
    head_txt: {
        fontSize: 30,
        color: Colors.Color_Codes.cookato.bro,
        textShadowColor: "orange",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textAlign: 'left',
        fontFamily: 'Heading',
        width: '70%'
    },
    Head_con: {
        width: '95%',
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        boxSizing: 'border-box',
        padding: 10,
        borderRadius: 10,
    },
    types: {
        marginTop: '5%',
        height: "auto",
        width: '6%',
        aspectRatio: 1,
        backgroundColor: 'green',
        alignSelf: 'flex-start',
        marginLeft: 'auto',
    },
    time: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    time_sub: {
        color: "black",
        paddingVertical: 3,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(68, 255, 0, 0.25)',
        fontSize: 14,
        textShadowColor: "rgba(0, 0, 0, 0.8)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        borderRadius: 20,
        fontFamily: 'Heading'
    },
    time_sub1: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        fontSize: 14,
        borderRadius: 20,
        fontFamily: 'Heading',
        marginLeft: 'auto',
        color: 'white',
    },
    banner_details: {
        width: '95%',
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: Colors.Color_Codes.cookato.bg,
        boxSizing: 'border-box',
        padding: 10,
        borderRadius: 20,
    },
    edit: {
        width: '50%',
        flexDirection: 'row',
        backgroundColor: 'rgba(68, 255, 0, 0.25)',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    edit_txt: {
        fontFamily: 'Heading',
        fontSize: 15,
        textShadowColor: "grey",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    }
});
