import { HStack, Text } from "native-base";
import React from "react";
import BackIcon from "./Icons/BackIcon";

export default function PageInfo({ pageTitle }) {
  return (
    <HStack
      display={["none", "none", "none", "flex"]}
      alignItems="center"
      space="14px"
      marginBottom="16px"
    >
      <BackIcon />
      <Text fontSize="18px" fontWeight="500">
        {pageTitle}
      </Text>
    </HStack>
  );
}
