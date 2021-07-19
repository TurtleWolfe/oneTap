//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppErrorMessage
//  AppErrorMessage // //custom components
//  AppErrorMessage
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  StyleSheet,
} from 'react-native'

import AppText from "../AppText";
import defaultStyles from "../../config/styles";

interface AppErrorMessageProps {
  error?: string;
  visible?: boolean;
} // typeScript

const AppErrorMessage: React.FC<AppErrorMessageProps> = ({
  error,
  visible,
}) => {
  if (!visible || !error) return null;

  return (
    <AppText
      style={styles.error}>
      {error}
    </AppText>
  )
} // AppErrorMessage component

const styles = StyleSheet.create({
  error: {
    // color: "yellow"
    color: defaultStyles.colors.highlighter
  },
}) // style sheet for AppErrorMessage

export default AppErrorMessage
// default export of AppErrorMessage