import { StyleSheet, Text, View, Image } from 'react-native'
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

    const navigation = useNavigation();
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
    })

    if(!loaded) {
        return null;
    }

  return (
    <View style={styles.container}>

        <View style={styles.pictureContainer}>
            <Image style={styles.picture} source={require("../Images/welcome.jpeg")} />
        </View>
    
        <Text style={styles.textMain}>GIVE SURVEY</Text>
        <Text style={styles.textSecondary}>
"Explore, Cultivate, Thrive: Elevate Your Farming Journey!"</Text>

        <Lines colorOne={`${colors.green}`} colorTwo={`${colors.gray}`}/>

        <Button name="Next" onPress={ () => props.navigation.navigate('WelcomeScreenTwo')} />
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
        fontSize: sizes.headerSize,
        color: colors.main,
        alignSelf: 'center',
        marginBottom: 18,
        height: '10%',

    },
    textSecondary:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.paragraphSize,
        color: colors.secondary,
        textAlign: 'center',
        marginHorizontal: 45,
        marginBottom: 18,
    },
    pictureContainer:{
        position: 'absolute',
        top: 75,
        width: '100%',
        height: '40%',
        justifyContent: 'center',
    },
    picture:{
        width: '100%',
        height: '160%',
    },
})