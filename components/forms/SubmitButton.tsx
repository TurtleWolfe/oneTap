//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppSubmitButton
//  AppSubmitButton // //custom components
//  AppSubmitButton
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import { useFormikContext } from "formik";

import AppButton from "../Button";

interface AppSubmitButtonProps {
  title?: string;
} // typeScript

const AppSubmitButton: React.FC<AppSubmitButtonProps> = ({
  title,
}) => {
  const { handleSubmit } = useFormikContext()

  return <AppButton
    title={title}
    onPress={handleSubmit}
  />
} // AppSubmitButton component

export default AppSubmitButton
// default export of AppSubmitButton