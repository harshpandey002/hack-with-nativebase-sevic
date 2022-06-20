import React from "react";
import { Icon, Center } from "native-base";
import { Path, G } from "react-native-svg";

export default function MenuIcon() {
  return (
    <Icon size="sm" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
      <Path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" />
    </Icon>
  );
}
