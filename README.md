# [ReactNativeFieldGuide](https://docs.expo.io/guides/userinterface/ 'User Interface Component Libraries')

[React Native Elements](https://react-native-training.github.io/react-native-elements/ 'updated: 02-01-2021, users 77.9k') & [docs](https://react-native-training.github.io/react-native-elements/docs/getting_started.html 'docs') 77.9k

[Native Base](https://nativebase.io/ 'updated: 01-27-2021, users 52.3k') & [docs](https://docs.nativebase.io/ 'docs') 52.3k

[React Native Paper](https://github.com/callstack/react-native-paper 'updated: 01-22-2021, users 31.2k') & [docs](https://callstack.github.io/react-native-paper/index.html 'docs') 31.2k

[React Native Material UI](https://github.com/xotahal/react-native-material-ui 'updated: 04-19-2019, users 2.5k') & [docs](https://github.com/xotahal/react-native-material-ui/blob/master/docs/GettingStarted.md 'docs') 2.5k

[React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/#/home 'updated: 09-08-2020, users 2k') & [docs](https://akveo.github.io/react-native-ui-kitten/#/docs/quick-start/getting-started 'docs') 2k

[React Native UI Lib](https://github.com/wix/react-native-ui-lib 'updated: 02-05-2021, users 997') & [docs](https://wix.github.io/react-native-ui-lib/ 'docs') 997

[React Native iOS Kit](https://github.com/callstack/react-native-ios-kit 'updated: 011-05-2020, users 58') & [docs](https://callstack.github.io/react-native-ios-kit/docs/installation.html 'docs') 58

## [Configuring the header bar](https://reactnavigation.org/docs/headers/ 'React Navigation')

[component as prop](https://linguinecode.com/post/pass-react-component-as-prop-with-typescript 'How to pass a React component as prop with TypeScript')

Components List:
![list of components](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'TabTwo Outline')

## [user Snippets:](https://codewithmosh.com/courses/887220/ 'Mosh HameDani')

## [tabs template & load Fonts async:](https://turtlewolfe.com/ 'TurtleWolfe.com')

## [blank file ArchitecSure:](https://turtlewolfe.com/ 'TurtleWolfe.com')

```bash
# assets
# components
# constants
# screens

README.md
```

Merge with Expo:
![merge with Expo file structure](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Expo's default TypeScript Tabs")

## [merge rn Elements:](https://reactnativeelements.com/docs/text 'merge react native elements with custom components')

## [app Dice:](https://turtlewolfe.com/ 'TurtleWolfe.com')

### [StoryBook ReactNative 6.2:](https://github.com/storybookjs/react-native 'React Native StoryBook 6.2')

```bash
# ssh-keygen -t rsa -b 4096 -C "dev.TurtleWolfe@gmail.com"
# xclip -sel clip < ~/.ssh/id_rsa.pub
# eval "$(ssh-agent -s)"
# ssh-add ~/.ssh/id_rsa

# rm -rf oneBook
expo init oneBook --npm
cd oneBook
cp ~/Desktop/epsilon/README ~/Desktop/oneBook
git push --set-upstream git@github.com:TurtleWolfe/oneBook.git main
git status
expo start
npx -p @storybook/cli sb init --type react_native
npm run storybook
expo start
# expo install @react-native-async-storage/async-storage
expo install @react-navigation/drawer
# expo install @react-native-community/async-storage
# expo install @react-native-async-storage/async-storage

#####

expo init --template expo-template-tabs@sdk-40 --npm

 4  app.json
    hooks/useCachedResources.ts
 3  navigation/BottomTabNavigator.tsx
    navigation/index.tsx
   #  ../ components/EditScreenInfo.tsx -> app/components/EditScreenInfo.tsx
 1  ../ components/Themed.tsx -> app/components/Themed.tsx

expo install react-native-elements
# (may not be necessary)
# expo install expo-font
# expo install react-native-elements expo-font
# expo install expo-app-loading

# npm install @react-native-community/hooks

expo init oneTap --npm

expo install @react-native-community/datetimepicker # "@react-native-community/datetimepicker": "~3.2.0",
# npm install @react-native-community/datetimepicker --legacy-peer-deps
# expo install anonymous-files                        # "  "
expo install apisauce                               # "apisauce": "^2.1.1",
expo install expo-image-picker                      # "expo-image-picker": "~10.1.4",
expo install expo-location                          # "expo-location": "~12.0.4",
# expo install expo-permissions                 ??  # expo install expo-permissions
# expo install expo-sharing                           # "  "
expo install formik                                 # "formik": "^2.2.9",
expo install lottie-react-native                    # "lottie-react-native": "3.5.0",
expo install react-native-elements                  # "  "
expo install react-native-progress                  # "react-native-progress": "^4.1.2",
expo install yup                                    # "yup": "^0.32.9"
expo install @react-native-community/netinfo
expo install @react-native-async-storage/async-storage
expo install moment
expo install react-native-fast-image
# expo install react-native-expo-image-cache
# expo install expo-blur
expo install jwt-decode
expo install expo-secure-store
expo install expo-app-loading
expo install expo-notifications
```

```typescript
//  App components
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppPickerItem from '../components/AppPickerItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

//  App form Components
import AppErrorMessage from '../components/forms/AppErrorMessage';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppSubmitButton from '../components/forms/AppSubmitButton';

//  App lists Components
import AppListItem from '../components/lists/AppListItem';
import AppListItemDeleteAction from '../components/lists/AppListItemDeleteAction';
import AppListItemSeparator from '../components/lists/AppListItemSeparator';

//  App component Screens
import AccountScreen from './componentScreens/AccountScreen';
import ListingDetailsScreen from './componentScreens/ListingDetailsScreen';
import ListingEditScreen from './componentScreens/ListingEditScreen';
import ListingsScreen from './componentScreens/ListingsScreen';
import LoginScreen from './componentScreens/LoginScreen';
import MessagesScreen from './componentScreens/MessagesScreen';
import RegisterScreen from './componentScreens/RegisterScreen';
import ViewImgageScreen from './componentScreens/ViewImageScreen';
import WelcomeScreen from './componentScreens/WelcomeScreen';

import defaultStyles from '../constants/styles';
// upper lower break divide \\
<Text style={styles.title}>Components</Text>
<AppButton />
<AppCard />
<AppCategoryPickerItem />
<AppIcon />
<AppPicker />
<AppPickerItem />
<AppScreen />
<AppText />
<AppTextInput />

<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
<Text style={styles.title}>form Components</Text>
<AppErrorMessage />
<AppForm />
<AppFormField />
<AppFormPicker />
<AppSubmitButton />

<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
<Text style={styles.title}>list Components</Text>
<AppListItem />
<AppListItemDeleteAction />
<AppListItemSeparator />

<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
<Text style={styles.title}>component Screens</Text>
<AccountScreen />
<ListingDetailsScreen />
<ListingEditScreen />
<ListingsScreen />
<LoginScreen />
<MessagesScreen />
<RegisterScreen />
<ViewImgageScreen />
<WelcomeScreen />
```

## [The Ultimate React Native Series:](https://codewithmosh.com/courses/887220/ 'Mosh HameDani')

[Mastering React (13-hour Course):](https://codewithmosh.com/p/mastering-react 'Mastering React (13-hour Course):')  
[React Tutorial on YouTube (2-hour Course):](https://youtu.be/Ke90Tje7VS0 'React Tutorial on YouTube (2-hour Course): ')  
[http://forum.codewithmosh.com/](http://forum.codewithmosh.com/ '3- If you still cannot proceed, try our forums. Im not personally able to answer the questions due to the large number of students and messages. Post your questions on our forums and participate in discussions to help each other. Answering questions helps you better learn and understand the materials.')  
[https://docs.expo.io/workflow/ios-simulator/](https://docs.expo.io/workflow/ios-simulator/ 'Heres the link to the official instructions for setting up an iOS simulator. It also includes troubleshooting tips. If you encounter any errors, be sure to check this page. ')  
`CNTRL D` & `CMND D`
exp//192:68.0.14:19000  
[https://docs.expo.io/workflow/android-studio-emulator/](https://docs.expo.io/workflow/android-studio-emulator/ 'Heres the link to the official instructions for setting up an Android Virtual Device. If you encounter any issues, be sure to check this page for updated instructions: ')  
`CNTRL M` (windows) or `CMND M` (mac)

### [Fundamental Concepts #2 Text](https://codewithmosh.com/courses/887220/lectures/16617397 'const handlePress = () => console.log()')

onPress={handlePress}

<!-- [Fundamental Concepts #6 Button](https://codewithmosh.com/courses/887220/lectures/16617561 'rnsf Functional Component') -->

[Fundamental Concepts #8 StyleSheet](https://codewithmosh.com/courses/887220/lectures/16617395 '3:21 merge styles')  
[Fundamental Concepts #9 PlatForm](https://codewithmosh.com/courses/887220/lectures/16617395 '2:00 Platform.OS === "android" ? StatusBar.currentHeight : 0,')

03  
~~Welcom Screen~~  
~~Image Screen~~

### [Layouts #2 Dimensions](https://codewithmosh.com/courses/887220/lectures/16617488 'Dimensions.get("screen")')

[Layouts #3 Detecting Orentation Changes](https://www.google.com 'useDimensions & useDeviceOrentation')  
`CNTRL or CMND` (left & right arrows)  
[react-native-community/hooks](https://github.com/react-native-community/hooks#usecameraroll '2:00 hooks, useDimensions')  
`npm install @react-native-community/hooks`  
[Layouts #4 FlexBox](https://www.google.com 'Alt Shift Down Arrow to copy code 2:00')  
[Layouts #5 FlexBox -Direction](https://www.google.com '1:23 Control Space')  
[Layouts #6 Flexbox-justifyContent](https://codewithmosh.com/courses/887220/lectures/16617484 '1:43 justifyContent: "space-evenly"')  
[Layouts #7 Flexbox-alignContent](https://codewithmosh.com/courses/887220/lectures/16617480 '2:33 alignContent: "center"')

04

### [Styles #5 Styling Texts](https://codewithmosh.com/courses/887220/lectures/16617561 'expo install expo-font (OTF)')

[https://github.com/react-native-training/react-native-fonts](https://github.com/react-native-training/react-native-fonts 'List of system fonts on iOS and Android: out of the box')  
[Styles #6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'rsf react stateless function  imrn  2:00 {children} 2:35 rnss - rn-stylesheet') appText  
[https://icons.expo.fyi/](https://icons.expo.fyi/ 'expo.github.io/vector-icons/')  
Button 07?  
[Styles #8 Platform-Specific](https://codewithmosh.com/courses/887220/lectures/16617555 '...Platform (spread  2:00)')  
[Styles #12 Improving the Welcome Screen](https://codewithmosh.com/courses/887220/lectures/16617564 '4:00 style={[styles.button, { backgroundColor: colors[color] }]}') \_ WelcomeScreen  
[Styles #13 Card Component](https://codewithmosh.com/courses/887220/lectures/16617550 'rnsf 4:00 {destructuring} 6:00 {require} 8:00 style={[styles.text, style]} 9:30 {overflow}') appCard [style array]  
[Styles #14 Listing Details](https://codewithmosh.com/courses/887220/lectures/16617550 'clever notes here about the listing Details screen') \_ Listings Details Screen  
[Styles #15 ListItem Component](https://codewithmosh.com/courses/887220/lectures/16617550 '2:55 ') appListItem  
[Styles #16 Improving the Image Screen](https://codewithmosh.com/courses/887220/lectures/16617564 'clever notes here about the Image screen') \_ ImageScreen

05

### [Lists #2 FlatList](https://codewithmosh.com/courses/887220/lectures/16687902 'notes about flat list') \_appMessages Screen

[Lists #3 Extracting the Screen Component](https://codewithmosh.com/courses/887220/lectures/16687902 'paddingTop: Constants.statusBarHeight,')\_appScreen  
[Lists #4 Seperator](https://codewithmosh.com/courses/887220/lectures/16687902 'notes about flat list') appListItemSeperator  
[Lists #5 Handling Selections](https://codewithmosh.com/courses/887220/lectures/16687899 '2:05 onPress={onPress}')  
[Lists #6 Handling Swipes](https://codewithmosh.com/courses/887220/lectures/16687906 '2:25 Swipeable renderRightActions={renderRightActions} 3:38 returns a view')  
[Lists #7 Deleting an Item](https://codewithmosh.com/courses/887220/lectures/16687900 '0:45 renderRightActions={() => ( </ListItemDeleteAction onPress={() => handleDelete(item)} /> )} 3:30 { useState }') appListItemDeleteAction  
[Lists #8 Implementing Pull to Refresh](https://codewithmosh.com/courses/887220/lectures/16687895 '0:45 const [refreshing, setRefreshing] = useState(false);')  
[Lists #11 Building the Icon Component](https://codewithmosh.com/courses/887220/lectures/16687953 'fancy notes on building the icon component') Icon  
[Lists #12 Extending the ListItem Component](https://codewithmosh.com/courses/887220/lectures/16687905 '1:15 Conditional rendering {image && </Image style={styles.image} source={image} />}')  
[Lists #13 Building the Account Screen](https://codewithmosh.com/courses/887220/lectures/16687953 '7:15 merging prop styles, style={[styles.screen, style] 8:00 breaks rule for re-usablity 10:30 prop alias') \_Account Screen  
[Lists #14 Building the Listings Screen](https://codewithmosh.com/courses/887220/lectures/16687954 '3:15 subTitle={"$" + item.price} 5:00  </View style={style}>{children}</>') \_Listings Screen

06

<!-- Icon   -->

### [Input Components # 3 Building a Pretty TextInput](https://codewithmosh.com/courses/887220/lectures/16762423 '3:15 conditional icon, 5:00 destructuring ({ icon, ...otherProps })') TextInput

[Input Components #4 Extracting the Default Styles](https://codewithmosh.com/courses/887220/lectures/16762425 '2:00 style={defaultStyles.text} 3:00 defaultStyles.colors.lightGrey,')  
[Input Components #6 Picker](https://codewithmosh.com/courses/887220/lectures/16762419 '1:30 expo install @react-native-community/datetimepicker') Picker  
expo install @react-native-community/datetimepicker  
[Input Components #7 PickerItem](https://codewithmosh.com/courses/887220/lectures/16762422 'custom notes on picker Item') PickerItem  
[Input Components #8 Modal](https://codewithmosh.com/courses/887220/lectures/16762428 '1:00 Modal')

07  
~~app Form~~  
~~app Form Field~~  
app Form Picker  
~~app Error Message~~  
~~app Submit Button~~

\_~~ListingEditScreen~~  
\_~~LoginScreen~~  
\_~~LoginScreen~~  
\_RegisterScreen

### [Forms #2 Building the Login Form](https://codewithmosh.com/courses/887220/lectures/16762473 '6:30 onChangeText={text => setEmail(text)}') \_LoginScreen

[Forms #3 Building Better Forms with Formik](https://codewithmosh.com/courses/887220/lectures/16762478 'expo install formik')  
[Forms #4 Form Validation with Yup](https://codewithmosh.com/courses/887220/lectures/16762471 'expo install yup 2:30 Yup.matches()')  
[Forms #5 Building the ErrorMessage Component](https://codewithmosh.com/courses/887220/lectures/16762472 'custom notes about the ErrorMessage Component') app Error Message  
[Forms #7 Building the Field Component](https://codewithmosh.com/courses/887220/lectures/16762484 '4:30 spread operator') app Form Field  
[Forms #8 Building the SubmitButton Component](https://codewithmosh.com/courses/887220/lectures/16762476 'custom notes about the SubmitButton Component') app Submit Button  
[Forms #9 Building the Form Component](https://codewithmosh.com/courses/887220/lectures/16762474 '1:30 {() => <>{children}</>}') app Form  
[Forms #10 Organizing Components](https://codewithmosh.com/courses/887220/lectures/16762480 'moving to a forms folder')  
[Forms #12 Building the Listing Edit Screen](https://codewithmosh.com/courses/887220/lectures/16762479 'custom notes about the Building the Listing Edit Screen') \_ListingEditScreen  
[article about Formik & Yup](https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/ 'formik & yup')

08

### [ImproveMents #3 Handling Long Text](https://codewithmosh.com/courses/887220/lectures/16762519 '1:00 spread additonal props')

[ImproveMents #8 Building the CategoryPickerItem Component](https://codewithmosh.com/courses/887220/lectures/16762523 '4:35 FlatList numColumns={3} 6:00 numberOfColumns')

```bash
expo init oneTap --npm

expo install @react-native-community/datetimepicker
expo install apisauce
expo install expo-image-picker
expo install expo-location
expo install formik
expo install lottie-react-native
expo install react-native-elements
expo install react-native-progress
expo install yup

expo install @react-native-async-storage/async-storage
expo install @react-native-community/netinfo
expo install expo-app-loading
expo install expo-notifications
expo install expo-secure-store
expo install jwt-decode
expo install moment
expo install react-native-fast-image
bump
```

## [Part 2:](https://codewithmosh.com/courses/955852/ 'Mosh HameDani')

### [Native Features #6 Encapsulating Styles](https://codewithmosh.com/courses/955852/lectures/17711043 '2:00 expo install expo-image-picker')

### [Navigation (50m) # 12- Building AuthNavigator](https://codewithmosh.com/courses/955852/lectures/17711333 'custom notes Auth Navigation') \_ Auth Navigator

[Navigation (50m) 14- Building AppNavigator](https://codewithmosh.com/courses/887220/lectures/16617561 'custom notes App Navigator') \_ App Navigator  
[Navigation (50m) 15- Building FeedNavigator](https://codewithmosh.com/courses/887220/lectures/16617561 'custom notes') \_ Feed Navigator  
[Navigation (50m) 16- Building AccountNavigator](https://codewithmosh.com/courses/887220/lectures/16617561 'custom notes') \_ Account Navigator  
[Networking (1h) 6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'custom notes')  
[Networking (1h) 6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'custom notes')  
[Networking (1h) 6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 'custom notes')  
[Networking (1h) 6 Encapsulating Styles](https://codewithmosh.com/courses/887220/lectures/16617561 '{"_displayInForeground": true }')

```json
{ "_displayInForeground": true }
```

[Uploading Apps to the Apple App Store and Google Play](https://docs.expo.io/distribution/uploading-apps/ 'Uploading Apps to the Apple App Store and Google Play')  
[Overview](https://docs.expo.io/distribution/introduction/ 'Overview')  
[https://fastlane.tools/](https://fastlane.tools/ 'App automation done right')  
[blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool](https://blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool-9b2f5ad0a2cd 'Automating Standalone Expo App Builds and Deployments with Fastlane and Expo CLI')  
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")  
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
