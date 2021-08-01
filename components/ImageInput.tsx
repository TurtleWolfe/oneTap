//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppImageInput
//  AppImageInput // //custom components
//  AppImageInput
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React, {
  useEffect,
  useState
} from 'react'

import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import defaultStyles from "../config/styles";
import logger from '../utility/logger';

interface AppImageInputProps {
  // imageUri?: any;
  imageUri?: string;
  onChangeImage?: any;
  // onChangeImage?: (imageUri: string) => void;
} // typeScript

const AppImageInput: React.FC<AppImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []); // useEffect to request permissions

  const handlePress = () => {
    if (!imageUri) pickImage()
    else Alert.alert(
      'Delete',
      'Are you sure you want to delete this Image?',
      [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' }
      ])  // third argument is an array of buttons
  } // handlePress to delete image

  const pickImage = async () => { // pickImage (selectImage? from camera roll)
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        // allowsMultipleSelection: true,        
        aspect: [4, 3],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      // console.log(result);

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      logger.log(error);

    }

  };  // pickImage // pickImage (selectImage? from camera roll)

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View style={styles.container}>

        {!imageUri && <MaterialCommunityIcons
          color={defaultStyles.colors.darkGrey}
          name='camera'
          size={40}
        />}

        {imageUri && <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />}

      </View>
    </TouchableWithoutFeedback>

  )
} // App Image Input component

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
}) // style sheet for AppImageInput

export default AppImageInput
// default export of AppImageInput