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
import jwtDecode from 'jwt-decode';
import Screen from "../components/AppScreen";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  AppSubmitButton
} from "../components/forms";
import authApi from '../api/auth'
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
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
  // const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: any) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    // const user = jwtDecode(result.data);
    // authContext.setUser(user);
    // // console.log(user); //auth token
    // authStorage.storeToken(result.data);
    // // // // // // // // // // // // //
    // auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
        source={require("../assets/images/icon.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: any) => console.log(values)}
        // onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
        />
        <AppFormField // email
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          // ios autofill from keyChain 
          textContentType="emailAddress"
        />
        <AppFormField // password
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          // ios autofill from keyChain 
          textContentType="password"
        />
        <AppSubmitButton
          title="Login"
        />
      </AppForm>
    </Screen>
  )
} // LoginScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
}) // style sheet for LoginScreen

export default LoginScreen
// default export of LoginScreen