//TurtleWolfe.com // //custom components
//ListingDetailsScreen
//ListingDetailsScreen // //custom components
//ListingDetailsScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  // Text,
  View,
} from 'react-native'
import AppText from "../components/AppText";
import ContactSellerForm from '../components/ContactSellerForm';
import AppListItem from "../components/lists/AppListItem";
import defaultStyles from '../config/styles';

interface ListingDetailsScreenProps {
  route?: any;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  route,
}) => {
  // const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.keyBoard}
    >
      <View
        style={styles.container}
      >
        <Image
          style={styles.image}
          // source={listing.image}
          source={require("../assets/images/resources/cosmetics/eggBottle.png")}
        />
        <View style={styles.detailsContainer}>
          <AppText
            style={styles.title}>
            Farmasi Cosmetics
            {/* {listing.title} */}
          </AppText>
          <AppText
            style={styles.price}>
            $99
            {/* ${listing.price} */}
          </AppText>
          <View style={styles.userContainer}>
            <AppListItem
              // image={require("../assets/mosh.jpg")}
              image={require("../assets/images/resources/models/10bfe9408f3e45bfb4609fb75331ac6a.png")}
              title="Janet Doe"
              subTitle="5 Listings"
              appListItem={
                styles.appListItem
              }
              appListImage={
                styles.applistImage
              }
            />
          </View>
          {/* <ContactSellerForm
            listing={listing}
          /> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  keyBoard: {
    width: "100%",
  },
  container: {
    width: "100%",
    // backgroundColor: defaultStyles.colors.primary,
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: defaultStyles.colors.mediumGrey,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: defaultStyles.colors.lightGrey,
  },
  userContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 40,
    // backgroundColor: defaultStyles.colors.lightGrey,
  },
  appListItem: {
    backgroundColor: defaultStyles.colors.lightGrey,
    marginRight: 13,
    // padding: 30,
  },
  applistImage: {
    backgroundColor: defaultStyles.colors.black,
    // borderRadius: 50,
    // height: 100,
    marginRight: 13,
    // margin: 10,
    // padding: 40,
    // width: 100,
  },
  title: {
    fontFamily: 'CharterBold',
    fontSize: 24,
    fontWeight: '900',
  },
  price: {
    color: defaultStyles.colors.secondary,
    fontFamily: 'CharterBoldItalic',
    fontSize: 20,
    // fontWeight: "bold",
    fontWeight: '900',
    marginVertical: 10,
  },
})

export default ListingDetailsScreen