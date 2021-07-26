//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  ListingsScreen
//  ListingsScreen // //custom components
//  ListingsScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React, {
  // useState,
  // useEffect
} from 'react'
import {
  FlatList,
  StyleSheet,
} from 'react-native'

// import AppActivityIndicator from '../components/AppActivityIndicator';
import AppActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/Button';
import AppCard from "../components/Card";
import AppScreen from "../components/Screen";
import AppText from '../components/Text';
import defaultStyles from '../config/styles';
// import listingsApi from '../api/listings'
import routes from '../navigation/routes'
// import useApi from '../hooks/useApi';

const listings = [
  {
    id: 1,
    title: "Lipstick",
    price: 99,
    image: require("../assets/images/resources/cosmetics/lipstick00.png"),
  },
  {
    id: 2,
    title: "Foundation",
    price: 99,
    image: require("../assets/images/resources/cosmetics/foundation00.png"),
  },
  {
    id: 3,
    title: "Foundation",
    price: 99,
    image: require("../assets/images/resources/cosmetics/eggBottle.png"),
  },
];

interface ListingsScreenProps {
  navigation?: any;
  // data?: {}[];
}

const ListingsScreen: React.FC<ListingsScreenProps> = ({
  navigation,
}) => {
  // const getListingsApi = useApi(listingsApi.getListings);

  // useEffect(() => {
  //   getListingsApi.request();
  // }, []);

  return (
    <>
      <AppActivityIndicator
        // visible={getListingsApi.loading}
        visible={false}
      // size="large"
      />
      <AppScreen
        style={styles.screen}
      >
        {/* {getListingsApi.error && ( */}
        {listings && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton
              title="Retry"
              // onPress={getListingsApi.request}
              onPress={console.log(listings)}
            />
          </>
        )
          // )    getListingsApi.error &&
        }
        <FlatList
          style={styles.flist}
          // data={getListingsApi.data}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subTitle={"$" + item.price}
              // imageUrl={item.images[0].url}
              imageUrl={item.image}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            // onPress={() => navigation.navigate("ListingDetails", item)}
            // onPress={() => console.log(item)}
            />
          )}
        />
      </AppScreen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    // padding: 1,
    // backgroundColor: defaultStyles.colors.lightGrey,
  },
  flist: {
    padding: 3,
    // backgroundColor: defaultStyles.colors.lightGrey,
    overflow: "hidden",
  },
})

export default ListingsScreen