//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  UploadScreen
//  UploadScreen // //custom components
//  UploadScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  Modal,
  StyleSheet,
  View,
} from 'react-native'
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import defaultStyles from '../config/styles';

interface UploadScreenProps {
  onDone?: () => void;
  progress?: number;
  visible?: boolean;
} // typeScript

const UploadScreen: React.FC<UploadScreenProps> = ({
  onDone,
  progress = 0,
  visible = false,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          // if progress is less than 1, show the progress bar
          <Progress.Bar
            color={defaultStyles.colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          // else, show the lottie animation
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  )
} // UploadScreen component

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
}) // style sheet for UploadScreen

export default UploadScreen
// default export of UploadScreen