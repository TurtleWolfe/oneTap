//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppFormField
//  AppFormField // //custom components
//  AppFormField
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./AppErrorMessage";

interface AppFormFieldProps {
  name?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  icon?: string;
  keyboardType?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: string;
  value?: string;
  width?: string | number;
  otherProps?: {};
} // typeScript

const AppFormField: React.FC<AppFormFieldProps> = ({
  name,
  width = '100%',
  ...otherProps
}) => {

  // useFormikContext
  const {
    setFieldTouched,
    // handleChange,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
} // AppFormField component

export default AppFormField
// default export of AppFormField