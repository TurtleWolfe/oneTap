//TurtleWolfe.com // //custom components
//RegisterScreen
//RegisterScreen // //custom components
//RegisterScreen
//TurtleWolfe.com // //custom components
import React, { useState } from 'react'
import {
  StyleSheet,
} from 'react-native'
import * as Yup from "yup";

import Screen from "../../components/AppScreen";
import usersApi from "../../api/users";
import authApi from "../../api/auth";
import useAuth from '../../auth/useAuth';


import {
  AppForm as Form,
  AppFormField as FormField,
  AppSubmitButton,
} from "../../components/forms";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/AppActivityIndicator";
import AppActivityIndicator from '../../components/AppActivityIndicator';
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
interface RegisterScreenProps {
} // typeScript

const RegisterScreen: React.FC<RegisterScreenProps> = ({
}) => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo: any) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator
        visible={registerApi.loading || loginApi.loading}
      // visible={true}
      />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <AppSubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  )
} // RegisterScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  // textContainer: {
  //   backgroundColor: 'yellow',
  // },
}) // style sheet for RegisterScreen

export default RegisterScreen
// default export of RegisterScreen