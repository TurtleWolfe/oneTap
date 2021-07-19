import * as React from 'react';
import { StyleSheet } from 'react-native';
import ListingEditScreen from '../screens/ListingEditScreen';
import AppPicker from '../components/AppPicker';
import AppPickerItem from '../components/AppPickerItem';
import AppTextInput from '../components/AppTextInput';

import EditScreenInfo from '../components/EditScreenInfo';
import {
  // Text,
  View
} from '../components/Themed';

const categories = [
  { label: 'LipStick', value: 1 },
  { label: 'Foundation', value: 2 },
  // { label: 'Cameras', value: 3 },
]

export default function TabThreeScreen() {
  const [category, setCategory] = React.useState(categories[0]);
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
      {/* <AppPicker
        items={categories}
        onSelectItem={(item: React.SetStateAction<undefined>) => setCategory(item)}
        selectedItem={category}
        placeholder='Category'
        icon='apps'
      />
      <AppPickerItem />

      <AppTextInput
        icon='email'
        placeholder='User Name'
      /> */}
      <ListingEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
