//TurtleWolfe.com // //custom components
//AppImageInputList
//AppImageInputList // //custom components
//AppImageInputList
//TurtleWolfe.com // //custom components
import React, { useRef } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AppImageInput from './ImageInput'

interface AppImageInputListProps {
  // imageUris?: [];
  imageUris?: any;
  onRemoveImage?: any;
  onAddImage?: any;
} // typeScript

const AppImageInputList: React.FC<AppImageInputListProps> = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) => {
  const scrollView = useRef()

  return (
    <View style={styles.containerToo}>
      <ScrollView
        // style={{ backgroundColor: 'yellow' }}
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View
              key={uri}
              style={styles.image}
            >
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>

          ))}
          <AppImageInput
            onChangeImage={(uri: any) => onAddImage(uri)}
          />
        </View>
      </ScrollView>
    </View>
  )
} // AppImageInputList component

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerToo: {
    width: 400,
    height: 100,
    // backgroundColor: 'yellow',
  },
  image: {
    marginRight: 10,
    // backgroundColor: 'yellow',
  },
}) // style sheet for AppImageInputList

export default AppImageInputList
// default export of AppImageInputList