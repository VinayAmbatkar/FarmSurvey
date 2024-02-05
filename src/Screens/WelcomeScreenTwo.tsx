import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { useFonts } from 'expo-font'
import Button from '../Components/Button'
import Lines from '../Components/Lines'
import { useNavigation } from '@react-navigation/native'

type NavigationProps = {
    navigation: any,
    onPress: () => void
}

export default function WelcomeScreenOne(props: NavigationProps) {

    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
    })

    if(!loaded) {
        return null;
    }

  return (
    <View style={styles.container}>

        <View style={styles.pictureContainer}>
            <Image style={styles.picture} source={require("../Images/wlcome2.jpeg")} />
        </View>
    
        {/* <Text style={styles.textMain}>CONTRIBUTE IN OUR APP</Text> */}
        <Text style={styles.textSecondary}> Our Mini Project Cultivating Solutions.</Text>

        <Lines colorOne={`${colors.gray}`} colorTwo={`${colors.green}`}/>

        <Button name="Get Started" onPress={ () => props.navigation.navigate('HomeScreen') } />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    textMain:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.titleSize,
        color: colors.main,
        alignSelf: 'center',
        marginBottom: 18,
        top: 100,

    },
    textSecondary:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.paragraphSize,
        color: colors.secondary,
        textAlign: 'center',
        marginHorizontal: 45,
        marginBottom: 45,
        top: 15,
    },
    pictureContainer:{
        position: 'absolute',
        top: 60,
        width: '100%',
        justifyContent: 'center',
    },
    picture:{
        width: '100%',
        height: 400,
    },
})