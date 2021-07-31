import React from "react";

export const navigationRef = React.createRef();

const navigate = (name?: any, params?: any) =>
  navigationRef.current?.navigate(name, params);

export default {
  navigate,
};
