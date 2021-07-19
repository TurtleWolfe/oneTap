
//  TurtleWolfe.com // //custom components
//  AppForm
//  AppForm // //custom components
//  AppForm
//  TurtleWolfe.com // //custom components

import React from 'react'
import { Formik } from "formik";


interface AppFormProps {
  // initialValues?: { email: string; password: string;};
  initialValues?: any;
  // onSubmit?:() => void;
  onSubmit?: any;
  // validationSchema?: any;
  validationSchema?: {};//Yup.object()
  // validationSchema?: {
  //   email: {
  //     isEmail: {
  //       required: true,
  //       message: 'Email is required'
  //     }
  //   },
  //   password: {
  //     minLength: {
  //       required: true,
  //       min: 8,
  //       message: 'Password must be at least 8 characters long'
  //     }
  //   }
  // };
  // children?: React.ReactNode;
  children?: {};
  // children?: JSX.Element;
} // typeScript

const AppForm: React.FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
} // AppForm component

export default AppForm
// default export of AppForm