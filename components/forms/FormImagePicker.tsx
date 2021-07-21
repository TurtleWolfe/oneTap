//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  FormImagePicker
//  FormImagePicker // //custom components
//  FormImagePicker
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import { useFormikContext } from 'formik';

import AppErrorMessage from './ErrorMessage'
import AppImageInputList from '../ImageInputList'

interface FormImagePickerProps {
  name?: string;
} // typeScript

const FormImagePicker: React.FC<FormImagePickerProps> = ({
  name,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name]

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri: any) => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri !== uri)
    )
  }

  return (
    <>
      <AppImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  )
} // FormImagePicker component

export default FormImagePicker
// default export of FormImagePicker