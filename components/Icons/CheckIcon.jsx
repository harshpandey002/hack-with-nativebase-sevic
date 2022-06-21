import React from "react";
import { Icon, Center } from "native-base";
import { Path, G } from "react-native-svg";

export default function CheckIcon({ fill }) {
  return (
    <Icon size="sm" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM7.33317 13.1667L3.1665 9.00008L4.3415 7.82508L7.33317 10.8084L13.6582 4.48341L14.8332 5.66675L7.33317 13.1667Z"
        fill={fill}
      />
    </Icon>
  );
}
