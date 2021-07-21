//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppPicker
//  AppPicker // //custom components
//  AppPicker
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React, { useState } from 'react'
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./Text";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

interface AppPickerProps {
  icon?: any;
  // icon?: typeof MaterialCommunityIcons;
  items?: {
    label: string;
    value: number;
    backgroundColor?: string;
    icon?: string;
  }[];
  numberOfColumns?: number;
  onSelectItem?: any;
  // onSelectItem?: () => void;
  PickerItemComponent?: any,
  // PickerItemComponent?: ReactNode,
  placeholder?: string;
  selectedItem?: { label: string; value: number; };
  width?: number | string;
} // typeScript

// const categories = [
//   { label: 'Furniture', value: 1 },
//   { label: 'Clothing', value: 2 },
//   { label: 'Cameras', value: 3 },
// ]

const AppPicker: React.FC<AppPickerProps> = ({
  PickerItemComponent = PickerItem,
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  selectedItem,
  width = '100%',
}) => {
  //     modal is the container for the list of picker items
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.mediumGrey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText
              style={styles.categoryInput}///// flex: 1,
            //// pushes chevron to Right end of Input
            >
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText
              style={styles.placeholder}///// flex: 1,
            //// pushes chevron to Right end of Input
            >
              {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mediumGrey}
            style={styles.icon}
          ///    //  centers chevron
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType="slide">
        <Screen>
          <Button
            title="Close"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  console.log(item);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
} // AppPicker component

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
  placeholder: {
    // fontFamily: 'CharterBoldItalic',
    // fontFamily: defaultStyles.text.fontFamily,
    // fontWeight: "bold",
    // fontWeight: '600',
    // alignItems: "center",
    color: defaultStyles.colors.mediumGrey,
    flex: 1,
    // fontSize: 20,
    // justifyContent: "center",
    // width: '100%',
  },
  categoryInput: {
    // fontFamily: 'CharterBoldItalic',
    // fontFamily: defaultStyles.text.fontFamily,
    // fontWeight: "bold",
    // fontWeight: '600',
    // alignItems: "center",
    color: defaultStyles.colors.darkGrey,
    flex: 1,
    // fontSize: 20,
    // justifyContent: "center",
    // width: '100%',
  },
}) // style sheet for AppPicker

export default AppPicker
// default export of AppPicker