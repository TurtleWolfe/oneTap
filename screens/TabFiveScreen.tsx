import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {
  Text,
  View
} from '../components/Themed';

//  App components
import AppButton from '../components/Button';
import AppCard from '../components/Card';
// import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
// import AppIcon from '../components/AppIcon';
import AppIcon from '../components/Icon';
// import AppImageInput from '../components/AppImageInput';
// import AppImageInputList from '../components/AppImageInputList';
// import AppPicker from '../components/AppPicker';
// import AppPickerItem from '../components/AppPickerItem';
// import AppScreen from '../components/AppScreen';
import AppText from '../components/Text';
// import AppTextInput from '../components/AppTextInput';
// import AppUseLocation from '../components/AppUseLocation';

//  App form Components
// import AppErrorMessage from '../components/forms/AppErrorMessage';
// import AppForm from '../components/forms/AppForm';
// import AppFormField from '../components/forms/AppFormField';
// import AppFormPicker from '../components/forms/AppFormPicker';
// import FormImagePicker from '../components/forms/FormImagePicker';
// import AppSubmitButton from '../components/forms/AppSubmitButton';

//  App lists Components
import AppListItem from '../components/lists/AppListItem';
// import AppListItemDeleteAction from '../components/lists/AppListItemDeleteAction';
import AppListItemSeparator from '../components/lists/AppListItemSeparator';

//  App component Screens
// import AccountScreen from './AccountScreen';
import ListingDetailsScreen from './ListingDetailsScreen';
// import ListingEditScreen from './ListingEditScreen';
// import ListingsScreen from './ListingsScreen';
// import LoginScreen from './LoginScreen';
import MessagesScreen from './MessagesScreen';
// import RegisterScreen from './RegisterScreen';
// import ViewImgageScreen from './ViewImageScreen';
import ViewImgageScreen from './ViewImageScreen';
// import WelcomeScreen from './WelcomeScreen';

import Palette from '../config/palette';
import defaultStyles from '../config/styles';
import * as ImagePicker from "expo-image-picker";
import useLocation from '../hooks/useLocation';

// const categories = [
//   { label: 'Furniture', value: 1 },
//   { label: 'Clothing', value: 2 },
//   { label: 'Cameras', value: 3 },
// ]

export default function TabFiveScreen() {
  // const [category, setCategory] = useState(categories[0]);
  // const [imageUris, setImageUris] = useState([]);
  // const [image, setImage] = useState(null);

  // const handleAdd = (uri: any) => {
  //   setImageUris([...imageUris, uri])
  // }

  // const handleRemove = (uri: any) => {
  //   setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  // }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Five</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabFiveScreen.tsx" /> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <AppListItemSeparator /> */}
      {/* <Text style={styles.title}>Components</Text> */}
      {/* <AppButton /> */}
      {/* <AppCard /> */}

      {/* <AppCard
        title='TabTwo'
        subTitle='TabTwo'
        image={require('../assets/images/jacket.jpg')}
      /> */}

      {/* <AppCategoryPickerItem /> */}

      {/* <AppIcon /> */}

      {/* <AppIcon
        name='email'
        size={50}
        backgroundColor='red'
        iconColor='white'
      /> */}

      {/* <AppPicker
        selectedItem={category}
        onSelectItem={(item: React.SetStateAction<undefined>) => setCategory(item)}
        icon='email'
        items={categories}
        placeholder='Category'
      /> */}

      {/* <AppPickerItem /> */}
      {/* <AppScreen /> */}
      {/* <AppText /> */}

      {/* <AppTextInput /> */}

      {/* <AppTextInput
        icon='email'
        placeholder='User Name'
      /> */}
      {/* <AppUseLocation /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      {/* <AppListItemSeparator /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>form Components</Text> */}

      {/* <AppErrorMessage /> */}
      {/* <AppForm /> */}
      {/* <AppFormField /> */}
      {/* <AppFormPicker /> */}

      {/* <AppButton title="Select Image" onPress={pickImage} /> */}
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}

      {/* <AppImageInput
        imageUri={image}
        onChangeImage={(uri: React.SetStateAction<null>) => setImage(uri)}
      /> */}

      {/* <AppImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}

      {/* <FormImagePicker
        name={'image'}
      /> */}
      {/* <AppSubmitButton /> */}

      {/* <AppListItemSeparator /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>list Components</Text> */}

      {/* <AppListItem /> */}

      {/* <AppListItem
        IconComponent={
          // <AppIcon />
          <AppIcon
            name='email'
            size={50}
            backgroundColor='dodgerblue'
            iconColor='yellow'
          />
        }
        image={require("../assets/images/favicon.png")}
        appListImage={
          styles.applistImage
        }
        // title="Tab Two"
        subTitle="tab 2 demo tab 2 demo"
        // subTitle="tab 2 demo"
        appListItem={
          styles.appListItem
        }
      /> */}

      {/* <AppListItemDeleteAction /> */}
      {/* <AppListItemSeparator /> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <AppListItemSeparator /> */}
      {/* <Text style={styles.title}>component Screens</Text> */}
      {/* <AccountScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ListingEditScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      <MessagesScreen />
      {/* <RegisterScreen /> */}
      {/* <ViewImgageScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100%",
  },
  // appListItem: {
  //   // paddingLeft: 0,
  //   // width: 100,
  //   alignItems: 'center',
  //   backgroundColor: Palette.danger,
  //   borderRadius: 25,
  //   height: 100,
  //   justifyContent: 'center',
  //   padding: 7,
  // },
  // applistImage: {
  //   backgroundColor: Palette.highlighter,
  //   borderRadius: 25,
  //   height: 50,
  //   marginLeft: 10,
  //   // margin: 20,
  //   width: 50,
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
