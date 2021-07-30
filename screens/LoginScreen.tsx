//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  LoginScreen
//  LoginScreen // //custom components
//  LoginScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
} from 'react-native'
import * as Yup from "yup";
// import jwtDecode from 'jwt-decode';
import Screen from "../components/Screen";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  AppSubmitButton
} from "../components/forms";
import authApi from '../api/auth'
// import AuthContext from '../auth/context';
// import authStorage from '../auth/storage';
import useAuth from '../auth/useAuth';
// const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
const regularExpression = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required()
    .email()
    .label("Email"),
  password: Yup
    .string()
    .required()
    // .matches() for regular expression
    // .matches(
    //   regularExpression,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    // )
    .min(4)
    // .max(4)
    .label("Password"),
});

interface LoginScreenProps {
  // alpha?: string;
} // typeScript

const LoginScreen: React.FC<LoginScreenProps> = ({
  // alpha,
}) => {
  // 
  const auth = useAuth();
  // sets visibility of the error message per login status
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: any) => {
    const result = await authApi.login(email, password)
    // if result not ok return immidiately so the rest is not executed
    if (!result.ok) return setLoginFailed(true);
    // otherwise set loginFailed to false
    setLoginFailed(false);
    // const user = jwtDecode(result.data);
    // AuthContext.setUser(user);
    // console.log(user);            //  user object
    // console.log(result.data);     //  auth token
    // authStorage.storeToken(result.data);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
        source={require("../assets/images/icon.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        // onSubmit={(values) => console.log(values)}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
        />
        <AppFormField
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          textContentType="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
} // LoginScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
}) // style sheet for LoginScreen

export default LoginScreen
// default export of LoginScreen