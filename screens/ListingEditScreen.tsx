//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  ListingEditScreen
//  ListingEditScreen // //custom components
//  ListingEditScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React, { useState } from 'react'
import {
  StyleSheet,
} from 'react-native'
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  AppSubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
// import AppPickerItem from "../components/AppPickerItem";
import AppCategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings'
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  title: Yup
    .string()
    .required()
    .min(1)
    .label("Title"),
  price: Yup
    .number()
    .required()
    .min(1)
    .max(10000)
    .label("Price"),
  description: Yup
    .string()
    .label("Description"),
  category: Yup
    .object()
    .required()
    .nullable()
    .label("Category"),
  images: Yup
    .array()
    .min(1, 'Please select at least one image.')
});

const categories = [
  // {
  //   backgroundColor: "#a55eea",
  //   icon: "book-open-variant",
  //   label: "Books",
  //   value: 8,
  // },
  // {
  //   backgroundColor: "#fed330",
  //   iconColor: defaultStyles.colors.darkGrey,
  //   icon: "camera",
  //   label: "Cameras",
  //   value: 1,
  // },
  {
    backgroundColor: "#fd9644",
    iconColor: defaultStyles.colors.darkGrey,
    icon: "alpha-f-circle",
    label: "Foundation",
    value: 2,
  },
  // {
  //   backgroundColor: "#2bcbba",
  //   icon: "shoe-heel",
  //   label: "Clothing",
  //   value: 5,
  // },
  {
    backgroundColor: "#fc5c65",
    iconColor: defaultStyles.colors.darkGrey,
    icon: "lipstick",
    label: "Lipstick",
    value: 3,
  },
  // {
  //   backgroundColor: "#26de81",
  //   icon: "cards",
  //   label: "Games",
  //   value: 4,
  // },
  // {
  //   backgroundColor: "#778ca3",
  //   icon: "application",
  //   label: "Misc. & Other",
  //   value: 9,
  // },
  // {
  //   backgroundColor: "#4b7bec",
  //   icon: "headphones",
  //   label: "Movies & Music",
  //   value: 7,
  // },
  // {
  //   backgroundColor: "#45aaf2",
  //   icon: "basketball",
  //   label: "Sports",
  //   value: 6,
  // },
];  // categories (will move to server)

interface ListingEditScreenProps {
  // location?: {coords?:{}}
} // typeScript

const ListingEditScreen: React.FC<ListingEditScreenProps> = ({

}) => {
  const location = useLocation();
  const [uplaodVisisble, setUplaodVisisble] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (
    listing: {
      title: string | Blob;
      price: string | Blob;
      category: { value: string | Blob; };
      description: string | Blob;
      images: any[];
      location: any;
    },
    { resetForm }: any) => {
    setProgress(0);
    setUplaodVisisble(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      // (progress) => console.log(progress)
      (progress) => setProgress(progress)
    );
    // setUplaodVisisble(false);

    if (!result.ok) {
      setUplaodVisisble(false);
      return alert('Could not save the listing');
    }

    // alert('Success');
    resetForm();
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUplaodVisisble(false)}
        progress={progress}
        visible={uplaodVisisble}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        // onSubmit={(values: any) => console.log(location)}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          name='images'
        />
        <FormField
          name="title"
          maxLength={255}
          placeholder="Title"
        />
        <FormField
          name="price"
          keyboardType="numeric"
          maxLength={8} // 10 000.99
          // width={120}
          width='45%'
          placeholder="Price"
        />
        <Picker
          items={categories}
          numberOfColumns={3}
          name="category"
          // PickerItemComponent={AppPickerItem}
          PickerItemComponent={AppCategoryPickerItem}
          width='45%'
          placeholder="Category"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppSubmitButton title="Post" />
      </Form>
    </Screen>
  )
} // ListingEditScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  // textContainer: {
  //   backgroundColor: 'yellow',
  // },
}) // style sheet for ListingEditScreen

export default ListingEditScreen
// default export of ListingEditScreen