import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import cardInfo from '../database/cardInfoDatabase';
import colors from '../assets/Colors';
import sizes from '../assets/Sizes';
import { useFonts } from 'expo-font';
import ButtonTour from '../Components/ButtonTour';

export default function TourScreenOne() {
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../Images/caravan.jpg')} style={styles.image} />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.wrapperHeader}>
            <Text style={styles.textHeader}>{cardInfo.names[1]}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="heart-outline" color={colors.greenLight} size={35} />
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <View style={styles.wrapperRating}>
              <Text style={styles.textRating}>Rating</Text>
              <View style={styles.wrapperStars}>
                <MaterialCommunityIcons name="star" color={colors.starColor} size={24} />
                <MaterialCommunityIcons name="star" color={colors.starColor} size={24} />
                <MaterialCommunityIcons name="star" color={colors.starColor} size={24} />
                <MaterialCommunityIcons name="star-outline" color={colors.starColor} size={24} />
                <MaterialCommunityIcons name="star-outline" color={colors.starColor} size={24} />
              </View>
            </View>

            <View>
              <Text style={styles.textPrice}>Price</Text>
              <Text style={styles.price}>{cardInfo.price[1]}</Text>
            </View>
          </View>

          <View style={styles.wrapperDescription}>
            <Text style={styles.textDescription}>Description</Text>
            <Text style={styles.paragraph}>{cardInfo.description[1]}</Text>
          </View>

          <ButtonTour />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  paragraph: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.paragraphSizeMedium,
    color: colors.secondary,
    marginBottom: 25,
  },
  textDescription: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.descriptionSize,
    marginBottom: 8,
  },
  wrapperDescription: {
    marginHorizontal: 20,
  },
  textHeader: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.headerTourSize,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 24,
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: colors.secondary,
  },
  textPrice: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.descriptionSize,
  },
  textRating: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.descriptionSize,
  },
  wrapperStars: {
    flexDirection: 'row',
  },
  wrapperRating: {
    flexDirection: 'column',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 295,
    borderRadius: 30,
  },
  imageContainer: { 
    width: '100%',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
