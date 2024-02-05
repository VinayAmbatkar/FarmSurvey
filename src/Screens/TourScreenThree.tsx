import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import cardInfo from '../database/cardInfoDatabase';
import colors from '../assets/Colors';
import sizes from '../assets/Sizes';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;

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
          <Image source={require('../Images/plant1.jpg')} style={styles.image} />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.wrapperHeader}>
            <Text style={styles.textHeader}>{cardInfo.names[3]}</Text>
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
                <MaterialCommunityIcons name="star" color={colors.starColor} size={24} />
                <MaterialCommunityIcons name="star-outline" color={colors.starColor} size={24} />
              </View>
            </View>

            <View>
              <Text style={styles.textPrice}>Price</Text>
              <Text style={styles.price}>{cardInfo.price[3]}</Text>
            </View>
          </View>

          <View style={styles.wrapperDescription}>
            <Text style={styles.textDescription}>Description</Text>
            <Text style={styles.paragraph}>{cardInfo.description[3]}</Text>
          </View>

          <View style={styles.additionalProperties}>
            <Text>Pesticide Name: <Text style={styles.additionalText}>{cardInfo.pesticideName[3]}</Text></Text>
            <Text>Pesticide Category: <Text style={styles.additionalText}>{cardInfo.pesticideCategory[3]}</Text></Text>
            <Text>Rating: <Text style={styles.additionalText}>{cardInfo.rating[3]}</Text></Text>
            <Text>Product Rate: <Text style={styles.additionalText}>{cardInfo.productRate[3]}</Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    width: windowWidth - 40,
    marginHorizontal: 20,
  },
  imageContainer: {
    width: windowWidth,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: windowWidth - 40,
    height: (windowWidth - 40) * (295 / 348),
    borderRadius: 30,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  textHeader: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.headerTourSize,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  wrapperRating: {
    flexDirection: 'column',
  },
  textRating: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.descriptionSize,
  },
  wrapperStars: {
    flexDirection: 'row',
  },
  textPrice: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.descriptionSize,
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: colors.secondary,
  },
  wrapperDescription: {
    marginHorizontal: 20,
    marginBottom: 21,
  },
  textDescription: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.descriptionSize,
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.paragraphSizeMedium,
    color: colors.secondary,
    marginBottom: 25,
    lineHeight: 20,
  },
  additionalProperties: {
    marginBottom: 20,
  },
  additionalText: {
    fontWeight: 'normal',
  },
});
